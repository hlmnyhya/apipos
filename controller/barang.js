const db = require("../models");
const Barang = db.Barang;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id_Barang) {
        res.status(400).send({
            message: "Barang can not be empty!"
        });
        return;
    }

    // Create a User
    const barang = {
        id_barang: req.body.id_barang,
        barang: req.body.barang,
        harga: req.body.harga,
        stok: req.body.stok,
        id_supplier: req.body.id_supplier,
    };

    // Save User in the database
    Barang.create(barang)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Barang."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (_req, res) => {
    Barang.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetch Barang."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Barang.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Barang not found with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Barang.update(req.body, {
        where: { id_Barang: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Barang was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Barang with id=${id}. Maybe Barang was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Barang with id=" + id
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Barang.update({ row_status: 0 }, {
        where: { id_Barang: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Barang was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Barang with id=${id}. Maybe Barang was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Barang with id=" + id
            });
        });
};

// Delete all Users from the database.
exports.deleteAll = (_req, res) => {
    Barang.destroy({
        where: {},

    });
};