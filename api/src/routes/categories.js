const express = require("express");
const app = express();
const Category = require("../models/categories");

app.get("/", (req, res) => {
  Category.findAll()
    .then((user) => res.status(200).json(user))
    .catch((err) => {
      throw err;
    });
});

module.exports = app;
