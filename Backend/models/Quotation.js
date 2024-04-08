import { Schema, model } from "mongoose";

const Quotation = new Schema({

  eventId: {
    type: Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  // Consider removing unique constraint if unnecessary for your use case
  email: {
    type: String,
    required: true,
  },
  serviceName: String,
  amount: Number,
  
  createdAt: { type: Date, default: Date.now },
  serviceProvidedBy: {
    type: Schema.Types.ObjectId,
    ref: "ServiceProvider",
    required: true,
  },
});

const Quotation_Schema = model("Quotation", Quotation);
export default Quotation_Schema;
