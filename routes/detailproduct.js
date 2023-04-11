const router = require('express').Router();
const { detailproduct } = require('../controller');

// Create a new User
router.post('/', detailproduct.create);

// Retrieve all Users
router.get('/', detailproduct.findAll);

// Retrieve a single User with id
router.get('/:id', detailproduct.findOne);

// Update a User with id
router.put('/:id', detailproduct.update);

// Delete a User with id
router.delete('/:id', detailproduct.delete);

// Delete all Users
router.delete('/', detailproduct.deleteAll);

module.exports = router;