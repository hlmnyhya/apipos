module.exports = (sequelize, Sequelize) => {
    const AccesMenus = sequelize.define('access_menus', {
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
        await AccesMenus.sync();
    };

    connect();

    return AccesMenus;
}
