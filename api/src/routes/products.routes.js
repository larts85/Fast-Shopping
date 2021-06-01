const express = require("express");
const app = express();
const {
  updateProductsStock,
  getAllProducts,
  createProduct,
} = require("../controllers/products.controller");

app.get("/", getAllProducts);

app.post("/", createProduct);

app.put("/stock", updateProductsStock);

module.exports = app;
