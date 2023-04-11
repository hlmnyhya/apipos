const db = require("../models");
const Menu = db.Menu;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id_Menu) {
        res.status(400).send({
            message: "Menu can not be empty!"
        });
        return;
    }

    // Create a User
    const menu = {
        id_menu: req.body.id_menu,
        menu: req.body.menu,
        icon: req.body.icon,
        in_aktif: req.body.in_aktif,
    };

    // Save User in the database
    Menu.create(menu)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Menu."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (_req, res) => {
    Menu.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetch Menu."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Menu.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Menu not found with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Menu.update(req.body, {
        where: { id_Menu: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Menu was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Menu with id=${id}. Maybe Menu was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Menu with id=" + id
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Menu.update({ row_status: 0 }, {
        where: { id_Menu: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Menu was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Menu with id=${id}. Maybe Menu was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Menu with id=" + id
            });
        });
};

// Delete all Users from the database.
exports.deleteAll = (_req, res) => {
    Menu.destroy({
        where: {},

    });
};