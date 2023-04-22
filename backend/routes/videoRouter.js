//External Modules
import express from "express";
const router = express.Router();

//Internal Modules
import { liveVideo, roomVideo } from "../controllers/videoController.js";

router.get("/", liveVideo);
router.get("/room/:id", roomVideo);

export default router;
