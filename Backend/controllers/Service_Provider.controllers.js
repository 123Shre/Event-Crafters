import Event from "../models/Event.js";
import Quotation_Schema from "../models/Quotation.js";
import ServiceProvider from "../models/ServiceProvider.js";

const Service_Provider_Controllers = {
  serviceform: async (req, res) => {
    const { name, ServiceAgencyName, servicesOffered, mobileNumber, email } =
      req.body;
    // console.log(req.body);

    if (
      !name ||
      !ServiceAgencyName ||
      !servicesOffered ||
      !mobileNumber ||
      !email
    ) {
      return res.status(400).json({ message: "All fields are required" });
    } else {
      try {
        const serviceProvider = await ServiceProvider.create({
          name,
          ServiceAgencyName,
          servicesOffered,
          mobileNumber,
          email,
        });
        return res.status(201).json({ message: "Service Provider created" });
      } catch (error) {
        // console.error(error);
        if (error.code === 11000) {
          // Duplicate key error (email already exists)
          return res.status(409).json({ message: "Email already exists" });
        }
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }
  },

  quotationstatus: async (req, res) => {
    const { eventId, serviceName, email } = req.query;
    try {
      const quotation = await Quotation_Schema.findOne({
        eventId,
        serviceName,
        email,
      });
      if (!quotation) {
        return res.status(404).json({ message: "Quotation not found" });
      }
      res.json({ status: quotation.status });
    } catch (err) {
      console.error("Error getting quotation:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  submitQuotation: async (req, res) => {
    try {
      const { eventId, ServiceName, amount, budget, email } = req.body;
      // console.log(req.body);
      const spuser = await ServiceProvider.findOne({ email });

      if (!spuser) {
        return res.status(404).json({ message: "Service Provider not found" });
      }
      const quotation = new Quotation_Schema({
        eventId,
        serviceProvidedBy: spuser._id,
        serviceName: ServiceName,
        budget,
        amount,
        email,
      });
      console.log(quotation);
      await quotation.save();
      await Event.updateOne(
        { _id: eventId },
        { $push: { quotations: quotation._id } }
      );
      return res.status(201).json({ message: "Quotation submitted" });
    } catch (err) {
      console.log("Error in submitting quotation:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default Service_Provider_Controllers;
