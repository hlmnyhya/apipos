module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define('transaction', {
        id_transaction: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tgl_transaction: {
            type: Sequelize.DATE
        },
        total: {
            type: Sequelize.INTEGER
        },
        bayar: {
            type: Sequelize.INTEGER
        },
        kembali: {
            type: Sequelize.INTEGER
        }
    });

    const connect = async () => {
        await Transaction.sync();
    };

    connect();

    return Transaction;
}
