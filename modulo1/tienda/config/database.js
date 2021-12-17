const { Sequelize } = require('sequelize');

const Product = require('./../models/Product');
const Review = require('./../models/Review');
const Order = require('./../models/Order');
const User = require('./../models/User');

const sequelize = new Sequelize('ecommerce-api', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
});

const models = [Product, Review, User, Order];

models.forEach((model) => {
    model(sequelize);
});

const { products,  reviews, users, orders } = sequelize.models;

reviews.belongsTo(products);
orders.belongsTo(users);
orders.belongsTo(products);

module.exports = sequelize;