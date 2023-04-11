module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define('order', {
        id_order: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_toko: {
            type: Sequelize.STRING
        },
        alamat: {
            type: Sequelize.STRING
        },
        no_hp: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }
    });

    const connect = async () => {
        await Order.sync();
    };

    connect();

    return Order;
}
