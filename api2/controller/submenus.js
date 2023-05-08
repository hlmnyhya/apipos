const db = require("../models");
const SubMenu = db.SubMenus;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id_submenu) {
        res.status(400).send({
            message: "SubMenu can not be empty!"
        });
        return;
    }

    // Create a User
    const submenu = {
        id_submenu: req.body.id_submenu,
        submenu: req.body.submenu,
        url: req.body.url,
        icon: req.body.icon,
        id_menu: req.body.id_menu,
        in_aktif: req.body.in_aktif,
    };

    // Save User in the database
    SubMenu.create(submenu)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the SubMenu."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (_req, res) => {
    SubMenu.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetch SubMenu."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    SubMenu.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "SubMenu not found with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    SubMenu.update(req.body, {
        where: { id_user: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "SubMenu was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update SubMenu with id=${id}. Maybe SubMenu was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating SubMenu with id=" + id
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    SubMenu.update({ row_status: 0 }, {
        where: { id_user: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "SubMenu was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete SubMenu with id=${id}. Maybe SubMenu was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete SubMenu with id=" + id
            });
        });
};

// Delete all Users from the database.
exports.deleteAll = (_req, res) => {
    SubMenu.destroy({
        where: {},

    });
};