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
        let id = req.params.id;
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
            nama: req.body.nama,
            username: req.body.username,
            password: req.body.password,
            id_usergroup: req.body.id_usergroup,
            status: req.body.status,
            input_by: req.body.input_by,
            tanggal_input: req.body.tanggal_input,
            edit_by: req.body.edit_by,
            tanggal_edit: req.body.tanggal_edit,
            row_status: req.body.row_status
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
                        data: results
                    });
                });
            connection.release();
        })
    },
    // Update data user
    editDatauser(req, res) {
        let dataEdit = {
            nama: req.body.nama,
            username: req.body.username,
            password: req.body.password,
            id_usergroup: req.body.id_usergroup,
            status: req.body.status,
            input_by: req.body.input_by,
            tanggal_input: req.body.tanggal_input,
            edit_by: req.body.edit_by,
            tanggal_edit: req.body.tanggal_edit,
            row_status: req.body.row_status
        }
        let id_user = req.body.id_user
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE user SET ? WHERE id_user = ?;
                `
                , [dataEdit, id_user],
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