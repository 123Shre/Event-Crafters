import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import eventCreater from "./routes/eventCreater.routes.js";
import loginreg from "./routes/loginregistration.routes.js";
import serviceprovider from "./routes/serviceprovider.routes.js";
import multer from "multer";
const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

// const uri = "mongodb+srv://shreyashamr1308:Qwerty%40123@cluster0.igj6w77.mongodb.net/?retryWrites=true&w=majority&ssl=true";
const uri = "mongodb://0.0.0.0:27017/Event-Management-System";
connect(uri)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

app.use(express.json());

// Multer storage configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Destination folder for storing uploaded files
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// Middleware
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/eventcreater", eventCreater);
app.use("/loginreg", loginreg);
app.use("/sp", serviceprovider);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
