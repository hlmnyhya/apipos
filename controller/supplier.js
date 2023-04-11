const db = require("../models");
const Supplier = db.Supplier;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id_supplier) {
        res.status(400).send({
            message: "Supplier can not be empty!"
        });
        return;
    }

    // Create a User
    const supplier = {
        id_supplier: req.body.id_supplier,
        supplier: req.body.supplier,
        no_telp: req.body.no_telp,
        alamat: req.body.alamat,
    };

    // Save User in the database
    Supplier.create(supplier)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Supplier."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (_req, res) => {
    Supplier.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetch Supplier."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Supplier.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Supplier not found with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Supplier.update(req.body, {
        where: { id_user: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Supplier was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Supplier with id=${id}. Maybe Supplier was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Supplier with id=" + id
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Supplier.update({ row_status: 0 }, {
        where: { id_user: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Supplier was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Supplier with id=${id}. Maybe Supplier was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Supplier with id=" + id
            });
        });
};

// Delete all Users from the database.
exports.deleteAll = (_req, res) => {
    Supplier.destroy({
        where: {},

    });
};