import express from "express";
import cors from "cors";
import { connect } from "mongoose";

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

const uri = "mongodb+srv://shreyashamr1308:Qwerty%40123@cluster0.igj6w77.mongodb.net/?retryWrites=true&w=majority&ssl=true";

connect(uri)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
