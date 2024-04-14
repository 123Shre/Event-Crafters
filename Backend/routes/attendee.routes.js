import { Router } from "express";
import AttendeeControllers from "../controllers/Event_Attendee.controllers.js";
import { AuthMiddleware } from "../middleware/authtoken.js";

const router = Router();
router.post("/makeorder", AttendeeControllers.OrderCreate);
router.post(
  "/bookedevents",
//   AuthMiddleware,
  AttendeeControllers.OrdersByUserEmail
);
router.post("/createreview", AttendeeControllers.CreateReview);
router.post("/reviewsbyeventid", AttendeeControllers.ReviewsByEventId);
export default router;
