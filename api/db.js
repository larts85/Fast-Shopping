const { Sequelize } = require("sequelize");
const { database } = require("./config");
const express = require("express");
const app = express();

const sequelize = new Sequelize(
  `mysql://${database.username}:${database.password}@${database.host}:${database.port}/${database.database}`
);

module.exports = sequelize;
