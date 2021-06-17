const { Sequelize } = require("sequelize");
const { database } = require("../config");
const { herokuDB } = require("../heroku.db");

const sequelize = new Sequelize(
  `mysql://${herokuDB.username}:${herokuDB.password}@${herokuDB.host}:${database.port}/${herokuDB.database}`
);

module.exports = sequelize;
