const nodemailer = require('nodemailer');
const twilio = require('twilio');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 2525),
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

async function sendEmailOtp(email, otp) {
    try {
        const subject = `${process.env.APP_NAME} - Your OTP`;
        const html = `<p>Your ${process.env.APP_NAME} OTP is <strong>${otp}</strong>. It expires in 5 minutes.</p>`;
        return await transporter.sendMail({
            from: `${process.env.APP_NAME} <${process.env.FROM_EMAIL}>`,
            to: email,
            subject,
            html
        });
    } catch (err) {
        console.error("Email OTP Error:", err.message);
        throw new Error("Failed to send OTP email");
    }
}

async function sendSmsOtp(phone, otp) {
    if (!twilioClient) return Promise.resolve();
    try {
        const body = `${process.env.APP_NAME} OTP: ${otp} - valid for 5 minutes.`;
        return await twilioClient.messages.create({
            body,
            from: process.env.TWILIO_PHONE,
            to: phone
        });
    } catch (err) {
        console.error("SMS OTP Error:", err.message);
        throw new Error("Failed to send OTP SMS");
    }
}

const twilioClient = process.env.TWILIO_SID ? twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN) : null;
async function sendSmsOtp(phone, otp) {
    if (!twilioClient) return Promise.resolve();
    const body = `${process.env.APP_NAME} OTP: ${otp} - valid for 5 minutes.`;
    return twilioClient.messages.create({ body, from: process.env.TWILIO_PHONE, to: phone });
}

module.exports = { sendEmailOtp, sendSmsOtp };
