const config = require('../config/config');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    // Ambil data semua temptransaksi
    getDatatemptransaksi(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM temp_trans;
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
    // Ambil data temptransaksi berdasarkan ID
    getDatatemptransaksiByID(req, res) {
        let id = req.params.id_temp_trans;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM temp_trans WHERE id_temp_trans = ?;
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
    // Simpan data temptransaksi
    addDatatemptransaksi(req, res) {
        let data = {
            id_temp_trans: req.body.id_temp_trans,
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
                INSERT INTO temp_trans SET ?;
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
    // Update data temptransaksi
    editDatatemptransaksi(req, res) {
        let dataEdit = {
            id_product: req.body.id_product,
            invoice: req.body.invoice,
            qty: req.body.qty,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        let id = req.body.id_temp_trans
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE temp_trans SET ? WHERE id_temp_trans = ?;
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
    // Delete data temptransaksi
    deleteDatatemptransaksi(req, res) {
        let id = req.body.id_temp_trans
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM temp_trans WHERE id_temp_trans = ?;
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