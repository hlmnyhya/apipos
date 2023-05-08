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

module.exports = db;
