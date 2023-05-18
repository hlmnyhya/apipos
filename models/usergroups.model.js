module.exports = (sequelize, Sequelize) => {
    const UserGroup = sequelize.define('usergroup', {
        id_usergroup: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        usergroup: {
            type: Sequelize.STRING,
        },
        input_by: {
            type: Sequelize.STRING,
        },
        edit_by: {
            type: Sequelize.STRING,
        },
        row_status: {
            type: Sequelize.INTEGER,
        },
    });

    // const connect = async () => {
    //     await UserGroup.sync();
    // };

    // connect();

    // Menghubungkan tabel `user_groups` dengan tabel `users`
    // UserGroup.hasMany(sequelize.models.User, {
    //     foreignKey: 'id_usergroup',
    //     as: 'user'
    // });

    return UserGroup;
}
