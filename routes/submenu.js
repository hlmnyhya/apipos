const router = require('express').Router();
const { submenu } = require('../controller');

// Create a new User
router.post('/', submenu.create);

// Retrieve all Users
router.get('/', submenu.findAll);

// Retrieve a single User with id
router.get('/:id', submenu.findOne);

// Update a User with id
router.put('/:id', submenu.update);

// Delete a User with id
router.delete('/:id', submenu.delete);

// Delete all Users
router.delete('/', submenu.deleteAll);

module.exports = router;