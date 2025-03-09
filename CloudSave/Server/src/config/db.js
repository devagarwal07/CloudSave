import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnectionString = process.env.DB_CONNECTION_STRING;

export const connectDB = async () => {
    if (!dbConnectionString) {
        console.error("❌ DB_CONNECTION_STRING is not defined in .env file!");
        process.exit(1);
    }

    try {
        await mongoose.connect(dbConnectionString);
        console.log("✅ DB connected successfully");
    } catch (error) {
        console.error("❌ DB connection error:", error);
        process.exit(1);
    }
};
