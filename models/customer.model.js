module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('customer', {
        id_customer: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_order: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        tgl_pesan: {
            type: Sequelize.DATE
        },
        total: {
            type: Sequelize.INTEGER
        },
    });

    const connect = async () => {
        await Customer.sync();
    };

    connect();

    return Customer;
}
