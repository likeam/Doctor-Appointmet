import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js";

import userRouters from "./routers/userRouters.js";

//dotenv config

dotenv.config();

//Mongoose DB connection

connectDB();

const app = express();

//middlewares

app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/api/v1/users", userRouters);

// app.get("/", (req, res) => {
//   res.status(200).send({
//     message: "Sererver is Running Susscessfully",
//   });
// });

//Port

const port = process.env.PORT || 8080;

// Listsn Port

app.listen(port, () => {
  console.log(`Server is Running on : ${port}`);
});
