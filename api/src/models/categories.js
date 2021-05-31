const { Sequelize, Model } = require("sequelize");
const sequelize = require("../db");
const S = Sequelize;
const Product = require("./products");

// class Category extends Model {}
// Category.init(
//   ,{
//     sequelize,
//     modelName: "category",
//     charset: "utf8",
//     collate: "utf8_general_ci",
//     underscored: true,
//   }
// )
// module.exports = Category;

const Categories = sequelize.define("categories", {
  id: {
    type: S.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  name: {
    type: S.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Name is mandatory",
      },
      len: {
        arg: [3, 30],
        msg: "Name must have between 3 y 30 characters",
      },
    },
  },
});

module.exports = Categories;
