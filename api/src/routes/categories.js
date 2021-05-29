const express = require("express");
const app = express();
const Categories = require("../models/categories");

app.get("/", (req, res) => {
  Categories.findAll()
    .then((user) => res.status(200).json(user))
    .catch((err) => {
      throw err;
    });
});

module.exports = app;
