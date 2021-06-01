const { Router } = require("express");

const productRouter = require("./products.routes.js");
const categoriesRouter = require("./categories.routes.js");
const orderlinesRouter = require("./orderlines.routes.js");
const ordersRouter = require("./orders.routes.js");

const app = Router();

app.use("/products", productRouter);
app.use("/categories", categoriesRouter);
app.use("/orderlines", orderlinesRouter);
app.use("/orders", ordersRouter);

module.exports = app;
