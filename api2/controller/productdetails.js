const db = require("../models");
const DetailProduct = db.DetailProduct;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id_detail_product) {
        res.status(400).send({
            message: "DetailProduct can not be empty!"
        });
        return;
    }

    // Create a User
    const detailproduct = {
        id_detail_product: req.body.id_detail_product,
        id_product: req.body.id_product,
        id_barang: req.body.id_barang,
        id_supplier: req.body.id_supplier,
    };

    // Save User in the database
    DetailProduct.create(detailproduct)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the DetailProduct."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (_req, res) => {
    DetailProduct.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetch DetailProduct."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    DetailProduct.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "DetailProduct not found with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    DetailProduct.update(req.body, {
        where: { id_DetailProduct: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "DetailProduct was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update DetailProduct with id=${id}. Maybe DetailProduct was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating DetailProduct with id=" + id
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    DetailProduct.update({ row_status: 0 }, {
        where: { id_DetailProduct: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "DetailProduct was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete DetailProduct with id=${id}. Maybe DetailProduct was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete DetailProduct with id=" + id
            });
        });
};

// Delete all Users from the database.
exports.deleteAll = (_req, res) => {
    DetailProduct.destroy({
        where: {},

    });
};