import express from "express";
import protect from "../middlewares/authMiddleware.js";
import upload from "../configs/multer.js";

import {
  createAnalytical,
  updateAnalytical,
  deleteAnalytical,
  getAllAnalytical,
  getSingleAnalytical,
  publishAnalytical,
  toggleFeatured,
  likeAnalytical
} from "../controllers/analyticalController.js";

const analyticalRouts = express.Router();

// public
analyticalRouts.get("/get", getAllAnalytical);
analyticalRouts.get("/:slug", getSingleAnalytical);

// protected
analyticalRouts.post("/create", protect, upload.array("images", 5), createAnalytical);

analyticalRouts.put("/update/:id", protect, upload.array("images", 5), updateAnalytical);

analyticalRouts.delete("/delete/:id", protect, deleteAnalytical);
analyticalRouts.patch("/publish/:id", protect, publishAnalytical);
analyticalRouts.patch("/featured/:id", protect, toggleFeatured);
analyticalRouts.patch("/like/:id", protect, likeAnalytical);

export default analyticalRouts;
