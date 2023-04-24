//External Modules
import express from "express";
const router = express.Router();

//Internal Modules
import { liveVideo, roomVideo } from "../controllers/videoController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(protect, liveVideo);

router.get("/room/:id", roomVideo);

export default router;
