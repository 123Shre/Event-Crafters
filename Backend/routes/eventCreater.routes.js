import { Router } from "express";
import eventCreatorControllers from "../controllers/Event_Creater.controllers.js";
import multer from "multer";
const router = Router();
import upload from "../middleware/imageupload.js";
router.post("/login", eventCreatorControllers.login);
router.post("/registration", eventCreatorControllers.registration);
// router.post(
//   "/event_create",
//   // upload.single("images"),
//   // eventCreatorControllers.createEvent
//   async (req, res) => {
//     console.log(req.body);
//   }
// );

router.post("/allcontracts",eventCreatorControllers.allcontracts)
router.post("/event_create", eventCreatorControllers.createEvent);
router.post("/allevents",eventCreatorControllers.allevents)
// try {
// Log req.files for debugging
// console.log(upload.array("images", 5))
// console.log(req.files);
// Rest of your event creation logic
//   const event = await eventCreatorControllers.createEvent(req.body);
//   // ...

// } catch (err) {
//   // Handle errors, including potential Multer errors
//   console.error(err);

// }
export default router;
