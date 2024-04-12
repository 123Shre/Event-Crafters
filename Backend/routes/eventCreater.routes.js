import { Router } from "express";
import eventCreatorControllers from "../controllers/Event_Creater.controllers.js";

const router = Router();
import upload from "../middleware/imageupload.js";
import { AuthMiddleware } from "../middleware/authtoken.js";
// router.post("/login", eventCreatorControllers.login);
// router.post("/registration", eventCreatorControllers.registration);
// router.post(
//   "/event_create",
//   // upload.single("images"),
//   // eventCreatorControllers.createEvent
//   async (req, res) => {
//     console.log(req.body);  
//   }
// );
router.post("/events",eventCreatorControllers.emEvents)
router.post("/allcontracts",eventCreatorControllers.allcontracts)
router.post("/event_create",AuthMiddleware, eventCreatorControllers.createEvent);
router.post("/allevents",eventCreatorControllers.allevents)
// router.get("/quotations/:eventId", eventCreatorControllers.quotationAccRej);
// router.patch("/quotations/:quotationId", eventCreatorControllers.AllQuot);
router.get("/quotations/:eventId", eventCreatorControllers.getQuotations);
router.patch("/quotations/:quotationId", eventCreatorControllers.updateQuotationStatus);
router.get("/event/:eventId", eventCreatorControllers.getEvent);

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
