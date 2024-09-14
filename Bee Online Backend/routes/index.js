const express = require("express");
// const router = require("./users");
const routers = express.Router();

// user routes
 routers.use("/auth", require("./auth"));

// student routes
routers.use("/student", require("./student"));



module.exports = routers;
