const router = require('express').Router();
const { submenu } = require('../controller');

// GET localhost:8080/submenu => Ambil data semua submenu
router.get('/api/submenu', submenu.getDatasubmenu);

// GET localhost:8080/submenu/2 => Ambil data semua submenu berdasarkan id = 2
router.get('/api/submenu/:id', submenu.getDatasubmenuByID);

// POST localhost:8080/submenu/add => Tambah data submenu ke database
router.post('/api/submenu/add', submenu.addDatasubmenu);

// POST localhost:8080/submenu/2 => Edit data submenu
router.post('/api/submenu/edit', submenu.editDatasubmenu);

// POST localhost:8080/submenu/delete => Delete data submenu
router.post('/api/submenu/delete/', submenu.deleteDatasubmenu);

module.exports = router;