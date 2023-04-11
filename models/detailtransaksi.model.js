module.exports = (sequelize, Sequelize) => {
    const DetailTransaksi = sequelize.define('detail_transaksi', {
        id_detail_transaksi: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });

    // DetailTransaksi.belongsTo(sequelize.import('./Customer.js'), { foreignKey: 'id_customer' });
    // DetailTransaksi.belongsTo(sequelize.import('./Product.js'), { foreignKey: 'id_product' });
    // DetailTransaksi.belongsTo(sequelize.import('./Order.js'), { foreignKey: 'id_order' });
    // DetailTransaksi.belongsTo(sequelize.import('./Transaksi.js'), { foreignKey: 'id_transaksi' });

    const connect = async () => {
        await DetailTransaksi.sync();
    };

    connect();

    return DetailTransaksi;
}
