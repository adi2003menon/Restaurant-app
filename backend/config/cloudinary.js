const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

dotenv.config();

const connectCloudinary = async () => {
  console.log("api_key", process.env.CLOUDINARY_API_KEY);

  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    console.log("Cloudinary connected");
  } catch (error) {
    console.log("Error occurred in Cloudinary:", error);
  }
};

module.exports = connectCloudinary;