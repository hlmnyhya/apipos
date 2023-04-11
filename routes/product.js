const router = require('express').Router();
const { product } = require('../controller');

// Create a new User
router.post('/', product.create);

// Retrieve all Users
router.get('/', product.findAll);

// Retrieve a single User with id
router.get('/:id', product.findOne);

// Update a User with id
router.put('/:id', product.update);

// Delete a User with id
router.delete('/:id', product.delete);

// Delete all Users
router.delete('/', product.deleteAll);

module.exports = router;