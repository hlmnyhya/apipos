const config = require('../config/config');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    // Ambil data semua product
    getDataproduct(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM product;
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
    // Ambil data product berdasarkan ID
    getDataproductByID(req, res) {
        let id = req.params.id_product;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM product WHERE id_product = ?;
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
    // Simpan data product
    addDataproduct(req, res) {
        let data = {
            id_product: req.body.id_product,
            nama: req.body.nama,
            deskripsi: req.body.deskripsi,
            harga: req.body.harga,
            stok: req.body.stok,
            kategori: req.body.kategori,
            gambar: req.body.gambar,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                INSERT INTO product SET ?;
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
    // Update data product
    editDataproduct(req, res) {
        let dataEdit = {
            nama: req.body.nama,
            deskripsi: req.body.deskripsi,
            harga: req.body.harga,
            stok: req.body.stok,
            kategori: req.body.kategori,
            gambar: req.body.gambar,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        let id = req.body.id_product
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE product SET ? WHERE id_product = ?;
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
    // Delete data product
    deleteDataproduct(req, res) {
        let id = req.body.id
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM product WHERE id_product = ?;
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