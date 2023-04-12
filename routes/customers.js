const router = require('express').Router();
const { customers } = require('../controller');

// Create a new User
router.post('/', customers.create);

// Retrieve all Users
router.get('/', customers.findAll);

// Retrieve a single User with id
router.get('/:id', customers.findOne);

// Update a User with id
router.put('/:id', customers.update);

// Delete a User with id
router.delete('/:id', customers.delete);

// Delete all Users
router.delete('/', customers.deleteAll);

module.exports = router;