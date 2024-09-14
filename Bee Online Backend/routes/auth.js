const express = require("express");
const passport = require("passport");
const{ register ,login,blockUser,unblockUser } =require("../controllers/userController")
const router = express.Router();

// this post route will help to register a user
router.post("/register", register);
// this post route help for login 
router.post("/login",login );

// Route to block a user
router.patch('/block/:id', blockUser);

// Route to unblock a user
router.patch('/unblock/:id', unblockUser);

module.exports = router;
