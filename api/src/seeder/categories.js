const Categories = require("../models/categories.models");
const Products = require("../models/products.models");

const categoriesSeeder = async () => {
  await Categories.bulkCreate([
    { id: 1, name: "Electronics" },
    { id: 2, name: "Jewelery" },
    { id: 3, name: "Men's clothing" },
    { id: 4, name: "Women's clothing" },
  ]);
};

// This function create several relationships between categories and products
function categoy_productSeder() {
  for (let i = 1; i < 21; i++) {
    Products.findByPk(i).then((product) => {
      Categories.findByPk(i).then((category) => {
        product.addCategory(category);
      });
    });
  }
  for (let i = 1; i < 5; i++) {
    Products.findByPk(i).then((product) => {
      Categories.findByPk(5 - i).then((category) => {
        product.addCategory(category);
      });
    });
  }
}

module.exports = { categoriesSeeder, categoy_productSeder };
