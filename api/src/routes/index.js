const { Router } = require("express");

const productRouter = require("./products.js");
const categoriesRouter = require("./categories.js");
// const orderlinesRouter = require("./orderlines.js");

const app = Router();

app.use("/products", productRouter);
app.use("/categories", categoriesRouter);
// app.use("/orderlines", orderlinesRouter);

module.exports = app;
