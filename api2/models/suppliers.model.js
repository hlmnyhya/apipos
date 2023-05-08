module.exports = (sequelize, Sequelize) => {
    const Supplier = sequelize.define('supplier', {
        id_supplier: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        supplier: {
            type: Sequelize.STRING
        },
        no_telp: {
            type: Sequelize.STRING
        },
        alamat: {
            type: Sequelize.STRING
        }
    });

    const connect = async () => {
        await Supplier.sync();
    };

    connect();

    return Supplier;
}
