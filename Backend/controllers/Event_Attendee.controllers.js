import Order from "../models/Order.js";
import Review from "../models/Review.js";

const AttendeeControllers = {
  OrderCreate: async (req, res) => {
    try {
      const { cart, email, quantity } = req.body;
      const attendee = new Order({
        cart,
        email,
        quantity,
      });
      const savedAttendee = await attendee.save();
      res.status(201).json(savedAttendee);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  },
  OrdersByUserEmail: async (req, res) => {
    try {
      const { email } = req.body;

      //   console.log(email);
      const orders = await Order.find({ email });
      if (!orders || orders.length === 0) {
        return res.status(404).json({ error: "No orders found" });
      }
      res.status(200).json(orders);
    } catch (error) {
      if(res.status(404)){
        return res.status(404).json({ message: "No orders found" });
      }
      res.status(500).json({ error: error.message });
    }
  },
  CreateReview: async (req, res) => {
    try {
      const { eventId, email, rating, comment } = req.body;

      const review = new Review({
        eventId,
        email,
        rating,
        comment,
      });
      await review.save();
      res.status(201).json({ message: "Review created successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating review", error: error.message });
    }
  },
};
export default AttendeeControllers;
