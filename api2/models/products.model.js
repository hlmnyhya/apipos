module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('product', {
        id_product: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product: {
            type: Sequelize.STRING
        },
        kategori: {
            type: Sequelize.STRING
        },
        harga: {
            type: Sequelize.INTEGER
        },
        stok: {
            type: Sequelize.INTEGER
        }
    });

    const connect = async () => {
        await Product.sync();
    };

    connect();

    return Product;
}
