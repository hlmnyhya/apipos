const router = require('express').Router();
const { product } = require('../controller');

// GET localhost:8080/usergroup => Ambil data semua usergroup
router.get('/', product.getDataproduct);

// GET localhost:8080/usergroup/2 => Ambil data semua usergroup berdasarkan id = 2
router.get('/:id', product.getDataproductByID);

// POST localhost:8080/usergroup/add => Tambah data usergroup ke database
router.post('/add', product.addDataproduct);

// POST localhost:8080/usergroup/2 => Edit data usergroup
router.post('/:id', product.editDataproduct);

// POST localhost:8080/usergroup/delete => Delete data usergroup
router.post('/:id', product.deleteDataproduct);

module.exports = router;
