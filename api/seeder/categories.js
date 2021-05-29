const Categories = require("../src/models/categories");

const categoriesSeeder = () => {
  Categories.bulkCreate([
    { name: "electronics" },
    { name: "jewelery" },
    { name: "men's clothing" },
    { name: "women's clothing" },
  ]);
};

module.exports = { categoriesSeeder };
