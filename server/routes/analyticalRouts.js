import express from "express";
import protect from "../middlewares/authMiddleware.js";
import upload from "../configs/multer.js";

import { createAnalytical, updateAnalytical, deleteAnalytical, getAllAnalytical, getSingleAnalytical, publishAnalytical, toggleFeatured,
  likeAnalytical, getSingleAnalyticalById, getAllAnalyticalAdmin,
} from "../controllers/analyticalController.js";

const analyticalRouts = express.Router();


// protected
analyticalRouts.get("/get-admin", protect, getAllAnalyticalAdmin);
analyticalRouts.post("/create", protect, upload.array("images", 5), createAnalytical);
analyticalRouts.post("/update/:id", protect, upload.array("images", 5), updateAnalytical);
analyticalRouts.delete("/delete/:id", protect, deleteAnalytical);
analyticalRouts.put("/publish/:id", protect, publishAnalytical);
analyticalRouts.put("/featured/:id", protect, toggleFeatured);
analyticalRouts.put("/like/:id", protect, likeAnalytical);

// public
analyticalRouts.get("/get", getAllAnalytical);
analyticalRouts.get("/get/:id", getSingleAnalyticalById);
analyticalRouts.get("/:slug", getSingleAnalytical);

export default analyticalRouts;
