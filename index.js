import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./routes/index.js";
import { json } from "express/lib/response";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`mode: ${process.env.MODE || "not defined -> DEV"}`);
});
    

