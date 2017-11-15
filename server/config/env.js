"use strict";

require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 8080, // test port
  databases: {
    main: {
      DATABASE_NAME: process.env.DATABASE_NAME || "dbname",           // test dbname
      DATABASE_HOST: process.env.DATABASE_HOST || "host",             // test host
      DATABASE_USERNAME: process.env.DATABASE_USERNAME || "username", // test username
      DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || "password", // test password
      DATABASE_DIALECT: process.env.DATABASE_DIALECT || "mysql",
      NODE_ENV: process.env.NODE_ENV || "development"
    }
  }
};