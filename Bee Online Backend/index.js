// npm init : package.json - This is a node project
// npm i express : expressJs package get install - project came to know that we are using express
// We finally use express
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();   
require("dotenv").config();

const port = process.env.PORT || 5000;
const db = require("./config/mongoose");

// Middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(express.json());

// using express routers
app.use(require("./routes"));

// using bodyParser
app.use(bodyParser.json());

// Now we want to tell express that our server will run on localhost:5000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
