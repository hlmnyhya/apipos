const router = require('express').Router();
const { product } = require('../controller');

// GET localhost:8080/product => Ambil data semua product
router.get('/api/product', product.getDataproduct);

// GET localhost:8080/product/2 => Ambil data semua product berdasarkan id = 2
router.get('/api/product/:id', product.getDataproductByID);

// POST localhost:8080/product/add => Tambah data product ke database
router.post('/api/product/add', product.addDataproduct);

// POST localhost:8080/product/2 => Edit data product
router.post('/api/product/edit', product.editDataproduct);

// POST localhost:8080/product/delete => Delete data product
router.post('/api/product/delete/', product.deleteDataproduct);

module.exports = router;