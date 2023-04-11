const db = require('../models');
const UserGroup = db.UserGroup;

// Create and Save a new UserGroup
exports.create = (req, res) => {
    // Validate request
    if (!req.body.usergroup) {
        res.status(400).send({
            message: "Usergroup name can not be empty!"
        });
        return;
    }

    // Create a UserGroup
    const usergroup = {
        id_usergroup: req.body.id_usergroup,
        usergroup: req.body.usergroup,
        input_by: req.body.input_by,
        tanggal_input: req.body.tanggal_input,
        edit_by: req.body.edit_by,
        tanggal_edit: req.body.tanggal_edit,
        row_status: req.body.row_status,
    };

    // Save UserGroup in the database
    UserGroup.create(usergroup)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the usergroup."
            });
        });
};

// Retrieve all UserGroups from the database.
exports.findAll = (req, res) => {
    UserGroup.findAll({ where: { row_status: 1 } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetch usergroup."
            });
        });
};

// Find a single UserGroup with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    UserGroup.findByPk(id, {
        include: [
            {
                model: db.User,
                as: 'users'
            }
        ]
    })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: "Usergroup not found with id=" + id
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Usergroup with id=" + id
            });
        });
};

// Update a UserGroup by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    UserGroup.update(req.body, {
        where: { id_usergroup: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Usergroup was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Usergroup with id=${id}. Maybe Usergroup was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Usergroup with id=" + id
            });
        });
};

// Delete a UserGroup with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    UserGroup.destroy({
        where: { id_usergroup: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Usergroup was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Usergroup with id=${id}. Maybe Usergroup was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Usergroup with id=" + id
            });
        });
};

// Delete all Users from the database.
exports.deleteAll = (_req, res) => {
    UserGroup.destroy({
        where: {},

    });
};
