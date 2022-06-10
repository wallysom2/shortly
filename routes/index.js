import { Router } from "express";
import register from "./register.js";


const router = Router();
router.use(register); // create/read

export default router;