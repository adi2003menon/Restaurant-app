const express = require("express");
const {
  adminLogin,
  loginUser,
  logoutUser,
  registerUser,
} = require("../controllers/authController");

// const { protect } = require("../middlewares/authMiddleware");

const authRoutes = express.Router();

authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginUser);
authRoutes.post("/admin/login", adminLogin);
authRoutes.post("/logout", logoutUser);

module.exports = authRoutes;