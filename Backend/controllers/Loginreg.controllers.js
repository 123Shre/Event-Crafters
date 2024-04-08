import { generateAccessToken } from "../middleware/authtoken.js";
import User_Schema from "../models/registration.js";
import bcrypt from "bcrypt";

const RegistrationControllers = {
  register: async (req, res) => {
    const { name, email, password, cpassword } = req.body;
    try {
      const userExist = await User_Schema.find({ email });
      if (!userExist) {
        return res.status(400).json({ message: "User already exists" });
      }
      if (password !== cpassword) {
        return res.status(400).json({ message: "Password does not match" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User_Schema.create({
        name,
        email,
        password: hashedPassword,
      });
      //res.send("Register Successfully");
      res.status(201).json({ message: "User created", status: 201 });
    } catch (error) {
      if (error.code === 11000) {
        // Handle duplicate key error specifically
        return res
          .status(400)
          .json({ message: "User with this email already exists" });
      } else {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      // console.log(email, "  ", password);
      const user = await User_Schema.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User Not found" });
      }
      const isValidPass = await bcrypt.compare(password, user.password);
      if (!isValidPass) {
        return res.status(404).json({ message: "Password is incorrect" });
      }
      const accessToken = generateAccessToken(user);

      res.status(200).json({ status: "ok", message: "Success", accessToken });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  forgotpassword: async (req, res) => {
    const { email } = req.body;
    try {
      const user = await User_Schema.findOne(email);
      if (!user) {
        return res.status(404).json({ message: "User Not found" });
      }
      // Send email to user to reset password
      res.status(200).json({ message: "Email sent to reset password" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  profile: async (req, res) => {
    
  },
};
export default RegistrationControllers;
