import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  // images: [
  //   {
  //     data: { type: Buffer, required: true },
  //     contentType: { type: String, required: true },
  //   },
  // ], // Array of image URLs

  images: [String],
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  organizerName: {
    type: String,
    required: true,
  },
  ageRestrictions: {
    type: String,
    required: true,
  },
  dateAndTime: {
    type: String,
    required: true,
  },
  cityName: {
    type: String,
    required: true,
  },
  priceType: {
    type: String,
    required: true,
    enum: ["Free", "Paid"], // Ensures priceType is either "Free" or "Paid"
  },
  price: String, // Optional if priceType is "Paid"
  contracts: [
    {
      serviceName: String,
      quotation: Number, // Assuming this is a numeric value
    },
  ],
  address: {
    type: String,
    required: true,
  },
});

const Event = model("Event", eventSchema);

export default Event;
