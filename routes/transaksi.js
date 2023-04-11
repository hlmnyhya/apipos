const router = require('express').Router();
const { transaksi } = require('../controller');

// Create a new User
router.post('/', transaksi.create);

// Retrieve all Users
router.get('/', transaksi.findAll);

// Retrieve a single User with id
router.get('/:id', transaksi.findOne);

// Update a User with id
router.put('/:id', transaksi.update);

// Delete a User with id
router.delete('/:id', transaksi.delete);

// Delete all Users
router.delete('/', transaksi.deleteAll);

module.exports = router;