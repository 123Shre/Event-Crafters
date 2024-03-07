import Event_Creater_Schema from "../models/Event-Creater.js";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../middleware/authtoken.js";
import Event from "../models/Event.js";

const eventCreatorControllers = {
  registration: async (req, res) => {
    const { name, email, phoneNumber, password, address } = req.body;

    try {
      const eCreaterExist = await Event_Creater_Schema.findOne({ email });

      if (eCreaterExist) {
        return res
          .status(400)
          .json({ message: "Event Creator already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10); // Use bcrypt to hash the password
      const eventCreater = await Event_Creater_Schema.create({
        name,
        email,
        phoneNumber,
        password: hashedPassword,
        address,
      });
      // const accessToken = generateAccessToken(eventCreater);
      return res.status(201).json({ message: "Event Creator created" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const creater = await Event_Creater_Schema.findOne({ email });

      if (!creater) {
        return res.status(404).json({ message: "User Not found" });
      }

      const passwordMatch = await bcrypt.compare(password, creater.password);

      if (!passwordMatch) {
        return res.status(404).json({ message: "Password is incorrect" });
      }
      const accessToken = generateAccessToken(creater);
      return res
        .status(200)
        .json({ status: "ok", message: "Success", accessToken });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  eventCreation: async (req, res) => {
    const { name, email, phoneno, address, eventname, eventdescription } =
      req.body;
    try {
      const eventCreater = await Event_Creater_Schema.create({
        name,
        email,
        phoneno,
        address,
        eventname,
        eventdescription,
      });

      return res.status(201).json({ message: "Event Created" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  createEvent: async (req, res) => {
    try {
      const images = req.files.map((file) => file.path); // Get paths of uploaded images
      const eventData = { ...req.body, images };
      const event = new Event(eventData);
      await event.save();
      res
        .status(201)
        .json({ success: true, message: "Event created successfully" });
    } catch (error) {
      console.error("Error creating event:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};

export default eventCreatorControllers;
