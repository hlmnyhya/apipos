const {User, RefreshToken} = require('../models');

const Validator = require('fastest-validator');
const v = new Validator();

const create = async (req, res) => {
    const schema = {
        user_id: 'number|empty:false',
        token: 'string|empty:false',
    };

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate,
        });
    }

    const userId = req.body.user_id;
    const token = req.body.token;

    const user = await User.findByPk(userId);

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'User not found',
        });
    }

    const createdRefreshToken = await RefreshToken.create({
        token,
        user_id: userId,
    });

    return res.json({
        status: 'success',
        data: {
            id: createdRefreshToken.id,
        },
    });
}

const findAll = async (req, res) => {
    const refreshToken = await RefreshToken.findAll({
        attributes: ['id', 'token', 'user_id'],
    });

    return res.json({
        status: 'success',
        data: refreshToken,
    });
};

module.exports = {
    create,
    findAll,
}