const router = require('express').Router();
const { transactiondetails } = require('../controller');

// Create a new User
router.post('/', transactiondetails.create);

// Retrieve all Users
router.get('/', transactiondetails.findAll);

// Retrieve a single User with id
router.get('/:id', transactiondetails.findOne);

// Update a User with id
router.put('/:id', transactiondetails.update);

// Delete a User with id
router.delete('/:id', transactiondetails.delete);

// Delete all Users
router.delete('/', transactiondetails.deleteAll);

module.exports = router;