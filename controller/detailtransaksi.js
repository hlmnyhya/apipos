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
                SELECT * FROM detail_transaksi;
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
                SELECT * FROM detail_transaksi WHERE id_detail_transaksi = ?;
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
            id_detail_transaksi: req.body.id_detail_transaksi,
            id_customer: req.body.id_customer,
            id_product: req.body.id_product,
            id_order: req.body.id_order,
            id_transaksi: req.body.id_transaksi
        }
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                INSERT INTO detail_transaksi SET ?;
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
            id_detail_transaksi: req.body.id_detail_transaksi,
            id_customer: req.body.id_customer,
            id_product: req.body.id_product,
            id_order: req.body.id_order,
            id_transaksi: req.body.id_transaksi
        }
        let id = req.body.id
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE detail_transaksi SET ? WHERE id_detail_transaksi = ?;
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
        let id = req.body.id
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM detail_transaksi WHERE id_detail_transaksi = ?;
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