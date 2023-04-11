module.exports = (sequelize, Sequelize) => {
    const Barang = sequelize.define('barang', {
        id_barang: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        barang: {
            type: Sequelize.STRING
        },
        harga: {
            type: Sequelize.INTEGER
        },
        stok: {
            type: Sequelize.INTEGER
        },
        id_supplier: {
            type: Sequelize.INTEGER
        }
    });

    // Barang.belongsTo(sequelize.import('./Supplier.js'), { foreignKey: 'id_supplier' });

    const connect = async () => {
        await Barang.sync();
    };

    connect();

    return Barang;
}
