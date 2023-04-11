const db = require("../models");
const MenuAkses = db.MenuAkses;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id_MenuAkses) {
        res.status(400).send({
            message: "MenuAkses can not be empty!"
        });
        return;
    }

    // Create a User
    const menuakses = {
        id_menuakses: req.body.id_menuakses,
        id_menu: req.body.id_menu,
        id_usergroup: req.body.id_usergroup,
    };

    // Save User in the database
    MenuAkses.create(menuakses)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the MenuAkses."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (_req, res) => {
    MenuAkses.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetch MenuAkses."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    MenuAkses.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "MenuAkses not found with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    MenuAkses.update(req.body, {
        where: { id_MenuAkses: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "MenuAkses was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update MenuAkses with id=${id}. Maybe MenuAkses was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating MenuAkses with id=" + id
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    MenuAkses.update({ row_status: 0 }, {
        where: { id_MenuAkses: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "MenuAkses was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete MenuAkses with id=${id}. Maybe MenuAkses was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete MenuAkses with id=" + id
            });
        });
};

// Delete all Users from the database.
exports.deleteAll = (_req, res) => {
    MenuAkses.destroy({
        where: {},

    });
};