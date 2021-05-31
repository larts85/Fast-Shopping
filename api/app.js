const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./src/routes/index.js");

const sequelize = require("./src/db");
const Categories = require("./src/models/categories");
const Products = require("./src/models/products");

Categories.hasMany(Products, {
  foreignKeyConstraint: false,
  foreignKey: "category_id",
});

const { productsSeeder } = require("./src/seeder/products.js");
const { categoriesSeeder } = require("./src/seeder/categories.js");

const PORT = process.env.PORT || 4000;
app.name = "API";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/", routes);
let promise = sequelize.query("set FOREIGN_KEY_CHECKS=0");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Connected successfully to Database");

    categoriesSeeder();
    productsSeeder();

    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

module.exports = app;
