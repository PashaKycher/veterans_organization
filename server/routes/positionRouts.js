import express from "express";
import protect from "../middlewares/authMiddleware.js";

import { 
    addPositionView, createPosition, deletePosition, getAllPositions, getLengthPosition, getPositionById, getPositionByUserId,  
    publishPosition, toggleFeaturedPosition, toggleLikePosition, updatePosition, getPublishedPositions, 
} from "../controllers/positionCantroller.js";


const positionRouts = express.Router();


// protected
positionRouts.get("/get-admin", protect, getAllPositions);
positionRouts.post("/create", protect, createPosition);
positionRouts.post("/update/:id", protect, updatePosition);
positionRouts.delete("/delete/:id", protect, deletePosition);
positionRouts.get("/publish/:id", protect, publishPosition);
positionRouts.put("/featured/:id", protect, toggleFeaturedPosition);
positionRouts.put("/like/:id", protect, toggleLikePosition); 

// public
positionRouts.get("/get", getPublishedPositions);
positionRouts.get("/get/:id", getPositionById);
positionRouts.get("/add-view/:id", addPositionView);

positionRouts.get("/get-by-user-id/:id", getPositionByUserId);
positionRouts.get("/get-length", getLengthPosition);

export default positionRouts;