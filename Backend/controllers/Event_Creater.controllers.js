
import { generateAccessToken } from "../middleware/authtoken.js";
import Event from "../models/Event.js";

const eventCreatorControllers = {
  // registration: async (req, res) => {
  //   const { name, email, phoneNumber, password, address } = req.body;

  //   try {
  //     const eCreaterExist = await Event_Creater_Schema.findOne({ email });

  //     if (eCreaterExist) {
  //       return res
  //         .status(400)
  //         .json({ message: "Event Creator already exists" });
  //     }

  //     const hashedPassword = await bcrypt.hash(password, 10); // Use bcrypt to hash the password
  //     const eventCreater = await Event_Creater_Schema.create({
  //       name,
  //       email,
  //       phoneNumber,
  //       password: hashedPassword,
  //       address,
  //     });
  //     // const accessToken = generateAccessToken(eventCreater);
  //     return res.status(201).json({ message: "Event Creator created" });
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ message: "Internal Server Error" });
  //   }
  // },

  // login: async (req, res) => {
  //   try {
  //     const { email, password } = req.body;
  //     const creater = await Event_Creater_Schema.findOne({ email });

  //     if (!creater) {
  //       return res.status(404).json({ message: "User Not found" });
  //     }

  //     const passwordMatch = await bcrypt.compare(password, creater.password);

  //     if (!passwordMatch) {
  //       return res.status(404).json({ message: "Password is incorrect" });
  //     }
  //     const accessToken = generateAccessToken(creater);
  //     return res
  //       .status(200)
  //       .json({ status: "ok", message: "Success", accessToken });
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ message: "Internal Server Error" });
  //   }
  // },

  // eventCreation: async (req, res) => {
  //   const { name, email, phoneno, address, eventname, eventdescription } =
  //     req.body;
  //   try {
  //     const eventCreater = await Event_Creater_Schema.create({
  //       name,
  //       email,
  //       phoneno,
  //       address,
  //       eventname,
  //       eventdescription,
  //     });

  //     return res.status(201).json({ message: "Event Created" });
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ message: "Internal Server Error" });
  //   }
  // },
  // app.get('/events', async (req, res) => {
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

  createEvent: async (req, res) => {
    try {
      console.log(req.body);
      const {
        address,
        ageRestrictions,
        cityName,
        contracts,
        dateAndTime,
        description,
        name,
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
};

export default eventCreatorControllers;
// Convert image files to binary format
// const images = req.files.map((file) => ({
//   data: file.buffer,
//   contentType: file.mimetype,
// }));
