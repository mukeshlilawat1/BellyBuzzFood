const crypto = require('crypto');

function generateOtp(length = 6) {
    const min = 10 ** (length - 1);
    const num = Math.floor(Math.random() * 9 * min) + min;
    return String(num);
}

function hashOtp(otp) {
    const hmac = crypto.createHmac('sha256', process.env.OTP_SECRET || 'fallback_secret');
    hmac.update(otp);
    return hmac.digest('hex');
}

module.exports = { generateOtp, hashOtp };
