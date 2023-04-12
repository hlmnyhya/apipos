const router = require('express').Router();
const { accessmenus } = require('../controller');

// Create a new User
router.post('/', accessmenus.create);

// Retrieve all Users
router.get('/', accessmenus.findAll);

// Retrieve a single User with id
router.get('/:id', accessmenus.findOne);

// Update a User with id
router.put('/:id', accessmenus.update);

// Delete a User with id
router.delete('/:id', accessmenus.delete);

// Delete all Users
router.delete('/', accessmenus.deleteAll);

module.exports = router;