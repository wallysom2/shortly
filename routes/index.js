import { Router } from "express";
import register from "./register.js";
import login from "./login.js";


const router = Router();
router.use(register);
router.use(login); 

export default router;