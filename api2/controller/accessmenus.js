const db = require("../models");
const AccessMenus = db.AccessMenus;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id_menuakses) {
        res.status(400).send({
            message: "AccessMenus can not be empty!"
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
    AccessMenus.create(menuakses)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the AccessMenus."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (_req, res) => {
    AccessMenus.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetch AccessMenus."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    AccessMenus.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "AccessMenus not found with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    AccessMenus.update(req.body, {
        where: { id_MenuAkses: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "AccessMenus was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update AccessMenus with id=${id}. Maybe AccessMenus was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating AccessMenus with id=" + id
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    AccessMenus.update({ row_status: 0 }, {
        where: { id_MenuAkses: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "AccessMenus was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete AccessMenus with id=${id}. Maybe AccessMenus was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete AccessMenus with id=" + id
            });
        });
};

// Delete all Users from the database.
exports.deleteAll = (_req, res) => {
    AccessMenus.destroy({
        where: {},

    });
};