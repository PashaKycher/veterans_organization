import express from 'express';

import  protect  from '../middlewares/authMiddleware.js';
import { addCategoryController, deleteCategoryController, getAllCategoryController } from '../controllers/analyticalCategoryController.js'

const analyticalCategoryRouts = express.Router();

analyticalCategoryRouts.get("/get", getAllCategoryController)
analyticalCategoryRouts.post("/add", protect, addCategoryController)
analyticalCategoryRouts.post("/delete", protect, deleteCategoryController)

export default analyticalCategoryRouts