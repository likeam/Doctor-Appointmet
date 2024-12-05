import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Successfully connected to mongoDB`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
  }
};
export default connectDB;
