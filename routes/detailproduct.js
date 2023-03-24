const router = require('express').Router();
const { detailproduct } = require('../controller');

// GET localhost:8080/detailproduct => Ambil data semua detailproduct
router.get('/', detailproduct.getDatadetailproduct);

// GET localhost:8080/detailproduct/2 => Ambil data semua detailproduct berdasarkan id = 2
router.get('/:id', detailproduct.getDatadetailproductByID);

// POST localhost:8080/detailproduct/add => Tambah data detailproduct ke database
router.post('/add', detailproduct.addDatadetailproduct);

// POST localhost:8080/detailproduct/2 => Edit data detailproduct
router.put('/:id', detailproduct.editDatadetailproduct);

// POST localhost:8080/detailproduct/delete => Delete data detailproduct
router.delete('/:id', detailproduct.deleteDatadetailproduct);

module.exports = router;