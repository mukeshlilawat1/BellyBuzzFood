const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    identifier: { type: String, required: true, unique: true }, // normalized email or phone
    identifierType: { type: String, enum: ['email', 'phone'], required: true },
    name: { type: String },
    avatar: { type: String },
    role: { type: String, enum: ['user', 'admin', 'owner'], default: 'user' },
    addresses: [{ label: String, street: String, city: String, pincode: String, lat: Number, lng: Number }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
