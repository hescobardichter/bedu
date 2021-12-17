const { DataTypes }  = require('sequelize');

const product = (sequelize) => sequelize.define('products', {
    id:  { type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    price: { type: DataTypes.FLOAT },
    image: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
});

module.exports = product;