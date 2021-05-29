const { Router } = require("express");

const productRouter = require("./products.js");
const categoriesRouter = require("./categories.js");

const app = Router();

app.use("/products", productRouter);
app.use("/category", categoriesRouter);

module.exports = app;
