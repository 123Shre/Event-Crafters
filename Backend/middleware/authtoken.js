import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secret = process.env.JWT_SECRET;


export const generateAccessToken = (user) => {
  return jwt.sign(
    { userId: user._id, email: user.email ,client: "authorized_client" },
    secret,
    {
      expiresIn: 15 * 60 * 1000, 
    }
  );
};

export const AuthMiddleware = (req, res, next) => {
  const token =req.headers.authorization;// Retrieve token from localStorage


 
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const decodedToken = jwt.verify(token, secret);
    if (decodedToken.client !== "authorized_client") {
      return res.status(403).json({ error: "Forbidden" });
    }
    req.user_id = decodedToken.userId; // Change to match your token payload
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" ,error:error});
  }
};

