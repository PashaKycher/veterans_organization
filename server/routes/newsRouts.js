import express from "express";
import protect from "../middlewares/authMiddleware.js";
import upload from "../configs/multer.js";

import { createNews, updateNews, deleteNews, getAllNews, publishNews, toggleFeatured, likeNews, getSingleNewsById, getAllNewsAdmin,
    getAddViewNews,
    addPosition,
    getNewsByUserId,
    getLengthNews,
} from "../controllers/newsController.js";

const newsRouts = express.Router();


// protected
newsRouts.get("/get-admin", protect, getAllNewsAdmin);
newsRouts.post("/create", protect, upload.array("images", 5), createNews);
newsRouts.post("/update/:id", protect, upload.array("images", 5), updateNews);
newsRouts.delete("/delete/:id", protect, deleteNews);
newsRouts.get("/publish/:id", protect, publishNews);
newsRouts.put("/featured/:id", protect, toggleFeatured);
newsRouts.put("/like/:id", protect, likeNews);
newsRouts.put("/addposition/:id", protect, addPosition);

// public
newsRouts.get("/get", getAllNews);
newsRouts.get("/get/:id", getSingleNewsById);
newsRouts.get("/add-view/:id", getAddViewNews);

newsRouts.get("/get-by-user-id/:id", getNewsByUserId);
newsRouts.get("/get-length", getLengthNews);

export default newsRouts;