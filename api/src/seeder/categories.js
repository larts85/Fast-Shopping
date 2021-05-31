const Category = require("../models/categories");

const categoriesSeeder = () => {
  Category.bulkCreate([
    { name: "Electronics" },
    { name: "Jewelery" },
    { name: "Men's clothing" },
    { name: "Women's clothing" },
  ]);
};

module.exports = { categoriesSeeder };
