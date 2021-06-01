const { Router } = require("express");

const productRouter = require("./products.routes.js");
const ordersRouter = require("./orders.routes.js");

const app = Router();

app.use("/products", productRouter);
app.use("/orders", ordersRouter);

module.exports = app;
