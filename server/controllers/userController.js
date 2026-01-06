import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import crypto from "crypto"
import { generateSessionToken } from "../utils/generateSessionToken.js";
import { generateRefreshToken } from "../utils/generateRefreshToken.js";
import { generateEmailVerifyToken } from "../utils/generateEmailVerifyToken.js";
import { sendVerifyEmail } from "../utils/sendVerifyEmail.js";
import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Analytical from "../models/analyticalModel.js";
import News from "../models/newsModel.js";
import Position from "../models/positionModel.js";


// register user 
// POST: /api/users/register
export const registerUser = async (req, res) => {
    try {
        const { full_name, email, password } = req.body;
        if (!full_name) {
            return res.status(400).json({ message: "Введіть ім'я", succses: false, error: true });
        }
        if (!email) {
            return res.status(400).json({ message: "Введіть емейл", succses: false, error: true });
        }
        if (!password) {
            return res.status(400).json({ message: "Введіть пароль", succses: false, error: true });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Користувач з таким емейлом вже існує", succses: false, error: true });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const { emailToken, hashedEmailToken } = generateEmailVerifyToken();
        const user_name = email.split("@")[0];
        const newUser = await User.create({
            full_name,
            email,
            user_name,
            password: hashedPassword,
            email_verify_token: hashedEmailToken,
            email_verify_expiry: Date.now() + 1000 * 60 * 60, // 1 година
        });
        const verifyUrl = `${process.env.CLIENT_URL}/verify-email?token=${emailToken}`;
        await sendVerifyEmail(newUser.email, verifyUrl);
        res.status(201).json({ message: "Реєстрація успішна. Перевірте email для підтвердження.", succses: true, error: false });
    } catch (error) {
        console.error("REGISTER ERROR:", error);
        res.status(500).json({ message: "Помилка при реєстрації", succses: false, error: true });
    }
}

// verify email
// POST: /api/users/verify-email
export const verifyEmail = async (req, res) => {
    try {
        const { token } = req.body;

        const hashedToken = crypto
            .createHash("sha256")
            .update(token)
            .digest("hex");

        const user = await User.findOne({
            email_verify_token: hashedToken,
            email_verify_expiry: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ message: "Токен недійсний або прострочений" });
        }

        user.verify_email = true;
        user.email_verify_token = null;
        user.email_verify_expiry = null;

        await user.save();

        res.status(200).json({ success: true, message: "Email підтверджено" });

    } catch (error) {
        console.error("VERIFY EMAIL ERROR:", error);
        res.status(500).json({ message: "Помилка верифікації", error });
    }
};

// login user
// POST: /api/users/login
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Введіть емейл", succses: false, error: true });
        }
        if (!password) {
            return res.status(400).json({ message: "Введіть пароль", succses: false, error: true });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Користувач не знайдений", succses: false, error: true });
        }
        if (!user.verify_email) {
            return res.status(403).json({
                message: "Підтвердіть email перед входом",
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Невірний пароль", succses: false, error: true });
        }

        const refresh_token = generateRefreshToken(user._id);
        const token = generateSessionToken(user._id);

        const updatedUser = await User.findOneAndUpdate({ _id: user._id }, { new: true });
        updatedUser.password = undefined;

        res.status(200).json({ message: "User logged in successfully", succses: true, error: false, token, refresh_token, updatedUser });
    } catch (error) {
        console.error("LOGIN ERROR:", error);
        res.status(500).json({ message: "Error logging in user", error, succses: false, error: true });
    }
}

