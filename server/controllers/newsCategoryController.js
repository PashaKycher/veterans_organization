import User from "../models/userModel.js";
import slugify from "slugify";
import NewsCategory from "../models/newsCategoryModel.js";
import { generateSessionToken } from "../utils/generateSessionToken.js";
import { generateRefreshToken } from "../utils/generateRefreshToken.js";

// Get all category
// GET: /api/newscategory/get
export const getAllCategoryController = async (req, res) => {
    try {

        const data = await NewsCategory.find({}).sort({ createdAt: -1 });
        res.status(200).json({ success: true, error: false, message: "Каталоги успішно завантажені", data })
    } catch (error) {
        console.log("getAllCategoryController:", error); 
        res.status(500).json({ success: false, error: true, message: error.message || error })
    }
};

// Add new category
// POST: /api/newscategory/add
export const addCategoryController = async (req, res) => {
    try {
        const { userId } = req
        const user = await User.findById(userId)
        if (!user) {
            return res.status(401).json({ success: false, message: "Користувача не знайдено" });
        }
        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }

        const category = req.body
        if (!category.title || !category.description) {
            return res.status(400).json({ success: false, message: "Дані відсутні" });
        }

        const slug = slugify(category.title, { lower: true, strict: true, locale: 'uk' });
        await NewsCategory.create({ owner: user._id, title: category.title, description: category.description, slug: slug });

        const token = generateSessionToken(user._id);
        res.status(200).json({ success: true, error: false, token, message: "Категорія успішно додана", })
    } catch (error) {
        console.log("addCategoryController:", error);
        res.status(500).json({ success: false, error: true, message: error.message || error })
    }
};

// Delete category
// POST: /api/newscategory/delete
export const deleteCategoryController = async (req, res) => {
    try {
        const { userId } = req
        const user = await User.findById(userId)
        if (!user) {
            return res.status(401).json({ success: false, message: "Користувача не знайдено" });
        }
        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }

        const { id } = req.body;
        if (!id) {
            return res.status(400).json({ success: false, message: "Дані відсутні" });
        }

        await NewsCategory.findByIdAndDelete(id);

        const token = generateSessionToken(user._id);
        res.status(200).json({ success: true, error: false, token, message: "Категорія успішно видалена", })
    } catch (error) {
        console.log("deleteCategoryController:", error);
        res.status(500).json({ success: false, error: true, message: error.message || error })
    }
};