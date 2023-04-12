const router = require('express').Router();
const { items } = require('../controller');

// Create a new User
router.post('/', items.create);

// Retrieve all Users
router.get('/', items.findAll);

// Retrieve a single User with id
router.get('/:id', items.findOne);

// Update a User with id
router.put('/:id', items.update);

// Delete a User with id
router.delete('/:id', items.delete);

// Delete all Users
router.delete('/', items.deleteAll);

module.exports = router;