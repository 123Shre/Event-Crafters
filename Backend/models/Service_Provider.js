import { Schema, model } from "mongoose";

const Service_Provider = Schema({
  name: {
    type: String,
    required: true,
  },
  ServiceCompanyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  serviceDescription: {
    type: String,
    required: true,
  },
  serviceImage: {
    type: String,
    required: true,
  },
});
const Service_Provider_Schema = model("Service_Provider", Service_Provider);
export default Service_Provider_Schema;
