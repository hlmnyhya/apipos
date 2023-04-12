module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define('items', {
        id_item: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Item: {
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

    // Item.belongsTo(sequelize.import('./Supplier.js'), { foreignKey: 'id_supplier' });

    const connect = async () => {
        await Item.sync();
    };

    connect();

    return Item;
}
