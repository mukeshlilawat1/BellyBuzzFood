const User = require('../models/User');
const Otp = require('../models/Otp');
const { generateOtp, hashOtp } = require('../utils/otp');
const { sendEmailOtp, sendSmsOtp } = require('../services/notify');
const jwt = require('jsonwebtoken');

// Basic in-memory rate limiter per identifier (for dev). Replace with Redis for prod.
const requestCounts = {}; // { key: { count, firstRequestAt } }
const MAX_PER_15MIN = 3;

function rateLimitCheck(key) {
    const windowMs = 15 * 60 * 1000;
    const now = Date.now();
    if (!requestCounts[key]) {
        requestCounts[key] = { count: 1, firstRequestAt: now };
        return true;
    }
    const entry = requestCounts[key];
    if (now - entry.firstRequestAt > windowMs) {
        requestCounts[key] = { count: 1, firstRequestAt: now };
        return true;
    }
    if (entry.count >= MAX_PER_15MIN) return false;
    entry.count += 1;
    return true;
}

const OTP_EXP_MIN = 5;

exports.requestOtp = async (req, res, next) => {
    try {
        const { identifier, type } = req.body;
        if (!identifier || !['email', 'phone'].includes(type)) return res.status(400).json({ error: 'Invalid input' });

        const normalized = type === 'email' ? identifier.trim().toLowerCase() : identifier.trim();
        const key = `${type}:${normalized}`;
        if (!rateLimitCheck(key)) return res.status(429).json({ error: 'Too many OTP requests. Try later.' });

        const otp = generateOtp(6);
        const hashed = hashOtp(otp);
        const expiresAt = new Date(Date.now() + OTP_EXP_MIN * 60 * 1000);

        await Otp.findOneAndUpdate(
            { identifier: normalized, identifierType: type },
            { hashedOtp: hashed, expiresAt, attempts: 0, createdAt: new Date() },
            { upsert: true, new: true }
        );

        // send
        if (type === 'email') await sendEmailOtp(normalized, otp);
        else await sendSmsOtp(normalized, otp);

        return res.json({ ok: true, message: `OTP sent to ${type}` });
    } catch (err) {
        next(err);
    }
};

exports.verifyOtp = async (req, res, next) => {
    try {
        const { identifier, type, otp } = req.body;
        if (!identifier || !type || !otp) return res.status(400).json({ error: 'Missing fields' });

        const normalized = type === 'email' ? identifier.trim().toLowerCase() : identifier.trim();
        const record = await Otp.findOne({ identifier: normalized, identifierType: type });
        if (!record) return res.status(400).json({ error: 'OTP not requested or expired' });

        if (record.attempts >= 5) return res.status(429).json({ error: 'Too many invalid attempts' });

        const hashedAttempt = hashOtp(otp);
        if (hashedAttempt !== record.hashedOtp) {
            record.attempts += 1;
            await record.save();
            return res.status(400).json({ error: 'Invalid OTP' });
        }

        await Otp.deleteOne({ _id: record._id });

        let user = await User.findOne({ identifier: normalized });
        if (!user) {
            user = await User.create({ identifier: normalized, identifierType: type });
        }

        const token = jwt.sign({ sub: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return res.json({ ok: true, token, user });
    } catch (err) {
        next(err);
    }
};
