const config = require('../config/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);


pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    // Ambil data semua detailproduct
    getDatadetailproduct(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM detail_product;
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
    // Ambil data detailproduct berdasarkan ID
    getDatadetailproductByID(req, res) {
        let id = req.params.id;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM detail_product WHERE id_detail_product = ?;
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
    // Simpan data detailproduct
    addDatadetailproduct(req, res) {
        let data = {
            id_detail_product: req.body.id_detail_product,
            id_product: req.body.id_product,
            id_barang: req.body.id_barang,
            id_supplier: req.body.id_supplier
        }
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                INSERT INTO detail_product SET ?;
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
    // Update data detailproduct
    editDatadetailproduct(req, res) {
        let dataEdit = {
            id_detail_product: req.body.id_detail_product,
            id_product: req.body.id_product,
            id_barang: req.body.id_barang,
            id_supplier: req.body.id_supplier
        }
        let id = req.body.id
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE detail_product SET ? WHERE id_detail_product = ?;
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
    // Delete data detailproduct
    deleteDatadetailproduct(req, res) {
        let id = req.body.id
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM detail_product WHERE id_detail_product = ?;
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