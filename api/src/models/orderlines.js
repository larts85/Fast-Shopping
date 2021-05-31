// const { Sequelize, Model } = require("sequelize");
// const sequelize = require("../../db");
// const S = Sequelize;
// const Products = require("../models/products");
// const Orders = require("../models/orders");

// class Orderlines extends Model {}
// Orderlines.init(
//   {
//     id: {
//       type: S.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//     },
//     product_id: {
//       type: S.INTEGER,
//       allowNull: false,
//     },
//     order_id: {
//       type: S.INTEGER,
//       allowNull: false,
//     },
//     subTotal: {
//       type: S.DECIMAL(9, 2),
//       allowNull: false,
//       validate: {
//         notNull: {
//           msg: "SubTotal is mandatory",
//         },
//         isDecimal: {
//           msg: 'SubTotal must have decimals(cents), if it is an exact subTotal could be "00"',
//         },
//         min: {
//           args: [0],
//           msg: "SubTotal can't be less than 0,00",
//         },
//       },
//     },
//     quantity: {
//       type: S.INTEGER,
//       validate: {
//         min: {
//           args: [1],
//           msg: "Quantity can't be less than 1",
//         },
//       },
//     },
//   },
//   {
//     sequelize,
//     modelName: "orderlines",
//     underscored: true,
//   }
// );

// Products.associate = (models) => {
//   Orderlines.belongsTo(models.products, { foreignKey: "products_id" });
//   Orderlines.belongsTo(models.orders, { foreignKey: "orders_id" });
// };

// module.exports = Orderlines;
