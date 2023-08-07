// models/index.js
const UserModel = require("./User");
const RoleModel = require("./Role");
const CategoryModel = require("./Category");
const ProductModel = require("./Product");
const TransactionModel = require("./transaction");
const CartModel = require("./cart");
const sequelize = require("../config/database");
const Sequelize = require("sequelize");
const User = UserModel(sequelize, Sequelize);
const Role = RoleModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);

const Transaction = TransactionModel(sequelize, Sequelize);
const Cart = CartModel(sequelize, Sequelize);

User.associate({ Role });
Role.associate({ User });
Product.associate({ Category });
Category.associate({ Product });
Transaction.associate({ User, Product }); // Update this line
Cart.associate({ Product });

module.exports = {
  sequelize,
  User,
  Role,
  Category,
  Product,
  Transaction,
  Cart,
};
