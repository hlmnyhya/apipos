const router = require('express').Router();
const { menu } = require('../controller');

// GET localhost:8080/menu => Ambil data semua menu
router.get('/api/menu', menu.getDatamenu);

// GET localhost:8080/menu/2 => Ambil data semua menu berdasarkan id = 2
router.get('/api/menu/:id', menu.getDatamenuByID);

// POST localhost:8080/menu/add => Tambah data menu ke database
router.post('/api/menu/add', menu.addDatamenu);

// POST localhost:8080/menu/2 => Edit data menu
router.post('/api/menu/edit', menu.editDatamenu);

// POST localhost:8080/menu/delete => Delete data menu
router.post('/api/menu/delete/', menu.deleteDatamenu);

module.exports = router;