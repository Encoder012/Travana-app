const User = require('../models/user.model')

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            error: "Access Token Required"
        })
    }

    const token = authHeader.split(' ')[1];
    const payload = User.verifyAccessToken(token);
    if (!payload) return res.status(403).json({
        error: "Invalid or expired access token"
    })

    req.user = payload;
    next()
}

module.exports = authMiddleware;