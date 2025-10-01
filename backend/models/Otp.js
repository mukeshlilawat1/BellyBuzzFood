const mongoose = require('mongoose');

const OtpSchema = new mongoose.Schema({
    identifier: { type: String, required: true, index: true },
    identifierType: { type: String, enum: ['email', 'phone'], required: true },
    hashedOtp: { type: String, required: true },
    attempts: { type: Number, default: 0 },
    expiresAt: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now }
});

// TTL index: document removed when expiresAt < now
OtpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('Otp', OtpSchema);
