const db = {};
const { databaseConfig } = require('../config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(databaseConfig);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.USER = require('./user')(sequelize, Sequelize);
db.QUESTION = require('./question')(sequelize, Sequelize);
db.ANSWER = require('./answer')(sequelize, Sequelize);

db.USER.hasMany(db.QUESTION, { foreignKey: 'userIdx', sourceKey: 'id' });
db.QUESTION.belongsTo(db.USER, { foreignKey: 'userIdx', targetKey: 'id' });

db.QUESTION.hasMany(db.ANSWER, { foreignKey: 'questionIdx', sourceKey: 'id' });
db.ANSWER.belongsTo(db.QUESTION, { foreignKey: 'questionIdx', targetKey: 'id' });

module.exports = db;