const router = require('express').Router();
const { temptransaksi } = require('../controller');

// GET localhost:8080/user => Ambil data semua user
router.get('/', temptransaksi.getDatatemptransaksi);

// GET localhost:8080/user/2 => Ambil data semua user berdasarkan id = 2
router.get('/:id', temptransaksi.getDatatemptransaksiByID);

// POST localhost:8080/user/add => Tambah data user ke database
router.post('/add', temptransaksi.addDatatemptransaksi);

// POST localhost:8080/user/2 => Edit data user
router.put('/:id', temptransaksi.editDatatemptransaksi);

// POST localhost:8080/user/delete => Delete data user
router.delete('/:id', temptransaksi.deleteDatatemptransaksi);

module.exports = router;