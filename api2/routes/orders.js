const router = require('express').Router();
const { orders } = require('../controller');

// Create a new User
router.post('/', orders.create);

// Retrieve all Users
router.get('/', orders.findAll);

// Retrieve a single User with id
router.get('/:id', orders.findOne);

// Update a User with id
router.put('/:id', orders.update);

// Delete a User with id
router.delete('/:id', orders.delete);

// Delete all Users
router.delete('/', orders.deleteAll);

module.exports = router;