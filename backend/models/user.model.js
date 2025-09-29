import { use } from "react";

const userSchema = new mongoose.Schema({
    full_Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unquie: true
    },
    password: {
        type: String,

    },
    mobile_number: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'deliveryBoy'],
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('user', userSchema);

export default User;