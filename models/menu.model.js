module.exports = (sequelize, Sequelize) => {
    const Menu = sequelize.define('menu', {
        id_menu: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        menu: {
            type: Sequelize.STRING
        },
        icon: {
            type: Sequelize.STRING
        },
        in_aktif: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });

    const connect = async () => {
        await Menu.sync();
    };

    connect();

    return Menu;
}
