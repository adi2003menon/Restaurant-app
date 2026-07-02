
const express= require('express')
const cors= require('cors')
const cookieParser= require('cookie-parser')
const dotenv= require('dotenv')
const connectDB = require('./config/db')
const authRoutes=require('./routes/authRoutes')
const categoryRoutes=require('./routes/categoryRoutes')
const menuRoutes=require('./routes/menuRoutes')
const cartRoutes=require('./routes/cartRoutes')
const orderRoutes=require('./routes/orderRoutes')
const bookingRoutes=require('./routes/bookingRoutes')
const connectCloudinary = require('./config/cloudinary')

dotenv.config();

const app = express();

connectDB();
connectCloudinary()


app.use(express.json());

app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))

app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.use("/api/auth",authRoutes)
app.use("/api/category",categoryRoutes)
app.use("/api/menu",menuRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/order",orderRoutes)
app.use("/api/booking",bookingRoutes)


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

