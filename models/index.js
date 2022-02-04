const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const User = require('./user');
const Stock = require('./stock');
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Stock = Stock;

User.init(sequelize);
Stock.init(sequelize);

User.associate(db);
Stock.associate(db);

module.exports = db;
