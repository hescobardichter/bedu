const { DataTypes }  = require('sequelize');

const review = (sequelize) => sequelize.define('reviews', {
    id:  { type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true },
    description: { type: DataTypes.TEXT },
    productId: { 
        type: DataTypes.INTEGER,
        references: {
            model: 'products',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
});

module.exports = review;