const router = require('express').Router();
const { supplier } = require('../controller');

// GET localhost:8080/ => Ambil data semua 
router.get('/', supplier.getDatasupplier);

// GET localhost:8080//2 => Ambil data semua  berdasarkan id = 2
router.get('/:id', supplier.getDatasupplierByID);

// POST localhost:8080//add => Tambah data  ke database
router.post('/add', supplier.addDatasupplier);

// POST localhost:8080//2 => Edit data 
router.put('/:id', supplier.editDatasupplier);

// POST localhost:8080//delete => Delete data 
router.delete('/:id', supplier.deleteDatasupplier);

module.exports = router;