import Analytical from "../models/analyticalModel.js";
import User from "../models/userModel.js";
import slugify from "slugify";
import imagekit from "../configs/imageKit.js"
import { generateSessionToken } from "../utils/generateSessionToken.js";

// create analytical post
// POST: /api/analytical/create
export const createAnalytical = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ success: false, message: "Користувача не знайдено" });
        }
        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }

        const { position_type, status, title, excerpt, content, category, post_type, is_featured, tags } = req.body;
        if (!title || !content) {
            return res.status(400).json({ success: false, message: "Дані відсутні" });
        }

        /* upload images */
        let image_urls = [];
        if (req.files?.length) {
            for (const file of req.files) {
                const response = await imagekit.upload({
                    file: file.buffer, // ✅ memoryStorage
                    fileName: file.originalname,
                    folder: "/veterans_organization/analytical"
                });

                const imageUrl = imagekit.url({
                    path: response.filePath,
                    transformation: [
                        { width: "1280" },
                        { height: "720" },
                        { quality: "auto" },
                        { format: "webp" }
                    ]
                });

                image_urls.push(imageUrl);
            }
        }

        const slug = slugify(title, { lower: true, strict: true, locale: "uk" });
        const analytical = await Analytical.create({ position_type, status, title, excerpt, content, category, post_type, is_featured, tags, author: userId, slug, image_urls });

        const token = generateSessionToken(user._id);
        res.status(201).json({ success: true, token, message: "Матеріал створено", id:analytical._id });
    } catch (error) {
        console.error("createAnalytical:",error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// update analytical post
// POST: /api/analytical/update/:id
export const updateAnalytical = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ success: false, message: "Користувача не знайдено" });
        }
        if (!user.verify_email) {
            return res.status(403).json({ success: false, message: "Підтвердіть email" });
        }

        const { id } = req.params;
        const analytical = await Analytical.findById(id);
        if (!analytical) {
            return res.status(404).json({ success: false, message: "Матеріал не знайдено" });
        }

        const { position_type, status, title, excerpt, content, category, post_type, is_featured, tags, existing_images } = req.body;
        if (!title || !content || !category) {
            return res.status(400).json({ success: false, message: "Некоректні дані" });
        }

        /* -------------------- images -------------------- */
        // за замовчуванням — залишаємо як є
        let image_urls = analytical.image_urls || [];
        // якщо фронт передав existing_images — значить користувач керує зображеннями
        if (existing_images !== undefined) {
            image_urls = [];

            if (Array.isArray(existing_images)) {
                image_urls.push(...existing_images);
            } else if (typeof existing_images === "string" && existing_images.length > 0) {
                image_urls.push(existing_images);
            }
            // якщо existing_images === "" → масив залишиться порожнім (очищення)
        }
        // додаємо нові файли
        if (req.files?.length) {
            for (const file of req.files) {
                const response = await imagekit.upload({
                    file: file.buffer, // ✅ memoryStorage
                    fileName: file.originalname,
                    folder: "/veterans_organization/analytical"
                });

                const imageUrl = imagekit.url({
                    path: response.filePath,
                    transformation: [
                        { width: "1280" },
                        { height: "720" },
                        { quality: "auto" },
                        { format: "webp" }
                    ]
                });

                image_urls.push(imageUrl);
            }
        }

        const slug = slugify(title, { lower: true, strict: true, locale: "uk" });
        await analytical.updateOne({ position_type, status, title, excerpt, content, category, post_type, is_featured, tags, slug, image_urls });

        const token = generateSessionToken(user._id);
        return res.status(200).json({ success: true, token, message: "Матеріал оновлено", id: analytical._id });
    } catch (error) {
        console.error("updateAnalytical:", error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

// delete analytical post
// DELETE: /api/analytical/delete/:id
export const deleteAnalytical = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ success: false, message: "Користувача не знайдено" });
        }
        if (!user.verify_email) {
            return res.status(403).json({ success: false, message: "Підтвердіть email" });
        }

        const { id } = req.params;
        const analytical = await Analytical.findById(id);
        if (!analytical) {
            return res.status(404).json({ success: false, message: "Стаття не знайдена" });
        }

        await analytical.deleteOne();

        const token = generateSessionToken(user._id);
        res.status(201).json({ success: true, token, message: "Матеріал видалено" });
    } catch (error) {
        console.error("deleteAnalytical:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// get all analyticals ADMIN
// GET: /api/analytical/get-admin
export const getAllAnalyticalAdmin = async (req, res) => {
    try {
        const data = await Analytical.find({}).populate("author").populate("category").sort({ createdAt: -1 });

        res.status(201).json({ success: true, data });
    } catch (error) {
        console.error("getAllAnalyticalAdmin:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// get single analytical by id
// GET: /api/analytical/get/:id
export const getSingleAnalyticalById = async (req, res) => {
    try {
        const { id } = req.params;
        const analytical = await Analytical.findById(id).populate("author").populate("category");
        if (!analytical) {
            return res.status(404).json({ success: false, message: "Стаття не знайдена" });
        }

        res.status(201).json({ success: true, data: analytical });
    } catch (error) {
        console.error("getSingleAnalyticalById:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// publish analytical
// GET: /api/analytical/publish/:id
export const publishAnalytical = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ success: false, message: "Користувача не знайдено" });
        }
        if (!user.verify_email) {
            return res.status(403).json({ success: false, message: "Підтвердіть email" });
        }

        const { id } = req.params
        const analytical = await Analytical.findById(id);
        if (!analytical) {
            return res.status(404).json({ success: false, message: "Стаття не знайдена" });
        }

        analytical.status = "published";
        analytical.publishedAt = new Date();
        await analytical.save();

        const token = generateSessionToken(user._id);
        res.status(201).json({ success: true, token, message: "Опубліковано" });
    } catch (error) {
        console.error("publishAnalytical:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// get all analyticals PUBLISHED
// GET: /api/analytical/get
export const getAllAnalytical = async (req, res) => {
    try {
        const data = await Analytical.find({ status: "published" }).populate("author").populate("category");

        res.status(201).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// toggle featured post
// PUT: /api/analytical/toggle-featured/:id
export const toggleFeatured = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ success: false, message: "Користувача не знайдено" });
        }
        if (!user.verify_email) {
            return res.status(403).json({ success: false, message: "Підтвердіть email" });
        }

        const { id } = req.params
        const analytical = await Analytical.findById(id);
        if (!analytical) {
            return res.status(404).json({ success: false, message: "Стаття не знайдена" });
        }

        analytical.is_featured = !analytical.is_featured;
        await analytical.save();

        const token = generateSessionToken(user._id);
        res.json({ success: true, token, message: analytical.is_featured ? "Додано в обране" : "Знято з обраного" });
    } catch (error) {
        console.error("toggleFeatured:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// like analytical
// PUT: /api/analytical/like/:id
export const likeAnalytical = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ success: false, message: "Користувача не знайдено" });
        }
        if (!user.verify_email) {
            return res.status(403).json({ success: false, message: "Підтвердіть email" });
        }

        const { id } = req.params
        const analytical = await Analytical.findById(id);
        if (!analytical) {
            return res.status(404).json({ success: false, message: "Стаття не знайдена" });
        }

        const isLiked = analytical.likes.includes(userId);

        if (isLiked) { analytical.likes.pull(userId); }
        else { analytical.likes.push(userId); }

        await analytical.save();

        const token = generateSessionToken(user._id);
        res.status(201).json({ success: true, token, message: isLiked ? "Ви видалили лайк" : "Ви додали лайк", likes: analytical.likes.length, likedByMe: isLiked ? false : true });
    } catch (error) {
        console.error("likeAnalytical:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// add view to analytical
// GET: /api/analytical/add-view/:id
export const getAddViewAnalytical = async (req, res) => {
    try {
        const { id } = req.params;

        const analytical = await Analytical.findOne({ _id: id, status: "published" });

        if (!analytical) {
            return res.status(404).json({ success: false, message: "Стаття не знайдена" });
        }

        analytical.views_count += 1;
        await analytical.save();

        res.status(201).json({ success: true, data: analytical });
    } catch (error) {
        console.error("getAddViewAnalytical:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};