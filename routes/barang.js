const router = require('express').Router();
const { barang } = require('../controller');

// GET localhost:8080/barang => Ambil data semua barang
router.get('/', barang.getDatabarang);

// GET localhost:8080/barang/2 => Ambil data semua barang berdasarkan id = 2
router.get('/:id', barang.getDatabarangByID);

// POST localhost:8080/barang/add => Tambah data barang ke database
router.post('/add', barang.addDatabarang);

// POST localhost:8080/barang/2 => Edit data barang
router.put('/:id', barang.editDatabarang);

// POST localhost:8080/barang/delete => Delete data barang
router.delete('/:id', barang.deleteDatabarang);

module.exports = router;