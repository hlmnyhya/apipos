const router = require('express').Router();
const { usergroup } = require('../controller');

// GET localhost:8080/usergroup => Ambil data semua usergroup
router.get('/', usergroup.getDatausergroup);

// GET localhost:8080/usergroup/2 => Ambil data semua usergroup berdasarkan id = 2
router.get('/:id', usergroup.getDatausergroupByID);

// POST localhost:8080/usergroup/add => Tambah data usergroup ke database
router.post('/add', usergroup.addDatausergroup);

// POST localhost:8080/usergroup/2 => Edit data usergroup
router.post('/:id', usergroup.editDatausergroup);

// POST localhost:8080/usergroup/delete => Delete data usergroup
router.post('/:id', usergroup.deleteDatausergroup);

module.exports = router;
