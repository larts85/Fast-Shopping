const express = require("express");
const app = express();
const Products = require("../models/products");

app.get("/", async (req, res) => {
  Products.findAll()
    .then((user) => res.json(user))
    .catch((err) => {
      throw err;
    });
});

module.exports = app;
