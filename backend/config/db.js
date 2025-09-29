import mongoose from "mongoose"

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
}

export default connectDb;