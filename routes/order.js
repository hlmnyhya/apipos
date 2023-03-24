const router = require('express').Router();
const { order } = require('../controller');

// GET localhost:8080/order => Ambil data semua order
router.get('/', order.getDataordered);

// GET localhost:8080/order/2 => Ambil data semua order berdasarkan id = 2
router.get('/:id', order.getDataorderedByID);

// POST localhost:8080/order/add => Tambah data order ke database
router.post('/add', order.addDataordered);

// POST localhost:8080/order/2 => Edit data order
router.put('/:id', order.editDataordered);

// POST localhost:8080/order/delete => Delete data order
router.delete('/:id', order.deleteDataordered);

module.exports = router;