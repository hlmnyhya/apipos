const router = require('express').Router();
const { transaksi } = require('../controller');

// GET localhost:8080/transaksi => Ambil data semua transaksi
router.get('/api/transaksi', transaksi.getDatatransaksi);

// GET localhost:8080/transaksi/2 => Ambil data semua transaksi berdasarkan id = 2
router.get('/api/transaksi/:id', transaksi.getDatatransaksiByID);

// POST localhost:8080/transaksi/add => Tambah data transaksi ke database
router.post('/api/transaksi/add', transaksi.addDatatransaksi);

// POST localhost:8080/transaksi/2 => Edit data transaksi
router.post('/api/transaksi/edit', transaksi.editDatatransaksi);

// POST localhost:8080/transaksi/delete => Delete data transaksi
router.post('/api/transaksi/delete/', transaksi.deleteDatatransaksi);

module.exports = router;