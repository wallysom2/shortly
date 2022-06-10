import { Router } from "express";
import { registerController } from "../controllers/registerController.js";

const register = Router();

register.post("/signup", registerController);

export default register;