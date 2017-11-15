"use strict";

const authentication = require("../../modules/authentication");
require('dotenv').config();

let printConsoleMessage = () => {
  return (req, res, next) => {
    next();
  };
};

module.exports = (app, db) => {
  app.get("/api/env", (req, res) => {
    res.json({
      host: "http://" + req.headers.host + "/api",
      env: process.env.NODE_ENV
    });
  });

  app.post("/api/login", printConsoleMessage(), authentication.login);
  app.post("/api/logout", printConsoleMessage(), authentication.logout);
};