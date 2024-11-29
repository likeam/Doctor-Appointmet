import mongoose from "mongoose";
import colores from "colors";

const connectDB = async () => {
  try {
    const conndectd = await mongoose.createConnection(
      "mongodb+srv://likeam99:asd123@cluster0.9he6j.mongodb.net/Doctor-app"
    );
    console.log(
      `MongooseDB Connected Sucessfully to  ${"mongodb+srv://likeam99:asd123@cluster0.9he6j.mongodb.net/Doctor-app"}`
        .bgBlue.white
    );
  } catch (error) {
    console.log(`MongooseDB Server ${error}`.bgRed.white);
  }
};

export default connectDB;
