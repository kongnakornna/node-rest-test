"use strict";

const passport = require("passport"),
  authentication = require("../../modules/authentication"),
  env = require("../../config/env");

let printConsoleMessage = () => {
  return (req, res, next) => {
    next();
  };
};

module.exports = (app, db) => {
  app.get("/api/env", (req, res) => {
    res.json({
      host: "http://" + req.headers.host + "/api",
      env: env.NODE_ENV
    });
  });

  app.post("/api/login", printConsoleMessage(), authentication.login);
  app.post("/api/logout", printConsoleMessage(), authentication.logout);
};
