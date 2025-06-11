// const User = require("../models/userModel");

// // Create user
// exports.createUser = async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     res.status(201).json(user);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Get all users
// exports.getAllUsers = async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// };

// // Get single user
// exports.getUserById = async (req, res) => {
//   const user = await User.findById(req.params.id);
//   if (!user) return res.status(404).json({ error: "User not found" });
//   res.json(user);
// };

// // Update user
// exports.updateUser = async (req, res) => {
//   const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   if (!user) return res.status(404).json({ error: "User not found" });
//   res.json(user);
// };

// // Delete user
// exports.deleteUser = async (req, res) => {
//   const user = await User.findByIdAndDelete(req.params.id);
//   if (!user) return res.status(404).json({ error: "User not found" });
//   res.json({ message: "User deleted successfully" });
// };

const User = require("../models/userModel");
const mongoose = require("mongoose");

// CREATE User
exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new User({ name, email, age });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET User by ID (Validated)
exports.getUserById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID format" });
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE User
exports.updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID format" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE User
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID format" });
  }

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
