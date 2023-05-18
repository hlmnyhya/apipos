const db = require("../models");
const Customer = db.Customers;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id_customer) {
        res.status(400).send({
            message: "Customer can not be empty!"
        });
        return;
    }

    // Create a User
    const customer = {
        id_customer: req.body.id_customer,
        id_order: req.body.id_order,
        tgl_pesan: req.body.tgl_pesan,
        total: req.body.total,
    };

    // Save User in the database
    Customer.create(customer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (_req, res) => {
    Customer.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetch Customer."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Customer.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Customer not found with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Customer.update(req.body, {
        where: { id_Customer: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Customer with id=${id}. Maybe Customer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Customer with id=" + id
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Customer.update({ row_status: 0 }, {
        where: { id_Customer: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Customer with id=${id}. Maybe Customer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Customer with id=" + id
            });
        });
};

// Delete all Users from the database.
exports.deleteAll = (_req, res) => {
    Customer.destroy({
        where: {},

    });
};