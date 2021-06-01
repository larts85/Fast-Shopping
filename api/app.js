const express = require("express");
const app = express();
const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./src/routes/index.js");

const sequelize = require("./src/db");

const { productsSeeder } = require("./src/seeder/products.js");
const {
  categoriesSeeder,
  categoy_productSeder,
} = require("./src/seeder/categories.js");

const PORT = process.env.PORT || 4000;
app.name = "API";

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/", routes);

sequelize
  .sync({ force: false })
  .then(() => {
    // sequelize.query("set FOREIGN_KEY_CHECKS=0");
    console.log("Connected successfully to Database");

    // categoriesSeeder();
    // productsSeeder();
    // categoy_productSeder();

    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

module.exports = app;
