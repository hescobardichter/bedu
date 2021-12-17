const { DataTypes }  = require('sequelize');
const bcrypt = require('bcrypt');

const user = (sequelize) => sequelize.define('user', {
    id:  { type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true },
    name: { type: DataTypes.STRING },
    lastname: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
}, {
    hooks: {
        beforeCreate: (user) => {
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt);
        }
    }
});

user.prototype.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password);
}

module.exports = user;