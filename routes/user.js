const router = require('express').Router();
const { user } = require('../controller');

// GET localhost:8080/user => Ambil data semua user
router.get('/', user.getDatauser);

// GET localhost:8080/user/2 => Ambil data semua user berdasarkan id = 2
router.get('/:id', user.getDatauserByID);

// POST localhost:8080/user/add => Tambah data user ke database
router.post('/add', user.addDatauser);

// POST localhost:8080/user/2 => Edit data user
router.put('/edit/:id', user.editDatauser);

// POST localhost:8080/user/delete => Delete data user
router.delete('/delete/:id', user.deleteDatauser);

module.exports = router;