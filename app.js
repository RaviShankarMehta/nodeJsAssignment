const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const useragent = require("express-useragent");
const connectDB = require("./config/connectDB");
const app = express();
dotenv.config();
connectDB();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(useragent.express());
app.use(require("./routes/routes"));
module.exports = app; // Export the app for testing purposes
