module.exports = (sequelize, Sequelize) => {
    const SubMenu = sequelize.define('sub_menu', {
        id_submenu: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        submenu: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING
        },
        icon: {
            type: Sequelize.STRING
        },
        id_menu: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        in_aktif: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });

    const connect = async () => {
        await SubMenu.sync();
    };

    connect();

    return SubMenu;
}
