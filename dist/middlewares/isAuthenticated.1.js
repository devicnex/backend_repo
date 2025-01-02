"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).json({ error: 'JWT token is missing' });
    }
    const [, token] = authToken.split(" ");
    try {
        // Validar token
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        // Recupera id e coloca dentro da variável user_id
        req.user_id = sub;
        return next();
    }
    catch (err) {
        return res.status(401).json({ error: 'Invalid JWT token' });
    }
}
exports.isAuthenticated = isAuthenticated;
