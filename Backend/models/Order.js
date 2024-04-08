import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  email: "string", // User's email address (required)
  cart: [
    {
      _id: "string",
      images: [],
      name: "string",
      description: "string",
      organizerName: "string",
      ageRestrictions: "string",
      dateAndTime: "string",
      cityName: "string",
      priceType: "string",
      price: "number",
      address: "string",
      quantity: "number",
    },
  ],
  totalPrice: "number", 

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = model("Order", orderSchema);
export default Order;
