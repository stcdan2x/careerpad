import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Create Schema
const userSchema = mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	avatar: { type: String },
	isAdmin: { type: Boolean, required: true, default: false },
	date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

export default User;
