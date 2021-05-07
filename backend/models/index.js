const Sequelize = require('sequelize');
const road_statistics = require('./road_statistics');
const sl_code = require('./sl_code');
const sl_statistics = require('./sl_statistics');
const street_light = require('./street_light');
const weather = require('./weather');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
//module.exports = db;



db.road_statistics = road_statistics;
db.sl_code = sl_code;
db.sl_statistics = sl_statistics;
db.street_light = street_light;
db.weather = weather;

road_statistics.init(sequelize);
sl_code.init(sequelize);
sl_statistics.init(sequelize);
street_light.init(sequelize);
weather.init(sequelize);

road_statistics.associate(db);
sl_code.associate(db);
sl_statistics.associate(db);
street_light.associate(db);
weather.associate(db);

module.exports = db;
// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
