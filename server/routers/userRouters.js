import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/userControllers.js";

// Router
const router = express.Router();

// Routes

// Login Router
router.post("/login", loginController);

// Register Router
router.post("/register", registerController);

export default router;
