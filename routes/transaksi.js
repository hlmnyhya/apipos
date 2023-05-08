const router = require('express').Router();
const { transaksi } = require('../controller');

// GET localhost:8080/user => Ambil data semua user
router.get('/', transaksi.getDatatransaksi);

// GET localhost:8080/user/2 => Ambil data semua user berdasarkan id = 2
router.get('/:id', transaksi.getDatatransaksiByID);

// POST localhost:8080/user/add => Tambah data user ke database
router.post('/add', transaksi.addDatatransaksi);

// POST localhost:8080/user/2 => Edit data user
router.put('/:id', transaksi.editDatatransaksi);

// POST localhost:8080/user/delete => Delete data user
router.delete('/:id', transaksi.deleteDatatransaksi);

module.exports = router;