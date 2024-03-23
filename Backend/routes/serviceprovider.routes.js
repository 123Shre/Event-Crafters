import { Router } from "express";
import Service_Provider_Controllers from "../controllers/Service_Provider.controllers.js";
// import Service_Provider_Controllers from "../controllers/Service_Provider.controllers.js";

const router = Router();
router.post("/spform", Service_Provider_Controllers.serviceform);
export default router;
