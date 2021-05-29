const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./src/routes/index.js");

const sequelize = require("./db");

// const { productsSeeder } = require("./seeder/products.js");
// const { categoriesSeeder } = require("./seeder/categories.js");

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

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Connected successfully to Database");

    // productsSeeder();
    // categoriesSeeder();

    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

module.exports = app;
