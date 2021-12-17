const { Sequelize } = require('sequelize');

const NoteModel = require('./models/Note');

const sequelize = new Sequelize('<database>', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
});

const models = [NoteModel];

for (const model of models) {
    model(sequelize);
}

module.exports = sequelize;