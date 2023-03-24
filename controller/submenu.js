const config = require('../config/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);


pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    // Ambil data semua submenu
    getDatasubmenu(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM sub_menu;
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
    // Ambil data submenu berdasarkan ID
    getDatasubmenuByID(req, res) {
        let id = req.params.id;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM sub_menu WHERE id_submenu = ?;
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
    // Simpan data submenu
    addDatasubmenu(req, res) {
        let data = {
            id_submenu: req.body.id_submenu,
            submenu: req.body.submenu,
            url: req.body.url,
            icon: req.body.icon,
            id_menu: req.body.id_menu,
            in_aktif: req.body.in_aktif
        }
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                INSERT INTO sub_menu SET ?;
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
    // Update data submenu
    editDatasubmenu(req, res) {
        let dataEdit = {
            submenu: req.body.submenu,
            url: req.body.url,
            icon: req.body.icon,
            id_menu: req.body.id_menu,
            in_aktif: req.body.in_aktif
        }
        let id = req.body.id
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE sub_menu SET ? WHERE id_submenu = ?;
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
    // Delete data submenu
    deleteDatasubmenu(req, res) {
        let id = req.body.id
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM sub_menu WHERE id_submenu = ?;
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