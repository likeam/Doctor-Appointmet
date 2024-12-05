import User from "./../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs";
import createToken from "../utils/createToken.js";

//  Register Controller
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error("Please fill all the Input fields");
  }

  // Existising User
  const existingUser = await User.findOne({ email });
  if (existingUser) res.status(400).send({ message: "User Already Exists" });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({ name, email, password: hashedPassword });

  try {
    await newUser.save();
    createToken(res, newUser._id);
    res
      .status(201)
      .json({ _id: newUser._id, name: newUser.name, email: newUser.email });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user Data");
  }
});

// Login Controller
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const isPassworValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (isPassworValid) {
      createToken(res, existingUser._id);
      res.status(201).json({
        _id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      });
      return;
    }
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logout successfully " });
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { loginUser, registerUser, logoutUser, getAllUsers, getUserProfile };
