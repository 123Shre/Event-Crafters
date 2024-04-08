import Quotation_Schema from "../models/Quotation.js";
import ServiceProvider from "../models/ServiceProvider.js";

const Service_Provider_Controllers = {
  serviceform: async (req, res) => {
    const { name, ServiceAgencyName, servicesOffered, mobileNumber, email } =
      req.body;
    console.log(req.body);
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
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }
  },
  submitQuotation: async (req, res) => {
    try {
      const { eventId, serviceName, amount, email } = req.body;
      const spuser = await ServiceProvider.findOne({ email });
      // console.log("Evem"+email);
      console.log(spuser);
      if (!spuser) {
        return res.status(404).json({ message: "Service Provider not found" });
      }
      const quotation = new Quotation_Schema({
        eventId,
        serviceProvidedBy: spuser._id,
        serviceName,
        amount,
        email
      });
      console.log(quotation);
      await quotation.save();
      // Event.updateOne(
      //   { _id: eventId },
      //   { $push: { quotations: quotation._id } }
      // );
      return res.status(201).json({ message: "Quotation submitted" });
    } catch (err) {
      console.log("Error in submitting quotation:", err);
      return res.status(500).json({ message: "Internal Server Error" });

    }
  },
};

export default Service_Provider_Controllers;
