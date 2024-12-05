import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  getAllUsers,
  getUserProfile,
} from "../controllers/userControllers.js";

// MiddleWate
import {
  authenticate,
  authorizedDoctor,
  authorizeAdmin,
} from "../middlewares/authMiddleware.js";

// Router
const router = express.Router();

// Routes

// Login Router
router.post("/login", loginUser);

// Register Router
router
  .route("/register")
  .post(registerUser)
  .get(authenticate, authorizeAdmin, getAllUsers);

// User Profile
router.route("/profile").get(authenticate, getUserProfile);

// Logout User Route5r
router.post("/logout", logoutUser);

export default router;
