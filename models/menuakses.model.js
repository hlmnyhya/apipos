module.exports = (sequelize, Sequelize) => {
    const MenuAkses = sequelize.define('menu_akses', {
        id_menuakses: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_menu: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        id_usergroup: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    const connect = async () => {
        await MenuAkses.sync();
    };

    connect();

    return MenuAkses;
}
