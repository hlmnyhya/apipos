const router = require('express').Router();
const { transactions } = require('../controller');

// Create a new User
router.post('/', transactions.create);

// Retrieve all Users
router.get('/', transactions.findAll);

// Retrieve a single User with id
router.get('/:id', transactions.findOne);

// Update a User with id
router.put('/:id', transactions.update);

// Delete a User with id
router.delete('/:id', transactions.delete);

// Delete all Users
router.delete('/', transactions.deleteAll);

module.exports = router;