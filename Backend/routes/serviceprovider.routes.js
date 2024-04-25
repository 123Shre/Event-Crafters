import { Router } from "express";
import Service_Provider_Controllers from "../controllers/Service_Provider.controllers.js";
import { AuthMiddleware } from "../middleware/authtoken.js";
// import Service_Provider_Controllers from "../controllers/Service_Provider.controllers.js";

const router = Router();
router.post("/spform", Service_Provider_Controllers.serviceform);
router.get("/quotationstatus", Service_Provider_Controllers.quotationstatus);
router.post("/submitquotation",AuthMiddleware, Service_Provider_Controllers.submitQuotation);
export default router;
