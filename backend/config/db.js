const mongoose = require('mongoose');

module.exports = async function connectDB() {
    try {
        console.log('Connecting to MongoDB with URI:', process.env.MONGODB_URI); // ✅ debug line
        await mongoose.connect(process.env.MONGODB_URI); 
        console.log('MongoDB connected');
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
        process.exit(1);
    }
};
