// const { Sequelize, Model } = require("sequelize");
// const S = Sequelize;
// const sequelize = require("../../db");
// const Orderlines = require("./orderlines");
// const Products = require("../models/products");

// class Orders extends Model {}
// Orders.init(
//   {
//     id: {
//       type: S.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       unique: true,
//     },
//     name: {
//       type: S.STRING,
//       allowNull: false,
//       validate: {
//         notNull: {
//           msg: "Name is mandatory",
//         },
//         len: {
//           arg: [3, 30],
//           msg: "Name must have between 3 y 30 characters",
//         },
//       },
//     },
//     total: {
//       type: S.DECIMAL(9, 2),
//       allowNull: false,
//       validate: {
//         notNull: {
//           msg: "Total is mandatory",
//         },
//         isDecimal: {
//           msg: 'Total must have decimals(cents), if it is an exact subTotal could be "00"',
//         },
//         min: {
//           args: [0],
//           msg: "Total can't be less than 0,00",
//         },
//       },
//     },
//     status: {
//       type: S.ENUM,
//       defaultValue: "Cart",
//       values: ["Cart", "Created", "Processing", "Canceled", "Completed"],
//     },
//   },
//   {
//     sequelize,
//     modelName: "orders",
//     underscored: true,
//   }
// );

// Orders.hasMany(Orderlines);

// Orders.associate = (models) => {
//   Orders.belongsToMany(models.products, {
//     through: { model: Orderlines },
//     foreignKey: "orders_id",
//   });
// };

// module.exports = Orders;
