import { Router } from "express";
import { registerController } from "../controllers/registerController.js";
import { registerMidd } from '../middlewares/registerMidd.js';


const register = Router();

register.post("/signup", registerMidd, registerController);

export default register;