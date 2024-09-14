const mongoose = require("mongoose");
// How to create a model
// Step 1: require mongoose
// Step 2: create a mongoose schema (structure of a user)
// Step 3: Create a model

const User = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  isBlocked: {
    type: Boolean,
    default: false, // By default, users are not blocked
  },
});

const Usermodel = mongoose.model("User", User);
module.exports = Usermodel;
