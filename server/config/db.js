import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Doc");
    console.log(`Successfully connected to mongoDB`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
  }
};
export default connectDB;
