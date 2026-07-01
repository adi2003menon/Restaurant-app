const express = require("express");
const { adminOnly,protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multer");
const {
    placeOrder,
    getUserOrders,
    getAllOrders,
    updateOrderStatus
} = require("../controllers/orderController");

const orderRoutes=express.Router()

orderRoutes.post("/place",protect,placeOrder);
orderRoutes.get("/my-orders",protect,getUserOrders);
orderRoutes.get("/orders",adminOnly,getAllOrders);
orderRoutes.put("/update-status/:orderId",adminOnly,updateOrderStatus);


module.exports=orderRoutes