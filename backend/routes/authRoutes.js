const express = require("express");
const {
  adminLogin,
  loginUser,
  logoutUser,
  registerUser,
  getProfile,
  isAuth
} = require("../controllers/authController");

const { protect } = require("../middlewares/authMiddleware");

const authRoutes = express.Router();

authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginUser);
authRoutes.post("/admin/login", adminLogin);
authRoutes.post("/logout", logoutUser);
authRoutes.get("/profile",protect,getProfile);
authRoutes.get("/is-auth", protect, isAuth);

module.exports = authRoutes;