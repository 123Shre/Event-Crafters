import { Schema, model } from "mongoose";

const Event = new Schema({
  name: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
  },
  eventDuration: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: String,
    required: true,
  },
  eventCategory: {
    type: String,
    required: true,
  },
  eventImage: {
    type: String,
    required: true,
  },
  eventCreator: {
    type: String,
    required: true,
  },
  eventCreatorEmail: {
    type: String,
    required: true,
  },
  eventTicketPrice: {
    type: String,
    required: true,
  },
});
const Event_Schema = model("Event_Schema", Event);
export default Event_Schema;
