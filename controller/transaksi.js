const db = require("../models");
const Transaksi = db.Transaksi;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id_transaksi) {
        res.status(400).send({
            message: "Transaksi can not be empty!"
        });
        return;
    }

    // Create a User
    const transaksi = {
        id_transaksi: req.body.id_transaksi,
        tgl_transaksi: req.body.tgl_transaksi,
        total: req.body.total,
        bayar: req.body.bayar,
        kembali: req.body.kembali,
    };

    // Save User in the database
    Transaksi.create(transaksi)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Transaksi."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (_req, res) => {
    Transaksi.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetch Transaksi."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Transaksi.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Transaksi not found with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Transaksi.update(req.body, {
        where: { id_user: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Transaksi was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Transaksi with id=${id}. Maybe Transaksi was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Transaksi with id=" + id
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Transaksi.update({ row_status: 0 }, {
        where: { id_user: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Transaksi was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Transaksi with id=${id}. Maybe Transaksi was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Transaksi with id=" + id
            });
        });
};

// Delete all Users from the database.
exports.deleteAll = (_req, res) => {
    Transaksi.destroy({
        where: {},

    });
};