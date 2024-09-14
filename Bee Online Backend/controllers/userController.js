const User = require("../models/User");
const bcrypt = require("bcrypt"); // for password hashing
const { getToken } = require("../utils/helpers");

// for registering new user
module.exports.register = async (req, res) => {
  // this code is run when the /register api is called as a post request
  // My req.body wil be of the format {email,password,firstName,lastName,username}
  try {
    const { email, password, confirmPassword, username } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match!" });
    }

    // Step 2 : Does a user with this email already exist? If yes ,we throw an error
    const user = await User.findOne({ email: email });
    if (user) {
      // status code by default is 200
      return res
        .status(403)
        .json({ error: "A user with this email already exists" });
    }
    // This is a valid request
    // Step 3 : Create a new user in Db
    // Step 3.1 : We do not store password in plain text
    // xyz :  we convert the plain text password to a hash
    // My hash of xyz depends on  2 parameters
    // If i keep those 2 parameters same ,xyz always gives the same hash
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserData = {
      email,
      password: hashedPassword,
      username,
    };
    const newUser = await User.create(newUserData);

    // Step 4 : we want to create  the token to return to the user

    const token = await getToken(email, newUser);

    // Step 5: Return the result to user

    const userToReturn = { ...newUser.toJSON(), token };
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ err: "Server error, please try again later." });
  }
};

// for login in the app
module.exports.login = async (req, res) => {
  try {
    //Step 1 : Get email and password sent by user from req.body
    const { username, password } = req.body;
    console.log(req.body);
    if (!username || !password) {
      return res.status(400).json({ err: "Email and password are required" });
    }
    // Step 2: Check if a user with the given email exists. If not, credentials are invalid
    // const user = await User.findOne({ email: email });
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(403).json({ err: "Invalid Credentials" });
    }
    // Step 3 : If the user exists ,check if the password is correct. If not, the credentials are invalid
    // This is a tricky step.Why? Because we have stored the original password in  a hashed form, which we cannot use to get back the password
    // I cannot do : if(password === user.password)
    // bcrypt.compare enables us to compare 1 password in plaintext(password from req.body) to a password in plaintext(password from req.body) to a hashed password(the one in our db) securely.

    const isPasswordValid = await bcrypt.compare(password, user.password);
    // this will be true or false
    if (!isPasswordValid) {
      return res.status(403).json({ err: "Invalid Credentials" });
    }

    // Step 4 : If the credentials is correct return a token
    const token = await getToken(user.email, user);
    const userToReturn = { ...user.toJSON(), token };
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ err: "Server error, please try again later." });
  }
};

// Block user by setting isBlocked to true
module.exports.blockUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndUpdate(
      userId,
      { isBlocked: true },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User blocked successfully', user });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Unblock user by setting isBlocked to false
module.exports.unblockUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndUpdate(
      userId,
      { isBlocked: false },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User unblocked successfully', user });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};