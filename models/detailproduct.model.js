module.exports = (sequelize, Sequelize) => {
    const DetailProduct = sequelize.define('detail_product', {
        id_detail_product: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });

    // DetailProduct.belongsTo(sequelize.import('./Product.js'), { foreignKey: 'id_product' });
    // DetailProduct.belongsTo(sequelize.import('./Barang.js'), { foreignKey: 'id_barang' });
    // DetailProduct.belongsTo(sequelize.import('./Supplier.js'), { foreignKey: 'id_supplier' });

    const connect = async () => {
        await DetailProduct.sync();
    };

    connect();

    return DetailProduct;
}
