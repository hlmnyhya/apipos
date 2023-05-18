const bycrpt = require("bcrypt");
const { User, RefreshToken } = require("../models");
const refresh_Token = require("../controller/refreshTokens");
const Validator = require("fastest-validator");
const v = new Validator();

const { JWT_SECRET, JWT_SECRET_REFRESH } = process.env;

const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const schema = {
    email: "email|empty:false",
    password: "string|min:6",
  };

  const data = req.body;

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const user = await User.findOne({
    where: { email: req.body.email },
  });

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  const isValidPassword = await bycrpt.compare(
    req.body.password,
    user.password
  );

  if (!isValidPassword) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  const token = jwt.sign({ data }, JWT_SECRET, {
    expiresIn: "5m",
  });

  const refreshToken = jwt.sign({ id: user.id }, JWT_SECRET_REFRESH, {
    expiresIn: "1d",
  });

    await RefreshToken.create({ token: refreshToken, user_id: user.id });

  res.json({
    status: "success",
    data: {
        token,
        refresh_token: refreshToken,
    },
  });
};
const register = async (req, res) => {
  const schema = {
    name: "string|empty:false",
    email: "email|empty:false",
    password: "string|min:6",
    profession: "string|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const user = await User.findOne({
    where: { email: req.body.email },
  });

  if (user) {
    return res.status(409).json({
      status: "error",
      message: "User already exist",
    });
  }

  const password = await bycrpt.hash(req.body.password, 10);

  const data = {
    name: req.body.name,
    email: req.body.email,
    password,
    profession: req.body.profession,
    role: "student",
  };

  const createdUser = await User.create(data);

  return res.json({
    status: "success",
    data: {
      id: createdUser.id,
    },
  });
};
const getUser = async (req, res) => {
  const id = req.params.id;

  const user = await User.findByPk(id, {
    attributes: ["id", "name", "email", "role", "profession", "avatar"],
  });

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  return res.json({
    status: "success",
    data: user,
  });
};
const getUsers = async (req, res) => {
  const users = await User.findAll({
    attributes: ["id", "name", "email", "role", "profession", "avatar"],
  });

  return res.json({
    status: "success",
    data: users,
  });
};
const update = async (req, res) => {
  const schema = {
    name: "string|empty:false",
    email: "email|empty:false",
    password: "string|min:6",
    profession: "string|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const id = req.params.id;
  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  const email = req.body.email;
  if (email) {
    const checkEmail = await User.findOne({
      where: { email },
    });

    if (checkEmail && email !== user.email) {
      return res.status(409).json({
        status: "error",
        message: "Email already exist",
      });
    }
  }

  const password = await bycrpt.hash(req.body.password, 10);
  const { name, profession } = req.body;

  await user.update({
    email,
    password,
    name,
    profession,
  });

  return res.json({
    status: "success",
    data: {
      id: user.id,
      name,
      email,
      profession,
    },
  });
};
const logout = async (req, res) => {
  const userId = req.body.user_id;
  const user = await user.findByPk(userId);

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  await RefreshToken.destroy({
    where: { user_id: userId },
  });

  return res.json({
    status: "success",
    message: "Refresh token deleted",
  });
};

module.exports = {
  login,
  register,
  update,
  getUser,
  getUsers,
  logout,
};
