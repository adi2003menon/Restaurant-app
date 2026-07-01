const express = require("express");
const { adminOnly,protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multer");
const {
    createBooking,
    getUserBookings,
    getAllBookings,
    updateBookingStatus
} = require("../controllers/bookingController");

const bookingRoutes=express.Router()

bookingRoutes.post("/create",protect,createBooking);
bookingRoutes.get("/my-bookings",protect,getUserBookings);
bookingRoutes.get("/bookings",protect,adminOnly,getAllBookings);
bookingRoutes.put("/update-status/:bookingId",protect,adminOnly,updateBookingStatus);

module.exports=bookingRoutes
