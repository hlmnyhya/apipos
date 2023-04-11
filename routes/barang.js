const router = require('express').Router();
const { barang } = require('../controller');

// Create a new User
router.post('/', barang.create);

// Retrieve all Users
router.get('/', barang.findAll);

// Retrieve a single User with id
router.get('/:id', barang.findOne);

// Update a User with id
router.put('/:id', barang.update);

// Delete a User with id
router.delete('/:id', barang.delete);

// Delete all Users
router.delete('/', barang.deleteAll);

module.exports = router;