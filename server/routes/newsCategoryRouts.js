import express from 'express';

import  protect  from '../middlewares/authMiddleware.js';
import { addCategoryController, deleteCategoryController, getAllCategoryController } from '../controllers/newsCategoryController.js';


const newsCategoryRouts = express.Router();

newsCategoryRouts.get("/get", getAllCategoryController)
newsCategoryRouts.post("/add", protect, addCategoryController)
newsCategoryRouts.post("/delete", protect, deleteCategoryController)

export default newsCategoryRouts