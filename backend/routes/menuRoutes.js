const express = require("express");
const { adminOnly } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multer");
const {
    addMenuItem,
    getAllMenuItems,
    updateMenuItem,
    deleteMenuItem
} = require("../controllers/menuController");

const menuRoutes=express.Router();

menuRoutes.post("/add",adminOnly,upload.single("image"),addMenuItem)
menuRoutes.put("/update/:id",adminOnly,upload.single("image"),updateMenuItem)
menuRoutes.delete("/delete/:id",adminOnly,deleteMenuItem)
menuRoutes.get("/all",getAllMenuItems)


module.exports=menuRoutes