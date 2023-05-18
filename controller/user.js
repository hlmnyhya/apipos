const config = require('../config/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    // Ambil data semua user
    getDatauser(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM user;
                `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Berhasil ambil data!',
                        data: results
                    });
                });
            connection.release();
        })
    },
    // Ambil data user berdasarkan ID
    getDatauserByID(req, res) {
        let id = req.params.id_user;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM user WHERE id_user = ?;
                `
                , [id],
                function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Berhasil ambil data!',
                        data: results
                    });
                });
            connection.release();
        })
    },
    // Simpan data user
    addDatauser(req, res) {
        let data = {
            id_user: req.body.id_user,
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                INSERT INTO user SET ?;
                `
                , [data],
                function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Berhasil tambah data!',
                    });
                });
            connection.release();
        })
    },
    // Update data user
    editDatauser(req, res) {
        let dataEdit = {
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        let id = req.body.id_user
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE user SET ? WHERE id_user = ?;
                `
                , [dataEdit, id],
                function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Berhasil edit data!',
                    });
                });
            connection.release();
        })
    },
    // Delete data user
    deleteDatauser(req, res) {
        let id = req.body.id_user
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM user WHERE id_user = ?;
                `
                , [id],
                function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Berhasil hapus data!'
                    });
                });
            connection.release();
        })
    }
}