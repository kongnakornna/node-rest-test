"use strict";

const routes = [
  require("./routes/ping"),
  require("./routes/user"),
  require("./routes/role"),
  require("./routes/authentication")
];

module.exports = (app, db) => {
  return routes.forEach(route => {
    route(app, db);
  });
};