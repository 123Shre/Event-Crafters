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
};

export default Service_Provider_Controllers;
