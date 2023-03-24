const router = require('express').Router();
const { menuakses } = require('../controller');

// GET localhost:8080/menuakses => Ambil data semua menuakses
router.get('/', menuakses.getDatamenuakses);

// GET localhost:8080/menuakses/2 => Ambil data semua menuakses berdasarkan id = 2
router.get('/:id', menuakses.getDatamenuaksesByID);

// POST localhost:8080/menuakses/add => Tambah data menuakses ke database
router.post('/add', menuakses.addDatamenuakses);

// POST localhost:8080/menuakses/2 => Edit data menuakses
router.put('/:id', menuakses.editDatamenuakses);

// POST localhost:8080/menuakses/delete => Delete data menuakses
router.delete('/:id', menuakses.deleteDatamenuakses);

module.exports = router;