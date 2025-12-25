import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import crypto from "crypto"
import { generateSessionToken } from "../utils/generateSessionToken.js";
import { generateRefreshToken } from "../utils/generateRefreshToken.js";
import { generateEmailVerifyToken } from "../utils/generateEmailVerifyToken.js";
import { sendVerifyEmail } from "../utils/sendVerifyEmail.js";
import fs from "fs";
import imagekit from "../configs/imagekit.js";


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

        const newUser = await User.create({
            full_name,
            email,
            password: hashedPassword,
            email_verify_token: hashedEmailToken,
            email_verify_expiry: Date.now() + 1000 * 60 * 60, // 1 година
        });

        const verifyUrl = `${process.env.CLIENT_URL}/verify-email?token=${emailToken}`;
        await sendVerifyEmail(newUser.email, verifyUrl);

        res.status(201).json({ message: "Реєстрація успішна. Перевірте email для підтвердження.", succses: true, error: false });
    } catch (error) {
        res.status(500).json({ message: "Помилка при реєстрації", error, succses: false, error: true });
    }
}

// verify email
// POST /api/users/verify-email
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

        const updatedUser = await User.findOneAndUpdate( { _id: user._id }, { new: true });
        updatedUser.password = undefined;

        res.status(200).json({ message: "User logged in successfully", succses: true, error: false, token, refresh_token, updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error logging in user", error, succses: false, error: true });
    }
}

// get user by using token
// GET: /api/users/data
export const getUserDataController = async (req, res) => {
    try {
        const { userId } = req
        const user = await User.findOne({ _id: userId }).select("-password");

        res.status(200).json({
            success: true,
            error: false,
            message: "Авторізація успішна",
            user
        });
    } catch (error) {
        console.log(error.message || error);

        res.status(500).json({
            success: false,
            error: true,
            message: error.message || error
        });
    }
};

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
        const buffer = file.buffer;
        const response = await imagekit.upload({
            file: buffer,
            fileName: imageFile.originalname,
            folder: "/veteransOrganization/users/avatars",
        })
        // generation url for image from respons imagekit
        const imageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {width: '1280'},   // Resize to width 1280
                {quality: 'auto'}, // Auto compression 
                {format: 'webp'}   // Convert to modern image format
            ]
        })
        const image = imageUrl

        user.avatar = image
        await user.save()

        const token = generateSessionToken(user._id);

        res.status(200).json({ message: "Аватар успішно завантажено", success: true, error: false, token, user });
    } catch (error) {
        res.status(500).json({ message: "Помилка завантаження аватара", error, succses: false, error: true });
    }
}