const usermodel = require('../models/user.models');
const jwt = require('jsonwebtoken');

async function authMiddleware(req, res, next) {

    const token = req.cookies.token || req.header.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access token is missing",
            status: "failed"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await usermodel.findById(decoded.userId);

        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({
            message: "unauthorized access token is invalid",
            status: "failed"
        })
    }

}

module.exports = authMiddleware;