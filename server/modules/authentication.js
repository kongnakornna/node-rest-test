(() => {
  "use strict";

  const passport = require("passport"),
    LocalStrategy = require("passport-local").Strategy,
    db = require("./../config/db.js"),
    crypto = require("crypto");
  require('dotenv').config();

  module.exports = {
    localStrategy: new LocalStrategy({
        usernameField: "email",
        passwordField: "password"
      },
      (email, password, done) => {
        db.mainDb.user
          .findOne({
            where: {
              email: email
            }
          })
          .then(user => {
            if (user === null) {
              return done(null, false, {
                message: "Incorrect credentials."
              });
            }

            let hash_sha1 = (password, salt) => {
              password = salt + password;
              let hash = crypto.createHash(
                "sha1"
              ); /** Hashing algorithm sha1 */
              hash.update(password);
              return hash.digest("hex");
            };

            let hashedPassword = hash_sha1(
              password,
              "key"
            );
            if (user.password === hashedPassword) {
              return done(null, user);
            }

            return done(null, false, {
              message: "Incorrect credentials."
            });
          });
      }
    ),

    serializeUser(user, done) {
      done(null, user.id);
    },

    deserializeUser(id, done) {
      db.mainDb.user
        .findOne({
          where: {
            id: id
          }
        })
        .then(user => {
          if (user === null) {
            done(new Error("Wrong user id."));
          } else {
            done(null, user);
          }
        });
    },

    login(req, res, next) {
      return passport.authenticate("local", (err, user) => {
        if (err) {
          return next(err);
        } else if (!user) {
          res.status(401).send("Authentication failed!");
        } else {
          req.logIn(user, err => {
            if (err) {
              res.status(401).send("Authentication failed!");
            } else {
              return res.json(user);
            }
          });
        }
      })(req, res, next);
    },

    logout(req, res) {
      req.logout();
      return res.json("OK");
    },

    isAuthorized(req, res, next) {
      if (
        req.isAuthenticated() ||
        process.env.NODE_ENV === "development"
      ) {
        return next();
      } else {
        res.status(401).send("Authorization Failed");
      }
    },

    hash_sha1(password, salt) {
      password = salt + password;
      let hash = crypto.createHash("sha1"); /** Hashing algorithm sha1 */
      hash.update(password);
      return hash.digest("hex");
    }
  };
})();