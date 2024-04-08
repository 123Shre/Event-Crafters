import { Router} from "express";
import RegistrationControllers from "../controllers/loginreg.controllers.js";
const router = Router();

router.post("/login", RegistrationControllers.login);
router.post("/register", RegistrationControllers.register);
// router.get("/profile", RegistrationControllers.profile);
export default router;
