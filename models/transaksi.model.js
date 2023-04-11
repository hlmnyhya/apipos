module.exports = (sequelize, Sequelize) => {
    const Transaksi = sequelize.define('transaksi', {
        id_transaksi: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tgl_transaksi: {
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
        await Transaksi.sync();
    };

    connect();

    return Transaksi;
}
