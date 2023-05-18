const router = require('express').Router();
const { detailtransaksi } = require('../controller');

// GET localhost:8080/user => Ambil data semua user
router.get('/', detailtransaksi.getDatadetailtransaksi);

// GET localhost:8080/user/2 => Ambil data semua user berdasarkan id = 2
router.get('/:id', detailtransaksi.getDatadetailtransaksiByID);

// POST localhost:8080/user/add => Tambah data user ke database
router.post('/add', detailtransaksi.addDatadetailtransaksi);

// POST localhost:8080/user/2 => Edit data user
router.put('/:id', detailtransaksi.editDatadetailtransaksi);

// POST localhost:8080/user/delete => Delete data user
router.delete('/:id', detailtransaksi.deleteDatadetailtransaksi);

module.exports = router;