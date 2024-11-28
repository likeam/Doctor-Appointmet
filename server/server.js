import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

//dotenv config

dotenv.config();

const app = express();

//middlewares

app.use(express.json());
app.use(morgan("dev"));

//Routes

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Sererver is Running Susscessfully",
  });
});

//Port

const port = process.env.PORT || 8080;

// Listsn Port

app.listen(port, () => {
  console.log(`Server is Running on : ${port}`);
});
