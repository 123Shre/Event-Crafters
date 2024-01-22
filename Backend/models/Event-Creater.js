import { Schema, model } from "mongoose";
const Event_Creater = new Schema({
  name: {
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
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const Event_Creater_Schema = model("Event_Creater", Event_Creater);
export default Event_Creater_Schema;
