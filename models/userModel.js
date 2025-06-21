const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {  type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: Number,
  role: { type: String, enum: ['user', 'admin', 'owner'], default: 'user' }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);