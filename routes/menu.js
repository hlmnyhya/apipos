const router = require('express').Router();
const { menu } = require('../controller');

// Create a new User
router.post('/', menu.create);

// Retrieve all Users
router.get('/', menu.findAll);

// Retrieve a single User with id
router.get('/:id', menu.findOne);

// Update a User with id
router.put('/:id', menu.update);

// Delete a User with id
router.delete('/:id', menu.delete);

// Delete all Users
router.delete('/', menu.deleteAll);

module.exports = router;