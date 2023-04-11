module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        id_user: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        nama: {
            type: Sequelize.STRING,
        },
        username: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },
        id_usergroup: {
            type: Sequelize.INTEGER,
            references: {
                model: 'usergroup', // Nama tabel yang menjadi rujukan
                key: 'id_usergroup' // Nama kolom yang menjadi rujukan
            }
        },
        status: {
            type: Sequelize.STRING,
        },
        input_by: {
            type: Sequelize.STRING,
        },
        edit_by: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.INTEGER,
        },
    });

    // Menghubungkan tabel `users` dengan tabel `user_groups`
    // User.belongsTo(sequelize.import('./usergroups.model'), { foreignKey: 'id_supplier' });

    return User;
}
