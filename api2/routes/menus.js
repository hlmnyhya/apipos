const router = require('express').Router();
const { menus } = require('../controller');

// Create a new User
router.post('/', menus.create);

// Retrieve all Users
router.get('/', menus.findAll);

// Retrieve a single User with id
router.get('/:id', menus.findOne);

// Update a User with id
router.put('/:id', menus.update);

// Delete a User with id
router.delete('/:id', menus.delete);

// Delete all Users
router.delete('/', menus.deleteAll);

module.exports = router;