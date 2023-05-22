const config = require('../config/config');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

const getDatatransaksi = async (req, res) => {
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
}

const getDatatransaksiByID = (req, res) => {
    let id = req.params.id_transaksi;
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
}

const addDatatransaksi = (req, res) => {
    let data = {
        id_transaksi: req.body.id_transaksi,
        id_detail_trans: req.body.id_detail_trans,
        total: req.body.total,
        bayar: req.body.bayar,
        kembali: req.body.kembali,
        createdAt: new Date(),
        updatedAt: new Date()
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
}

const editDatatransaksi = (req, res) => {
    let dataEdit = {
        total: req.body.total,
        bayar: req.body.bayar,
        kembali: req.body.kembali,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    let id = req.body.id_transaksi
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
}

const deleteDatatransaksi = (req, res) => {
    let id = req.body.id_transaksi
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

module.exports = {
    getDatatransaksi,
    getDatatransaksiByID,
    addDatatransaksi,
    editDatatransaksi,
    deleteDatatransaksi
}