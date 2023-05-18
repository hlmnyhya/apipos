const router = require('express').Router();
const { customer } = require('../controller');

// GET localhost:8080/user => Ambil data semua user
router.get('/', customer.getDatacustomer);

// GET localhost:8080/user/2 => Ambil data semua user berdasarkan id = 2
router.get('/:id', customer.getDatacustomerByID);

// POST localhost:8080/user/add => Tambah data user ke database
router.post('/add', customer.addDatacustomer);

// POST localhost:8080/user/2 => Edit data user
router.put('/:id', customer.editDatacustomer);

// POST localhost:8080/user/delete => Delete data user
router.delete('/:id', customer.deleteDatacustomer);

module.exports = router;