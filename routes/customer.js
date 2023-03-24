const router = require('express').Router();
const { customer } = require('../controller');

// GET localhost:8080/customer => Ambil data semua customer
router.get('/', customer.getDatacustomer);

// GET localhost:8080/customer/2 => Ambil data semua customer berdasarkan id = 2
router.get('/:id', customer.getDatacustomerByID);

// POST localhost:8080/customer/add => Tambah data customer ke database
router.post('/add', customer.addDatacustomer);

// POST localhost:8080/customer/2 => Edit data customer
router.put('/:id', customer.editDatacustomer);

// POST localhost:8080/customer/delete => Delete data customer
router.delete('/:id', customer.deleteDatacustomer);

module.exports = router;