// upload avatar
// POST: /api/users/avatar
export const uploadAvatar = async (req, res) => {
    try {
        const imageFile = req.file
        const { userId } = req
        const user = await User.findOne({ _id: userId });

        if (!user) {
            return res.status(404).json({ message: "User not found", succses: false, error: true });
        }
        if (!user.verify_email) {
            return res.status(403).json({
                message: "Підтвердіть email перед входом",
            });
        }

        // upload image to ImageKit
        const response = await imagekit.upload({
            file: imageFile.buffer, // ✅ memoryStorage
            fileName: imageFile.originalname,
            folder: "/veterans_organization/avatars"
        });
        // generation url for image from respons imagekit
        const imageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { width: "1280" },
                { height: "720" },
                { quality: "auto" },
                { format: "webp" }
            ]
        });

        const image = imageUrl

        const refresh_token = generateRefreshToken(user._id);

        user.avatar = image
        user.refresh_token = refresh_token
        await user.save()

        const token = generateSessionToken(user._id);

        res.status(200).json({ message: "Аватар успішно завантажено", success: true, error: false, token, user });
    } catch (error) {
        console.log("UPLOAD AVATAR ERROR:", error);
        res.status(500).json({ message: "Помилка завантаження аватара", error, succses: false, error: true });
    }
}

// get user by using token
// GET: /api/users/data
export const getUserDataController = async (req, res) => {
    try {
        const { userId } = req
        const user = await User.findOne({ _id: userId }).select("-password");
        const token = generateSessionToken(user._id);

        res.status(200).json({ success: true, token, error: false, message: "Авторізація успішна", user });
    } catch (error) {
        console.log("GET USER DATA ERROR:", error);
        res.status(500).json({ success: false, error: true, message: error.message || error });
    }
};

// toggle user featured analytical
// PUT: /api/user/analytical-featured/:id
export const toggleUserFeaturedAnalytical = async (req, res) => {
    try {
        const { userId } = req;
        const { id } = req.params;

        const user = await User.findById(userId);
        if (!user.verify_email) { return res.status(403).json({ success: false, message: "Підтвердіть email перед входом" }); }

        const analytical = await Analytical.findById(id);
        if (!analytical) { return res.status(404).json({ success: false, message: "Стаття не знайдена" }); }

        const exists = user.analiticals.includes(id);
        if (exists) { user.analiticals.pull(id); }
        else { user.analiticals.push(id); }
        await user.save();

        const token = generateSessionToken(user._id);
        res.status(200).json({ success: true, token, featured: !exists, message: exists ? "Статтю видалено з обраного" : "Статтю додано в обране" });
    } catch (error) {
        console.log("toggleUserFeaturedAnalytical:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// toggle user featured news
// PUT: /api/user/news-featured/:id
export const toggleUserFeaturedNews = async (req, res) => {
    try {
        const { userId } = req;
        const { id } = req.params;

        const user = await User.findById(userId);
        if (!user.verify_email) { return res.status(403).json({ success: false, message: "Підтвердіть email перед входом" }); }

        const news = await News.findById(id);
        if (!news) { return res.status(404).json({ success: false, message: "Стаття не знайдена" }); }

        const exists = user.news.includes(id);
        if (exists) { user.news.pull(id); }
        else { user.news.push(id); }
        await user.save();

        const token = generateSessionToken(user._id);
        res.status(200).json({ success: true, token, featured: !exists, message: exists ? "Статтю видалено з обраного" : "Статтю додано в обране" });
    } catch (error) {
        console.log("toggleUserFeaturedNews:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// toggle position featured news
// PUT: /api/user/position-featured/:id
export const toggleUserFeaturedPosition = async (req, res) => {
    try {
        const { userId } = req;
        const { id } = req.params;

        const user = await User.findById(userId);
        if (!user.verify_email) { return res.status(403).json({ success: false, message: "Підтвердіть email перед входом" }); }

        const position = await Position.findById(id);
        if (!position) { return res.status(404).json({ success: false, message: "Позицію не знайдена" }); }

        const exists = user.position.includes(id);
        if (exists) { user.position.pull(id); }
        else { user.news.push(id); }
        await user.save();

        const token = generateSessionToken(user._id);
        res.status(200).json({ success: true, token, featured: !exists, message: exists ? "Позицію видалено з обраного" : "Позицію додано в обране" });
    } catch (error) {
        console.log("toggleUserFeaturedPosition:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

