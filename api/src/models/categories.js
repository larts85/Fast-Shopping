const { Sequelize, Model } = require("sequelize");
const sequelize = require("../../db");
const S = Sequelize;

class Categories extends Model {}
Categories.init(
  {
    id: {
      type: S.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name is mandatory",
        },
        len: {
          msg: "El nombre debe tener entre 3 y 30 caracteres",
        },
      },
    },
  },
  {
    sequelize,
    modelName: "categories",
  }
);

module.exports = Categories;
