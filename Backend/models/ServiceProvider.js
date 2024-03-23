import { Schema, model } from "mongoose";

const serviceProviderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ServiceAgencyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  servicesOffered: {
    type: String,
    required: true,
  },
});

const ServiceProvider = model("Service_Provider", serviceProviderSchema);

export default ServiceProvider;
