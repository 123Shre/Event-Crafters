import { generateAccessToken } from "../middleware/authtoken.js";
import Event from "../models/Event.js";
import Quotation_Schema from "../models/Quotation.js";

const eventCreatorControllers = {
  eventSer: async (req, res) => {
    try {
      const events = await Event.find().populate(
        "quotations.serviceProvidedBy",
        "name"
      );
      res.json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  emEvents: async (req, res) => {
    const { email } = req.body;
    try {
      const events = await Event.find({ email });
      res.json(events);
    } catch (err) {
      console.error("Error fetching events:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  createEvent: async (req, res) => {
    try {
      // console.log(req.body);
      const {
        address,
        ageRestrictions,
        cityName,
        contracts,
        dateAndTime,
        description,
        name,
        email,
        organizerName,
        price,
        priceType,
      } = req.body;

      // if (!req.files || !req.files.images) {
      //   return res.status(400).json({ error: "Please upload images" });
      // }
      // const images = req.files.images.map((file) => file.filename);

      const event = new Event({
        address,
        ageRestrictions,
        cityName,
        contracts,
        dateAndTime,
        description,
        // images,
        email,
        name,
        organizerName,
        price,
        priceType,
      });

      const savedEvent = await event.save();
      res.status(201).json(savedEvent);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  allevents: async (req, res) => {
    try {
      const events = await Event.find();
      res.status(200).json(events);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  allcontracts: async (req, res) => {
    try {
      const events = await Event.find().populate("contracts"); // Populate 'contracts' field
      res.json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ error: "Failed to fetch events" });
    }
  },

  quotationAccRej: async (req, res) => {
    try {
      const eventId = req.params.eventId;
      const quotations = await Quotation_Schema.find({ eventId });
      res.status(200).json(quotations);
    } catch (err) {
      console.error("Error fetching quotations:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  AllQuot: async (req, res) => {
    try {
      const quotationId = req.params.quotationId;
      const { status } = req.body;
      const updatedQuotation = await Quotation_Schema.findByIdAndUpdate(
        quotationId,
        { status },
        { new: true }
      );
      res.status(200).json(updatedQuotation);
    } catch (err) {
      console.error("Error updating quotation:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  updateQuotationStatus: async (req, res) => {
    try {
      const quotationId = req.params.quotationId;
      const { status } = req.body;
// console.log(req.body)
      // Check if the status is valid
      if (!["pending", "accepted", "rejected"].includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }

      const updatedQuotation = await Quotation_Schema.findByIdAndUpdate(
        quotationId,
        { status },
        { new: true }
      );

      if (!updatedQuotation) {
        return res.status(404).json({ message: "Quotation not found" });
      }
console.log(updatedQuotation)
      res.status(200).json(updatedQuotation);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  },
  getEvent: async (req, res) => {
    try {
      const eventId = req.params.eventId;
      const event = await Event.findById(eventId);
      // console.log(event);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.status(200).json(event);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  },

  getQuotations: async (req, res) => {
    try {
      const eventId = req.params.eventId;
      const quotations = await Quotation_Schema.find({ eventId });
      res.status(200).json(quotations);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  },
};

export default eventCreatorControllers;
