const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const auth = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            status: "error",
            message: "jwt must be provided",
        });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            status: "error",
            message: error.message,
        });
    }    
};

module.exports = auth;