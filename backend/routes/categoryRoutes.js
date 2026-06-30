const express = require("express");
const upload = require("../middlewares/multer");
const {
    addCategory,
    getAllCategories,
    updateCategory,
    deleteCategory
} = require("../controllers/categoryController");

const { adminOnly } = require("../middlewares/authMiddleware");

const categoryRoutes = express.Router();

categoryRoutes.post("/add",adminOnly,upload.single("image"),addCategory);
categoryRoutes.put("/update/:id",adminOnly,upload.single("image"),updateCategory);
categoryRoutes.delete("/delete/:id",adminOnly,deleteCategory);
categoryRoutes.get("/all",getAllCategories);

module.exports = categoryRoutes;