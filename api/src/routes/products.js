const express = require("express");
const app = express();
const Product = require("../models/products");
const Category = require("../models/categories");

app.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }],
    });
    console.log({ products });
    return res.json(products);
  } catch (error) {
    res.status(400).send(error);
    throw error;
  }
});

module.exports = app;
