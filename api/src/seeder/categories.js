const Categories = require("../models/categories.models");

const categoriesSeeder = async () => {
  await Categories.bulkCreate([
    { id: 1, name: "Electronics" },
    { id: 2, name: "Jewelery" },
    { id: 3, name: "Men's clothing" },
    { id: 4, name: "Women's clothing" },
  ]);
};

module.exports = { categoriesSeeder };
