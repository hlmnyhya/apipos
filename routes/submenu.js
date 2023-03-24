const router = require('express').Router();
const { submenu } = require('../controller');

// GET localhost:8080/submenu => Ambil data semua submenu
router.get('/', submenu.getDatasubmenu);

// GET localhost:8080/submenu/2 => Ambil data semua submenu berdasarkan id = 2
router.get('/:id', submenu.getDatasubmenuByID);

// POST localhost:8080/submenu/add => Tambah data submenu ke database
router.post('/add', submenu.addDatasubmenu);

// POST localhost:8080/submenu/2 => Edit data submenu
router.put('/:id', submenu.editDatasubmenu);

// POST localhost:8080/submenu/delete => Delete data submenu
router.delete('/:id', submenu.deleteDatasubmenu);

module.exports = router;