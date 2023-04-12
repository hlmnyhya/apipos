const router = require('express').Router();
const { submenus } = require('../controller');

// Create a new User
router.post('/', submenus.create);

// Retrieve all Users
router.get('/', submenus.findAll);

// Retrieve a single User with id
router.get('/:id', submenus.findOne);

// Update a User with id
router.put('/:id', submenus.update);

// Delete a User with id
router.delete('/:id', submenus.delete);

// Delete all Users
router.delete('/', submenus.deleteAll);

module.exports = router;