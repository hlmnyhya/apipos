const db = require("../models");
const Items = db.Items;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id_item) {
        res.status(400).send({
            message: "Items can not be empty!"
        });
        return;
    }

    // Create a User
    const item = {
        id_item: req.body.id_item,
        item: req.body.item,
        harga: req.body.harga,
        stok: req.body.stok,
        id_supplier: req.body.id_supplier,
    };

    // Save User in the database
    Items.create(item)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Items."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (_req, res) => {
    Items.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetch Items."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Items.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Items not found with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Items.update(req.body, {
        where: { id_Barang: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Items was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Items with id=${id}. Maybe Items was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Items with id=" + id
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Items.update({ row_status: 0 }, {
        where: { id_Barang: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Items was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Items with id=${id}. Maybe Items was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Items with id=" + id
            });
        });
};

// Delete all Users from the database.
exports.deleteAll = (_req, res) => {
    Items.destroy({
        where: {},

    });
};