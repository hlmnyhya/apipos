const router = require('express').Router();
const { usergroup } = require('../controller');

// Create a new User
router.post('/', usergroup.create);

// Retrieve all Users
router.get('/', usergroup.findAll);

// Retrieve a single User with id
router.get('/:id', usergroup.findOne);

// Update a User with id
router.put('/:id', usergroup.update);

// Delete a User with id
router.delete('/:id', usergroup.delete);

// Delete all Users
router.delete('/', usergroup.deleteAll);


module.exports = router;