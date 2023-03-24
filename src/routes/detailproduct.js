const router = require('express').Router();
const { detailproduct } = require('../controller');

// GET localhost:8080/detailproduct => Ambil data semua detailproduct
router.get('/api/detailproduct', detailproduct.getDatadetailproduct);

// GET localhost:8080/detailproduct/2 => Ambil data semua detailproduct berdasarkan id = 2
router.get('/api/detailproduct/:id', detailproduct.getDatadetailproductByID);

// POST localhost:8080/detailproduct/add => Tambah data detailproduct ke database
router.post('/api/detailproduct/add', detailproduct.addDatadetailproduct);

// POST localhost:8080/detailproduct/2 => Edit data detailproduct
router.post('/api/detailproduct/edit', detailproduct.editDatadetailproduct);

// POST localhost:8080/detailproduct/delete => Delete data detailproduct
router.post('/api/detailproduct/delete/', detailproduct.deleteDatadetailproduct);

module.exports = router;