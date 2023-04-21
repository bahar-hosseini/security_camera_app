//External Modules
import express from "express";
const router = express.Router();

//Internal Modules
import { liveVideo } from "../controllers/videoController.js";

router.get("/lives", liveVideo);

export default router;
