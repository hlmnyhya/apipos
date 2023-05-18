<<<<<<< HEAD
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
=======
const dbConfig = require('../config/database');
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: 'mysql', // atau jenis database lainnya
        logging: false // bisa diatur true atau false, menentukan apakah Sequelize akan mencatat log aktivitas SQL ke konsol atau tidak
    }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


// define semua models yang ada pada aplikasi
db.User = require('./users.model')(sequelize, Sequelize);
db.UserGroup = require('./usergroups.model')(sequelize, Sequelize);
db.Transactions = require('./transactions.model')(sequelize, Sequelize);
db.DetailTransaksi = require('./transactiondetails.model')(sequelize, Sequelize);
const newLocal = './customers.model';
db.Customers = require(newLocal)(sequelize, Sequelize);
db.Products = require('./products.model')(sequelize, Sequelize);
db.DetailProduct = require('./productdetails.model')(sequelize, Sequelize);
db.Orders = require('./orders.model')(sequelize, Sequelize);
db.Menus = require('./menus.model')(sequelize, Sequelize);
db.SubMenus = require('./submenus.model')(sequelize, Sequelize);
db.AccessMenus = require('./accessmenus.model')(sequelize, Sequelize);
db.Items = require('./items.model')(sequelize, Sequelize);
db.Suppliers = require('./suppliers.model')(sequelize, Sequelize);
>>>>>>> f148faf6da41b18e654f3b705826b6bac0acc8e2

module.exports = db;
