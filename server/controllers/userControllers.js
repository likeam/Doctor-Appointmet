import bcrypt from "bcryptjs";
import User from "./../models/userModel.js";

// Login Controller
const loginController = () => {};

//  Register Controller
const registerController = async () => {
  try {
    // Existising User
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exists", success: false });
    }

    // Password

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Replave password with hashed password
    req.body.password = hashedPassword;

    // New User

    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send({ message: "Registration Successfull", succes: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Register Controller Error ${error.message}",
    });
  }
};

export { loginController, registerController };
