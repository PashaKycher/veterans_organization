import User from "../models/userModel.js";
import slugify from "slugify";
import AnalyticalCategory from "../models/analyticalCategoryModel.js";
import { generateSessionToken } from "../utils/generateSessionToken.js";
import { generateRefreshToken } from "../utils/generateRefreshToken.js";

// Get all category
// GET: /api/analyticalcategory/get
export const getAllCategoryController = async (req, res) => {
    try {
        const data = await AnalyticalCategory.find({}).sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            error: false,
            message: "Category fetched successfully",
            data
        })
    } catch (error) {
        console.log(error.message || error);

        res.status(500).json({
            success: false,
            error: true,
            message: error.message || error
        })
    }
};

// Add new category
// POST: /api/analyticalcategory/add
export const addCategoryController = async (req, res) => {
    try {
        const category = req.body
        const { userId } = req
        const _id = userId

        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "User not found"
            })
        }
        if (!user.verify_email) {
            return res.status(403).json({
                message: "Підтвердіть email перед входом",
            });
        }

        const slug = slugify(category.title, {
            lower: true,
            strict: true,
            locale: 'uk' // Важно для корректной транслитерации кириллицы
        });

        await AnalyticalCategory.create({ owner: _id, title: category.title, description: category.description, slug: slug });

        const token = generateSessionToken(user._id);
        const refresh_token = generateRefreshToken(user._id);

        res.status(200).json({ success: true, error: false, token, refresh_token, message: "Category added successfully", })
    } catch (error) {
        console.log(error.message || error);
        res.status(500).json({ success: false, error: true, message: error.message || error })
    }
};

// Delete category
// POST: /api/analyticalcategory/delete
export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.body;
        const { userId } = req
        const _id = userId
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "User not found"
            })
        }
        if (!user.verify_email) {
            return res.status(403).json({
                message: "Підтвердіть email перед входом",
            });
        }

        await AnalyticalCategory.findByIdAndDelete(id);

        const token = generateSessionToken(user._id);
        const refresh_token = generateRefreshToken(user._id);

        res.status(200).json({ success: true, error: false, token, refresh_token, message: "Category deleted successfully", })
    } catch (error) {
        console.log(error.message || error);
        res.status(500).json({ success: false, error: true, message: error.message || error })
    }
};