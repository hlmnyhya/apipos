const config = require('../config/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    // Ambil data semua menu
    getDatamenu(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM menu;
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
    // Ambil data menu berdasarkan ID
    getDatamenuByID(req, res) {
        let id = req.params.id;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM menu WHERE id_menu = ?;
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
    // Simpan data menu
    addDatamenu(req, res) {
        let data = {
            menu_nama: req.body.nama,
            menu_umur: req.body.umur,
            menu_alamat: req.body.alamat,
            menu_jabatan: req.body.jabatan
        }
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                INSERT INTO menu SET ?;
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
    // Update data menu
    editDatamenu(req, res) {
        let dataEdit = {
            menu_nama: req.body.nama,
            menu_umur: req.body.umur,
            menu_alamat: req.body.alamat,
            menu_jabatan: req.body.jabatan
        }
        let id = req.body.id
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE menu SET ? WHERE id_menu = ?;
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
    // Delete data menu
    deleteDatamenu(req, res) {
        let id = req.body.id
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM menu WHERE id_menu = ?;
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