const router = require('express').Router();
const { usergroups } = require('../controller');

// Create a new User
router.post('/', usergroups.create);

// Retrieve all Users
router.get('/', usergroups.findAll);

// Retrieve a single User with id
router.get('/:id', usergroups.findOne);

// Update a User with id
router.put('/:id', usergroups.update);

// Delete a User with id
router.delete('/:id', usergroups.delete);

// Delete all Users
router.delete('/', usergroups.deleteAll);


module.exports = router;