const router = require('express').Router();
const { order } = require('../controller');

// Create a new User
router.post('/', order.create);

// Retrieve all Users
router.get('/', order.findAll);

// Retrieve a single User with id
router.get('/:id', order.findOne);

// Update a User with id
router.put('/:id', order.update);

// Delete a User with id
router.delete('/:id', order.delete);

// Delete all Users
router.delete('/', order.deleteAll);

module.exports = router;