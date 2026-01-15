import Position from "../models/positionModel.js";
import slugify from "slugify";
import User from "../models/userModel.js";
import { generateSessionToken } from "../utils/generateSessionToken.js";

// create position post
// POST: /api/position/create
export const createPosition = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ success: false, message: "Користувача не знайдено" });
        }
        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }

        const { title, content, tags, position_type, article, article_model } = req.body;
        if (!title || !content) {
            return res.status(400).json({ success: false, message: "Дані відсутні" });
        }

        const slug = slugify(title, { lower: true, strict: true, locale: "uk" });
        const data = await Position.create({
            author: user._id, title, slug, content, tags, position_type,
            article: article || null,
            article_model: article ? article_model : null
        });

        const token = generateSessionToken(user._id);
        res.status(201).json({ success: true, token, message: "Позицію створено", data });
    } catch (error) {
        console.error("createPosition:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// update position post
// POST: /api/position/update/:id
export const updatePosition = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ success: false, message: "Користувача не знайдено" });
        }
        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }

        const { title, content, tags, position_type, article, article_model, status } = req.body;
        if (!title || !content) {
            return res.status(400).json({ success: false, message: "Дані відсутні" });
        }

        const { id } = req.params;
        if (!id) {
            return res.status(404).json({ success: false, message: "Позицію не знайдено" });
        }

        const slug = slugify(title, { lower: true, strict: true, locale: "uk" });
        const data = await Position.findByIdAndUpdate(id, {
            title, slug, content, tags, position_type, status,
            article: article || null,
            article_model: article ? article_model : null
        }, { new: true });

        const token = generateSessionToken(user._id);
        res.json({ success: true, token, data });
    } catch (error) {
        console.error("updatePosition:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// delete position post
// DELETE: /api/position/delete/:id
export const deletePosition = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ success: false, message: "Користувача не знайдено" });
        }
        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }

        const { id } = req.params;
        const position = await Position.findByIdAndDelete(id);
        if (!position) {
            return res.status(404).json({ success: false, message: "Позицію не знайдено" });
        }

        const token = generateSessionToken(user._id);
        res.json({ success: true, token, message: "Позицію видалено" });
    } catch (error) {
        console.error("deletePosition:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// get all position ADMIN
// GET: /api/position/get-admin
export const getAllPositions = async (req, res) => {
    try {
        const data = await Position.find().populate("author").populate("article").sort({ createdAt: -1 });

        res.json({ success: true, data });
    } catch (error) {
        console.error("getAllPositions:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// get all position PUBLISHED
// GET: /api/position/get
export const getPublishedPositions = async (req, res) => {
    try {

        const data = await Position.find({ status: "published" }).populate("author").sort({ createdAt: -1 });
        res.json({ success: true, data });
    } catch (error) {
        console.error("getPublishedPositions:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// get single position by id
// GET: /api/position/get/:id
export const getPositionById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Position.findById(id).populate("author").populate("article");
        if (!data) {
            return res.status(404).json({ success: false, message: "Позицію не знайдена" });
        }

        res.json({ success: true, data });
    } catch (error) {
        console.error("getPositionById:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// like position
// PUT: /api/position/like/:id
export const toggleLikePosition = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ success: false, message: "Користувача не знайдено" });
        }
        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }

        const { id } = req.params;
        const data = await Position.findById(id).populate("author").populate("article");
        if (!data) {
            return res.status(404).json({ success: false, message: "Позицію не знайдена" });
        }

        const isLiked = data.likes.includes(userId);

        if (isLiked) { data.likes.pull(userId); }
        else { data.likes.push(userId); }

        await data.save();

        const token = generateSessionToken(user._id);
        res.status(201).json({ success: true, token, message: isLiked ? "Ви видалили лайк" : "Ви додали лайк", likes: data.likes.length, likedByMe: isLiked ? false : true });
    } catch (error) {
        console.log("toggleLikePosition:", error);
        res.status(500).json({ success: false });
    }
};

// toggle featured position
// PUT: /api/position/toggle-featured/:id
export const toggleFeaturedPosition = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ success: false, message: "Користувача не знайдено" });
        }
        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }

        const { id } = req.params;
        const data = await Position.findById(id);
        if (!data) {
            return res.status(404).json({ success: false, message: "Позицію не знайдена" });
        }

        data.is_featured = !data.is_featured;
        await data.save();

        const token = generateSessionToken(user._id);
        res.json({ success: true, token, message: data.is_featured ? "Додано в обране" : "Знято з обраного" });
    } catch (error) {
        console.log("toggleFeaturedPosition:", error);
        res.status(500).json({ success: false });
    }
};

// publish position
// GET: /api/position/publish/:id
export const publishPosition = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ success: false, message: "Користувача не знайдено" });
        }
        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }

        const { id } = req.params;
        const data = await Position.findById(id);
        if (!data) {
            return res.status(404).json({ success: false, message: "Позицію не знайдена" });
        }

        data.status = "published";
        data.publishedAt = new Date();
        await data.save();

        const token = generateSessionToken(user._id);
        res.json({ success: true, token, data });
    } catch (error) {
        console.log("publishPosition:", error);
        res.status(500).json({ success: false });
    }
};

// add view to position
// GET: /api/position/add-view/:id
export const addPositionView = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await Position.findOne({ _id: id, status: "published" });
        if (!data) {
            return res.status(404).json({ success: false, message: "Стаття не знайдена" });
        }

        data.views_count += 1;
        await data.save();

        res.status(201).json({ success: true, data: news });
    } catch {
        console.log("addPositionView:", error);
        res.status(500).json({ success: false });
    }
};

// get position by user id
// GET: /api/position/get-by-user-id/:id
export const getPositionByUserId = async (req, res) => {
    try {
        const { id } = req.params;
        const analytical = await Position.find({ author: id, status: "published" }).populate("author").populate("article");
        res.status(201).json({ success: true, data: analytical });
    } catch (error) {
        console.error("getAnalyticalByUserId:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// get length all position
// GET: /api/position/get-length
export const getLengthPosition = async (req, res) => {
    try {
        const data = await Position.countDocuments({ status: "published" });
        res.json({ success: true, data });
    } catch (error) {
        console.error("getLengthPosition:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};
