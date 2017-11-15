"use strict";

const fs = require("fs"),
  express = require("express"),
  app = express(),
  path = require("path"),
  cors = require("cors"),
  crypto = require("crypto"),
  request = require("request"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  session = require("express-session"),
  db = require("./server/config/db.js"),
  cookieParser = require("cookie-parser"),
  router = require("./server/router/index"),
  authentication = require("./server/modules/authentication");

require('dotenv').config();

app.use(cors());
app.use(
  session({
    secret: "cookie_secret",
    name: "cookie_name",
    proxy: true,
    resave: true,
    saveUninitialized: true
  })
);

app.use(bodyParser.json({
  limit: "50mb"
}));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(authentication.localStrategy);
passport.serializeUser(authentication.serializeUser);
passport.deserializeUser(authentication.deserializeUser);

router(app, db);

app.use(express.static(path.join(__dirname, "public/")));
app.use(express.static(path.join(__dirname, "uploads/")));

app.get("/*", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(process.env.PORT);
console.log(`serving template at http://localhost:${process.env.PORT}`);