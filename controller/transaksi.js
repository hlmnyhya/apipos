const config = require('../config/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    // Ambil data semua transaksi
    getDatatransaksi(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM transaksi;
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
    // Ambil data transaksi berdasarkan ID
    getDatatransaksiByID(req, res) {
        let id = req.params.id;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM transaksi WHERE id_transaksi = ?;
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
    // Simpan data transaksi
    addDatatransaksi(req, res) {
        let data = {
            transaksi_nama: req.body.nama,
            transaksi_umur: req.body.umur,
            transaksi_alamat: req.body.alamat,
            transaksi_jabatan: req.body.jabatan
        }
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                INSERT INTO transaksi SET ?;
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
    // Update data transaksi
    editDatatransaksi(req, res) {
        let dataEdit = {
            transaksi_nama: req.body.nama,
            transaksi_umur: req.body.umur,
            transaksi_alamat: req.body.alamat,
            transaksi_jabatan: req.body.jabatan
        }
        let id = req.body.id
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE transaksi SET ? WHERE id_transaksi = ?;
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
    // Delete data transaksi
    deleteDatatransaksi(req, res) {
        let id = req.body.id
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM transaksi WHERE id_transaksi = ?;
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