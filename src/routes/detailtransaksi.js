const router = require('express').Router();
const { detailtransaksi } = require('../controller');

// GET localhost:8080/detailtransaksi => Ambil data semua detailtransaksi
router.get('/api/detailtransaksi', detailtransaksi.getDatadetailtransaksi);

// GET localhost:8080/detailtransaksi/2 => Ambil data semua detailtransaksi berdasarkan id = 2
router.get('/api/detailtransaksi/:id', detailtransaksi.getDatadetailtransaksiByID);

// POST localhost:8080/detailtransaksi/add => Tambah data detailtransaksi ke database
router.post('/api/detailtransaksi/add', detailtransaksi.addDatadetailtransaksi);

// POST localhost:8080/detailtransaksi/2 => Edit data detailtransaksi
router.post('/api/detailtransaksi/edit', detailtransaksi.editDatadetailtransaksi);

// POST localhost:8080/detailtransaksi/delete => Delete data detailtransaksi
router.post('/api/detailtransaksi/delete/', detailtransaksi.deleteDatadetailtransaksi);

module.exports = router;