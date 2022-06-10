import { Router } from "express";
import { loginController } from "../controllers/loginController.js";

const login = Router();
login.post("/signin", loginController);

export default login;