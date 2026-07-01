const express = require("express");
const upload = require("../middlewares/multer");
const {
    addToCart,
    getCart,
    removeFromCart
} = require("../controllers/cartController");

const { adminOnly,protect } = require("../middlewares/authMiddleware");

const cartRoutes = express.Router();


cartRoutes.post("/add", protect, addToCart);
cartRoutes.get("/get", protect, getCart);
cartRoutes.delete("/remove", protect, removeFromCart);

module.exports=cartRoutes