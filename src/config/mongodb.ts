import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/user_management");
        console.log("MongoDB Connected")
    } catch (error) {
        console.error("MongoDB Failed to connect", error)
        process.exit(1)
    }
}