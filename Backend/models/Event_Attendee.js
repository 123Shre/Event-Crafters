import { Schema, model } from "mongoose";

const Event_Attendee = new Schema({
  name: {
    type: String,
    required: true,
  },
  eventID: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});
const Event_Attendee_Schema = model("Event_Attendee", Event_Attendee);
export default Event_Attendee_Schema;
