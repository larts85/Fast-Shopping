const express = require("express");
const Categories = require("../models/categories.models");

const app = express();

app.post("/", (req, res) => {
  console.log(req.query);
  const { name } = req.query;
  Categories.create({ name })
    .then((category) => {
      res.status(200).send(category);
    })
    .catch((error) => {
      res.status(400).send(error);
      throw error;
    });
});

module.exports = app;
