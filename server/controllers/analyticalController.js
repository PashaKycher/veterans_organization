import Analytical from "../models/analyticalModel.js";
import User from "../models/userModel.js";
import slugify from "slugify";
import fs from "fs";
import imagekit from "../configs/imagekit.js";
import { generateSessionToken } from "../utils/generateSessionToken.js";

/* =======================
   CREATE
======================= */
export const createAnalytical = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }
        const token = generateSessionToken(user._id);

        const { title, excerpt, content, category, tags, post_type, position_type } = req.body;

        if (!title || !content)
            return res.status(400).json({ success: false, message: "Missing fields" });

        const slug = slugify(title, { lower: true, strict: true, locale: "uk" });

        /* upload images */
        let image_urls = [];
        if (req.files?.length) {
            for (const file of req.files) {
                const buffer = fs.readFileSync(file.path);
                const response = await imagekit.upload({
                    file: buffer,
                    fileName: file.originalname,
                    folder: "/veterans_organization/analytical"
                });
                const imageUrl = imagekit.url({
                    path: response.filePath,
                    transformation: [
                        { width: '1280' },   // Resize to width 1280
                        { quality: 'auto' }, // Auto compression 
                        { format: 'webp' }   // Convert to modern image format
                    ]
                })
                image_urls.push(imageUrl);
            }
        }

        const analytical = await Analytical.create({ author: userId, title, slug, excerpt, content, category, tags, image_urls, post_type, position_type, status: "draft" });

        res.status(201).json({ success: true, token, message: "Матеріал створено", data: analytical });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/* =======================
   UPDATE
======================= */
export const updateAnalytical = async (req, res) => {
    try {
        const { id } = req.params;
        const analytical = await Analytical.findById(id);

        const { userId } = req;
        const user = await User.findById(userId);

        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }
        const token = generateSessionToken(user._id);

        if (!analytical)
            return res.status(404).json({ success: false, message: "Not found" });

        if (String(analytical.author) !== req.userId)
            return res.status(403).json({ success: false, message: "Forbidden" });

        const updates = req.body;

        if (updates.title) {
            updates.slug = slugify(updates.title, { lower: true, strict: true });
        }

        /* upload new images */
        if (req.files?.length) {
            let image_urls = [...analytical.image_urls];
            for (const file of req.files) {
                const buffer = fs.readFileSync(file.path);
                const uploaded = await imagekit.upload({
                    file: buffer,
                    fileName: file.originalname,
                    folder: "/veterans_organization/analytical"
                });
                image_urls.push(uploaded.url);
            }
            updates.image_urls = image_urls;
        }

        Object.assign(analytical, updates);
        await analytical.save();

        res.status(201).json({ success: true, token, message: "Матеріал оновлено", data: analytical });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/* =======================
   DELETE
======================= */
export const deleteAnalytical = async (req, res) => {
    try {
        const { id } = req.params;
        const analytical = await Analytical.findById(id);

        const { userId } = req;
        const user = await User.findById(userId);

        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }
        const token = generateSessionToken(user._id);

        if (!analytical)
            return res.status(404).json({ success: false, message: "Not found" });

        await analytical.deleteOne();

        res.status(201).json({ success: true, token, message: "Матеріал видалено" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/* =======================
   GET ALL (public)
======================= */
export const getAllAnalytical = async (req, res) => {
    try {
        const { category, tag, type } = req.query;

        const filter = { status: "published" };
        if (category) filter.category = category;
        if (type) filter.position_type = type;
        if (tag) filter.tags = tag;

        const data = await Analytical.find()
            .populate("author", "full_name avatar")
            .populate("category")
            .sort({ publishedAt: -1 });

        res.status(201).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/* =======================
   GET SINGLE + VIEW COUNT
======================= */
export const getSingleAnalytical = async (req, res) => {
    try {
        const { slug } = req.params;

        const analytical = await Analytical.findOne({ slug, status: "published" })
            .populate("author", "full_name avatar")
            .populate("category");

        if (!analytical)
            return res.status(404).json({ success: false, message: "Not found" });

        analytical.views_count += 1;
        await analytical.save();

        res.status(201).json({ success: true, data: analytical });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/* =======================
   PUBLISH
======================= */
export const publishAnalytical = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);

        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }
        const token = generateSessionToken(user._id);

        const analytical = await Analytical.findById(req.params.id);

        analytical.status = "published";
        analytical.publishedAt = new Date();
        await analytical.save();

        res.status(201).json({ success: true, token, message: "Опубліковано" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/* =======================
   FEATURED
======================= */
export const toggleFeatured = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);

        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }
        const token = generateSessionToken(user._id);

        const analytical = await Analytical.findById(req.params.id);
        analytical.is_featured = !analytical.is_featured;
        await analytical.save();

        res.json({ success: true, token, message: analytical.is_featured ? "Додано в обране" : "Знято з обраного" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/* =======================
   LIKE
======================= */
export const likeAnalytical = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);

        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }
        const token = generateSessionToken(user._id);

        const analytical = await Analytical.findById(req.params.id);

        if (analytical.likes.includes(userId)) {
            analytical.likes.pull(userId);
        } else {
            analytical.likes.push(userId);
        }

        await analytical.save();

        res.status(201).json({ success: true, token, message: analytical.likes.includes(userId) ? "Ви видалили лайк" : "Ви додали лайк", likes: analytical.likes.length });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

