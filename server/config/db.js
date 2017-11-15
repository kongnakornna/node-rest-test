"use strict";

const Sequelize = require("sequelize");
require('dotenv').config();

const mainDb = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: process.env.DATABASE_DIALECT,
    timezone: "+03:00",
    define: {
      underscored: true,
      timestamps: false
    },
    logging: false
  }
);

const db = {};
db.Sequelize = Sequelize;
db.mainDb = mainDb;

//Models/tables
// db.mainDb.user = require('../models/user.js')(mainDb, Sequelize);
// db.mainDb.role = require('../models/role.js')(mainDb, Sequelize);

//Relations
// db.mainDb.user.belongsTo(db.mainDb.role, { foreignKey: "role_id" });

module.exports = db;