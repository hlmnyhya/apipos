const router = require('express').Router();
const { supplier } = require('../controller');

// GET localhost:8080/supplier => Ambil data semua supplier
router.get('/api/supplier', supplier.getDatasupplier);

// GET localhost:8080/supplier/2 => Ambil data semua supplier berdasarkan id = 2
router.get('/api/supplier/:id', supplier.getDatasupplierByID);

// POST localhost:8080/supplier/add => Tambah data supplier ke database
router.post('/api/supplier/add', supplier.addDatasupplier);

// POST localhost:8080/supplier/2 => Edit data supplier
router.post('/api/supplier/edit', supplier.editDatasupplier);

// POST localhost:8080/supplier/delete => Delete data supplier
router.post('/api/supplier/delete/', supplier.deleteDatasupplier);

module.exports = router;