"use strict";

const Sequelize = require("sequelize");
const env = require("./env");

const mainDb = new Sequelize(
  env.databases.main.DATABASE_NAME,
  env.databases.main.DATABASE_USERNAME,
  env.databases.main.DATABASE_PASSWORD,
  {
    host: env.databases.main.DATABASE_HOST,
    port: env.databases.main.DATABASE_PORT,
    dialect: env.databases.main.DATABASE_DIALECT,
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
