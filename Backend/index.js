import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import eventCreater from "./routes/eventCreater.routes.js";
import loginreg from "./routes/loginregistration.routes.js";
import serviceprovider from "./routes/serviceprovider.routes.js";
import attendee from "./routes/attendee.routes.js";
import stripe from "stripe";
// import { AuthMiddleware } from "./middleware/authtoken.js";
const app = express();
app.use(cors());

const port = process.env.PORT || 3000;
const stripeSecretKey =
  "sk_test_51OyakHSE0pec6OUZbsq918H1UgCkGZa2XUMfIwidILXmnqiSc1VA2g2Ra2d6aJp0Cg26NY7J6DKiQIs8YA3b5dQg00T7CvtEnt";
const stripeInstance = stripe(stripeSecretKey);
// const uri = "mongodb+srv://shreyashamr1308:Qwerty%40123@cluster0.igj6w77.mongodb.net/?retryWrites=true&w=majority&ssl=true";
const uri = "mongodb://0.0.0.0:27017/Event-Management-System";
connect(uri)
  .then(() => console.log("Connected to MongoDB "))
  .catch((err) => console.error("Error connecting to MongoDB :", err));

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
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { items } = req.body;

    // Create an array of line items from the cart items
    const lineItems = items.map((item) => ({
      price_data: {
        currency: "usd", // Replace with your desired currency
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100, // Stripe expects the amount in the smallest currency unit
      },
      quantity: item.quantity,
    }));

    // Create a Stripe checkout session
    const session = await stripeInstance.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/dash", // Replace with your success URL
      cancel_url: "http://localhost:5173/failed", // Replace with your cart URL
    });

    // Send the session ID back to the client
    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({
      error: "An error occurred while creating the checkout session.",
    });
  }
});
app.use("/eventcreater", eventCreater);
app.use("/loginreg", loginreg);
app.use("/sp", serviceprovider);
app.use("/attendee", attendee);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
