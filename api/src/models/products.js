const { Sequelize, Model } = require("sequelize");
const sequelize = require("../db");
const S = Sequelize;
// const Orders = require("./orders");
// const Orderlines = require("./orderlines");
const Category = require("./categories");

const Products = sequelize.define("products", {
  id: {
    type: S.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  category_id: {
    type: S.INTEGER,
    allowNull: false,
    // references: {
    //   model: "categories",
    //   key: "id",
    // },
  },
  name: {
    type: S.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Name is mandatory",
      },
      len: {
        arg: [5, 40],
        msg: "Descripción must have between 5 y 40 characters",
      },
    },
  },
  description: {
    type: S.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Description is mandatory",
      },
      len: {
        arg: [1, 255],
        msg: "Descripción must have between 20 y 255 characters",
      },
    },
  },
  price: {
    type: S.DECIMAL(9, 2),
    allowNull: false,
    validate: {
      notNull: {
        msg: "Price is mandatory",
      },
    },
  },
  stock: {
    type: S.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Minimun stock is one",
      },
      isInt: {
        msg: "Stock must be an integer",
      },
      min: {
        args: [0],
        msg: "Minimun stock is one",
      },
    },
  },
});

module.exports = Products;
// class Product extends Model {}
// Product.init(
//   {
//     id: {
//       type: S.INTEGER,
//       primaryKey: true,
//       allowNull: false,
//       autoIncrement: true,
//     },
//     category_id: {
//       type: S.INTEGER,
//       allowNull: false,
//       // references: {
//       //   model: "categories",
//       //   key: "id",
//       // },
//     },
//     name: {
//       type: S.STRING,
//       allowNull: false,
//       validate: {
//         notNull: {
//           msg: "Name is mandatory",
//         },
//         len: {
//           arg: [5, 40],
//           msg: "Descripción must have between 5 y 40 characters",
//         },
//       },
//     },
//     description: {
//       type: S.TEXT,
//       allowNull: false,
//       validate: {
//         notNull: {
//           msg: "Description is mandatory",
//         },
//         len: {
//           arg: [1, 255],
//           msg: "Descripción must have between 20 y 255 characters",
//         },
//       },
//     },
//     price: {
//       type: S.DECIMAL(9, 2),
//       allowNull: false,
//       validate: {
//         notNull: {
//           msg: "Price is mandatory",
//         },
//       },
//     },
//     stock: {
//       type: S.INTEGER,
//       allowNull: false,
//       validate: {
//         notNull: {
//           msg: "Minimun stock is one",
//         },
//         isInt: {
//           msg: "Stock must be an integer",
//         },
//         min: {
//           args: [0],
//           msg: "Minimun stock is one",
//         },
//       },
//     },
//   },
//   {
//     sequelize,
//     modelName: "product",
//     charset: "utf8",
//     collate: "utf8_general_ci",
//     underscored: true,
//   }
// );
// Product.belongsTo(Category);

// Products.hasOne(Orderlines);
// Products.associate = (models) => {
//   Products.belongsToMany(models.orders, {
//     through: { model: Orderlines },
//     foreignKey: "products_id",
//   });
// };

// module.exports = Product;
