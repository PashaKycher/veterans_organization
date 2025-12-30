import News from "../models/newsModel.js";
import User from "../models/userModel.js";
import slugify from "slugify";
import imagekit from "../configs/imageKit.js"
import { generateSessionToken } from "../utils/generateSessionToken.js";

// create news post
// POST: /api/news/create
export const createNews = async (req, res) => {
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
        if (!title || !content)
            return res.status(400).json({ success: false, message: "Дані відсутні" });

        const slug = slugify(title, { lower: true, strict: true, locale: "uk" });
        /* upload images */
        let image_urls = [];
        if (req.files?.length) {
            for (const file of req.files) {
                const response = await imagekit.upload({
                    file: file.buffer, // ✅ memoryStorage
                    fileName: file.originalname,
                    folder: "/veterans_organization/news"
                });

                const imageUrl = imagekit.url({
                    path: response.filePath,
                    transformation: [
                        { width: "1280" },
                        { quality: "auto" },
                        { format: "webp" }
                    ]
                });

                image_urls.push(imageUrl);
            }
        }


        const news = await News.create({ position_type, status, title, excerpt, content, category, post_type, is_featured, tags, author: userId, slug, image_urls });

        const token = generateSessionToken(user._id);
        res.status(201).json({ success: true, token, message: "Матеріал створено", id: news._id });
    } catch (error) {
        console.error("createNews error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// update news post
// POST: /api/news/update/:id
export const updateNews = async (req, res) => {
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
        const news = await News.findById(id);
        if (!news) {
            return res.status(404).json({ success: false, message: "Матеріал не знайдено" });
        }

        const { position_type, status, title, excerpt, content, category, post_type, is_featured, tags, existing_images } = req.body;

        if (!title || !content || !category) {
            return res.status(400).json({ success: false, message: "Некоректні дані" });
        }

        const slug = slugify(title, { lower: true, strict: true, locale: "uk" });

        /* -------------------- images -------------------- */
        // за замовчуванням — залишаємо як є
        let image_urls = news.image_urls || [];

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
                    folder: "/veterans_organization/news"
                });

                const imageUrl = imagekit.url({
                    path: response.filePath,
                    transformation: [
                        { width: "1280" },
                        { quality: "auto" },
                        { format: "webp" }
                    ]
                });

                image_urls.push(imageUrl);
            }
        }

        /* -------------------- update -------------------- */
        await news.updateOne({ position_type, status, title, excerpt, content, category, post_type, is_featured, tags, slug, image_urls, author: userId });

        const token = generateSessionToken(user._id);
        return res.status(200).json({ success: true, token, message: "Матеріал оновлено", id: news._id });
    } catch (error) {
        console.error("updateNews error:", error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

// delete news post
// DELETE: /api/news/delete/:id
export const deleteNews = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }

        const { id } = req.params;
        const news = await News.findById(id);
        if (!news)
            return res.status(404).json({ success: false, message: "Стаття не знайдена" });

        await news.deleteOne();

        const token = generateSessionToken(user._id);
        res.status(201).json({ success: true, token, message: "Матеріал видалено" });
    } catch (error) {
        console.error("deleteNews error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// get all news ADMIN
// GET: /api/news/get-admin
export const getAllNewsAdmin = async (req, res) => {
    try {
        const data = await News.find({}).populate("author").populate("category").sort({ createdAt: -1 });

        res.status(201).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// get single news by id
// GET: /api/news/get/:id
export const getSingleNewsById = async (req, res) => {
    try {
        const { id } = req.params;
        const news = await News.findById(id).populate("author").populate("category");
        if (!news) return res.status(404).json({ success: false, message: "Стаття не знайдена" });

        res.status(201).json({ success: true, data: news });
    } catch (error) {
        console.error("getSingleNewsById error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// publish news
// GET: /api/news/publish/:id
export const publishNews = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }

        const { id } = req.params
        const news = await News.findById(id);
        if (!news) return res.status(404).json({ success: false, message: "Стаття не знайдена" });

        news.status = "published";
        news.publishedAt = new Date();
        await news.save();

        const token = generateSessionToken(user._id);
        res.status(201).json({ success: true, token, message: "Опубліковано" });
    } catch (error) {
        console.error("publishNews error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// get all news PUBLISHED
// GET: /api/news/get
export const getAllNews = async (req, res) => {
    try {
        const data = await News.find({ status: "published" }).populate("author").populate("category");

        res.status(201).json({ success: true, data });
    } catch (error) {
        console.error("getAllNews error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// toggle featured post
// PUT: /api/news/toggle-featured/:id
export const toggleFeatured = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }

        const { id } = req.params
        const news = await News.findById(id);
        if (!news) return res.status(404).json({ success: false, message: "Стаття не знайдена" });
        news.is_featured = !news.is_featured;
        await news.save();

        const token = generateSessionToken(user._id);
        res.json({ success: true, token, message: news.is_featured ? "Додано в обране" : "Знято з обраного" });
    } catch (error) {
        console.error("toggleFeatured error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// like news
// PUT: /api/news/like/:id
export const likeNews = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        if (!user.verify_email) {
            return res.status(403).json({ message: "Підтвердіть email перед входом", succses: false, error: true });
        }

        const { id } = req.params
        const news = await News.findById(id);
        if (!news) return res.status(404).json({ success: false, message: "Стаття не знайдена" });

        const isLiked = news.likes.includes(userId);

        if (isLiked) { news.likes.pull(userId); }
        else { news.likes.push(userId); }

        await news.save();

        const token = generateSessionToken(user._id);
        res.status(201).json({ success: true, token, message: isLiked ? "Ви видалили лайк" : "Ви додали лайк", likes: news.likes.length, likedByMe: isLiked ? false : true });
    } catch (error) {
        console.error("likeNews error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// add view to news
// GET: /api/news/add-view/:id
export const getAddViewNews = async (req, res) => {
    try {
        const { id } = req.params;

        const news = await News.findOne({ _id: id, status: "published" });

        if (!news)
            return res.status(404).json({ success: false, message: "Стаття не знайдена" });

        news.views_count += 1;
        await news.save();

        res.status(201).json({ success: true, data: news });
    } catch (error) {
        console.error("getAddViewNews error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};