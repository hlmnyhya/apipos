const db = require("../models");
const DetailTransaksi = db.DetailTransaksi;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id_DetailTransaksi) {
        res.status(400).send({
            message: "DetailTransaksi can not be empty!"
        });
        return;
    }

    // Create a User
    const detailtransaksi = {
        id_detail_transaksi: req.body.id_detail_transaksi,
        id_customer: req.body.id_customer,
        id_product: req.body.id_product,
        id_order: req.body.id_order,
        id_transaksi: req.body.id_transaksi,
    };

    // Save User in the database
    DetailTransaksi.create(detailtransaksi)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the DetailTransaksi."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (_req, res) => {
    DetailTransaksi.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetch DetailTransaksi."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    DetailTransaksi.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "DetailTransaksi not found with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    DetailTransaksi.update(req.body, {
        where: { id_DetailTransaksi: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "DetailTransaksi was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update DetailTransaksi with id=${id}. Maybe DetailTransaksi was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating DetailTransaksi with id=" + id
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    DetailTransaksi.update({ row_status: 0 }, {
        where: { id_DetailTransaksi: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "DetailTransaksi was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete DetailTransaksi with id=${id}. Maybe DetailTransaksi was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete DetailTransaksi with id=" + id
            });
        });
};

// Delete all Users from the database.
exports.deleteAll = (_req, res) => {
    DetailTransaksi.destroy({
        where: {},

    });
};