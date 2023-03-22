const router = require('express').Router();
const { customer } = require('../controller');

// GET localhost:8080/customer => Ambil data semua customer
router.get('/api/customer', customer.getDatacustomer);

// GET localhost:8080/customer/2 => Ambil data semua customer berdasarkan id = 2
router.get('/api/customer/:id', customer.getDatacustomerByID);

// POST localhost:8080/customer/add => Tambah data customer ke database
router.post('/api/customer/add', customer.addDatacustomer);

// POST localhost:8080/customer/2 => Edit data customer
router.post('/api/customer/edit', customer.editDatacustomer);

// POST localhost:8080/customer/delete => Delete data customer
router.post('/api/customer/delete/', customer.deleteDatacustomer);

module.exports = router;