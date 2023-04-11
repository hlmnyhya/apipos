const router = require('express').Router();
const { detailtransaksi } = require('../controller');

// Create a new User
router.post('/', detailtransaksi.create);

// Retrieve all Users
router.get('/', detailtransaksi.findAll);

// Retrieve a single User with id
router.get('/:id', detailtransaksi.findOne);

// Update a User with id
router.put('/:id', detailtransaksi.update);

// Delete a User with id
router.delete('/:id', detailtransaksi.delete);

// Delete all Users
router.delete('/', detailtransaksi.deleteAll);

module.exports = router;