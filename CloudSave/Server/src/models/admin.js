import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Define the admin schema
const adminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Hash password before saving
adminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Create the Admin model
const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
