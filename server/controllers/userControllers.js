import User from "./../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

// Login Controller
const loginUser = () => {};

//  Register Controller
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  console.log(name);
  console.log(email);
  console.log(password);

  if (!name || !email || !password) {
    throw new Error("Please fill all the Input fields");
  }

  // Existising User
  const existingUser = await User.findOne({ email });
  if (existingUser) res.status(400).send({ message: "User Already Exists" });

  const newUser = new User({ name, email, password });

  try {
    await newUser.save();
    res
      .status(201)
      .jason({ _id: newUser._id, name: newUser.name, email: newUser.email });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user Data");
  }
});

export { loginUser, registerUser };
