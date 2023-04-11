const router = require('express').Router();
const { customer } = require('../controller');

// Create a new User
router.post('/', customer.create);

// Retrieve all Users
router.get('/', customer.findAll);

// Retrieve a single User with id
router.get('/:id', customer.findOne);

// Update a User with id
router.put('/:id', customer.update);

// Delete a User with id
router.delete('/:id', customer.delete);

// Delete all Users
router.delete('/', customer.deleteAll);

module.exports = router;