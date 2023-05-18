const config = require('../config/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    // Ambil data semua detailtransaksi
    getDatadetailtransaksi(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM detail_trans;
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
    // Ambil data detailtransaksi berdasarkan ID
    getDatadetailtransaksiByID(req, res) {
        let id = req.params.id;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM detail_trans WHERE id_detail_trans = ?;
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
    // Simpan data detailtransaksi
    addDatadetailtransaksi(req, res) {
        let data = {
            id_detail_trans: req.body.id_detail_trans,
            id_product: req.body.id_product,
            invoice: req.body.invoice,
            qty: req.body.qty,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                INSERT INTO detail_trans SET ?;
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
    // Update data detailtransaksi
    editDatadetailtransaksi(req, res) {
        let dataEdit = {
            id_product: req.body.id_product,
            invoice: req.body.invoice,
            qty: req.body.qty,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        let id = req.body.id_detail_trans
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE detail_trans SET ? WHERE id_detail_trans = ?;
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
    // Delete data detailtransaksi
    deleteDatadetailtransaksi(req, res) {
        let id = req.body.id_detail_trans
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM detail_trans WHERE id_detail_trans = ?;
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