import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secret = process.env.JWT_SECRET;


export const generateAccessToken = (user) => {
  return jwt.sign(
    { userId: user._id, email: user.email },
    secret,
    {
      expiresIn: "15min", // Token expiration time
    }
  );
};
// export default generateAccessToken;
export const AuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const decodedToken = jwt.verify(
      token.slice(7, token.length),
      process.env.JWT_SECURITY_KEY
    );
    if (!decodedToken.client) {
      return res.status(403).json({ error: "Forbidden" });
    }
    req.user_id = decodedToken.id;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};
