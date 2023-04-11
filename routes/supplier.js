const router = require('express').Router();
const { supplier } = require('../controller');

// Create a new User
router.post('/', supplier.create);

// Retrieve all Users
router.get('/', supplier.findAll);

// Retrieve a single User with id
router.get('/:id', supplier.findOne);

// Update a User with id
router.put('/:id', supplier.update);

// Delete a User with id
router.delete('/:id', supplier.delete);

// Delete all Users
router.delete('/', supplier.deleteAll);

module.exports = router;