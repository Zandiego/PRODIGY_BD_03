const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticateToken = require("../middlewares/authMiddleware");
const authorizeRole = require("../middlewares/authorizeRole");

// Public Routes
router.post("/", userController.createUser);
router.post("/login", userController.loginUser);

// Protected Routes
router.get("/", authenticateToken, authorizeRole("admin"), userController.getAllUsers); // Only admin
router.get("/:id", authenticateToken, (req, res, next) => {
  if (req.user.role !== "admin" && req.user.userId !== req.params.id) {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
}, userController.getUserById);

router.put("/:id", authenticateToken, (req, res, next) => {
  if (req.user.role !== "admin" && req.user.userId !== req.params.id) {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
}, userController.updateUser);

router.delete("/:id", authenticateToken, (req, res, next) => {
  if (req.user.role !== "admin" && req.user.userId !== req.params.id) {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
}, userController.deleteUser);


module.exports = router;
