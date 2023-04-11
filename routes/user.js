const router = require('express').Router();
const { user } = require('../controller');

// Create a new User
router.post('/', user.create);

// Retrieve all Users
router.get('/', user.findAll);

// Retrieve a single User with id
router.get('/:id', user.findOne);

// Update a User with id
router.put('/:id', user.update);

// Delete a User with id
router.delete('/:id', user.delete);

// Delete all Users
router.delete('/', user.deleteAll);

module.exports = router;





