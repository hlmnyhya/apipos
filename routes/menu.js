const router = require('express').Router();
const { menu } = require('../controller');

// GET localhost:8080/menu => Ambil data semua menu
router.get('/', menu.getDatamenu);

// GET localhost:8080/menu/2 => Ambil data semua menu berdasarkan id = 2
router.get('/:id', menu.getDatamenuByID);

// POST localhost:8080/menu/add => Tambah data menu ke database
router.post('/add', menu.addDatamenu);

// POST localhost:8080/menu/2 => Edit data menu
router.put('/:id', menu.editDatamenu);

// POST localhost:8080/menu/delete => Delete data menu
router.delete('/:id', menu.deleteDatamenu);

module.exports = router;