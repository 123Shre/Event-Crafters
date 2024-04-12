import { Schema, model } from "mongoose";

const Quotation = new Schema({
  eventId: {
    type: Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  budget: Number,
  serviceName: String,
  amount: Number,
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
  serviceProvidedBy: {
    type: Schema.Types.ObjectId,
    ref: "ServiceProvider",
    required: true,
  },
});

const Quotation_Schema = model("Quotation", Quotation);
export default Quotation_Schema;
