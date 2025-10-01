const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(401).json({ error: 'Not authorized' });
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.sub).select('-__v');
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};

exports.authorize = (...roles) => (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) return res.status(403).json({ error: 'Forbidden' });
    next();
};
