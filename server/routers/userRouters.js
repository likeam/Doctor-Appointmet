import express from "express";
import { loginUser, registerUser } from "../controllers/userControllers.js";

// Router
const router = express.Router();

// Routes

// Login Router
router.post("/login", loginUser);

// Register Router
router.post("/register", registerUser);

export default router;
