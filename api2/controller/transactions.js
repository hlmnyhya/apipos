const db = require("../models");
const Transaction = db.Transactions;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id_transaction) {
        res.status(400).send({
            message: "Transaction can not be empty!"
        });
        return;
    }

    // Create a User
    const transaction = {
        id_transaction: req.body.id_transaction,
        tgl_transaction: req.body.tgl_transaction,
        total: req.body.total,
        bayar: req.body.bayar,
        kembali: req.body.kembali,
    };

    // Save User in the database
    Transaction.create(transaction)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Transaction."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (_req, res) => {
    Transaction.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetch Transaction."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Transaction.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Transaction not found with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Transaction.update(req.body, {
        where: { id_user: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Transaction was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Transaction with id=${id}. Maybe Transaction was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Transaction with id=" + id
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Transaction.update({ row_status: 0 }, {
        where: { id_user: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Transaction was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Transaction with id=${id}. Maybe Transaction was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Transaction with id=" + id
            });
        });
};

// Delete all Users from the database.
exports.deleteAll = (_req, res) => {
    Transaction.destroy({
        where: {},

    });
};