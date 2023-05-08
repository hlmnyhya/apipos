const router = require('express').Router();
const { suppliers } = require('../controller');

// Create a new User
router.post('/', suppliers.create);

// Retrieve all Users
router.get('/', suppliers.findAll);

// Retrieve a single User with id
router.get('/:id', suppliers.findOne);

// Update a User with id
router.put('/:id', suppliers.update);

// Delete a User with id
router.delete('/:id', suppliers.delete);

// Delete all Users
router.delete('/', suppliers.deleteAll);

module.exports = router;