const router = require('express').Router();
const { productdetails } = require('../controller');

// Create a new User
router.post('/', productdetails.create);

// Retrieve all Users
router.get('/', productdetails.findAll);

// Retrieve a single User with id
router.get('/:id', productdetails.findOne);

// Update a User with id
router.put('/:id', productdetails.update);

// Delete a User with id
router.delete('/:id', productdetails.delete);

// Delete all Users
router.delete('/', productdetails.deleteAll);

module.exports = router;