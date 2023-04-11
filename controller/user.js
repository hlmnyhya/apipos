const db = require("../models");
const User = db.User;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nama) {
        res.status(400).send({
            message: "Username can not be empty!"
        });
        return;
    }

    // Create a User
    const user = {
        id_user: req.body.id_user,
        nama: req.body.nama,
        username: req.body.username,
        password: req.body.password,
        id_usergroup: req.body.id_usergroup,
        status: req.body.status,
        input_by: req.body.input_by,
        tanggal_input: req.body.tanggal_input,
        edit_by: req.body.edit_by,
        tanggal_edit: req.body.tanggal_edit,
        row_status: req.body.row_status ? req.body.row_status : 1
    };

    // Save User in the database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.findAll({ where: { row_status: 1 } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetch User."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "User not found with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id_user: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.update({ row_status: 0 }, {
        where: { id_user: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};

// Delete all Users from the database.
exports.deleteAll = (_req, res) => {
    User.destroy({
        where: {},

    });
};