import { Router } from "express";
import eventCreatorControllers from "../controllers/Event_Creater.controllers.js";
import multer from "multer";
const router = Router();
const upload = multer();
router.post("/login", eventCreatorControllers.login);
router.post("/registration", eventCreatorControllers.registration);
router.post("/", upload.array("images", 5), eventCreatorControllers.createEvent);
export default router;
