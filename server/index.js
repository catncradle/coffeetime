const express = require("express");
const app = express();
const path = require("path");
const volleyball = require("volleyball");
const bodyParser = require("body-parser");

//logging and parsing middleware
app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//api and routing middleware
app.use("/api", require("./api"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal Error");
});

module.exports = app;
