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
db.User = require('./user.model')(sequelize, Sequelize);
db.UserGroup = require('./usergroup.model')(sequelize, Sequelize);
db.Transaksi = require('./transaksi.model')(sequelize, Sequelize);
db.DetailTransaksi = require('./detailtransaksi.model')(sequelize, Sequelize);
db.Customer = require('./customer.model')(sequelize, Sequelize);
db.Product = require('./product.model')(sequelize, Sequelize);
db.DetailProduct = require('./detailproduct.model')(sequelize, Sequelize);
db.Order = require('./order.model')(sequelize, Sequelize);
db.Menu = require('./menu.model')(sequelize, Sequelize);
db.SubMenu = require('./submenu.model')(sequelize, Sequelize);
db.MenuAkses = require('./menuakses.model')(sequelize, Sequelize);
db.Barang = require('./barang.model')(sequelize, Sequelize);
db.Supplier = require('./supplier.model')(sequelize, Sequelize);

module.exports = db;
