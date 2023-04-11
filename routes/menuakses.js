const router = require('express').Router();
const { menuakses } = require('../controller');

// Create a new User
router.post('/', menuakses.create);

// Retrieve all Users
router.get('/', menuakses.findAll);

// Retrieve a single User with id
router.get('/:id', menuakses.findOne);

// Update a User with id
router.put('/:id', menuakses.update);

// Delete a User with id
router.delete('/:id', menuakses.delete);

// Delete all Users
router.delete('/', menuakses.deleteAll);

module.exports = router;