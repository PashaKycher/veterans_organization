import express from 'express';
import protect from '../middlewares/authMiddleware.js';
import upload from '../configs/multer.js'

import {
    getUserDataController, loginUser, registerUser, verifyEmail, uploadAvatar,
    toggleUserFeaturedAnalytical, toggleUserFeaturedNews, toggleUserFeaturedPosition,
    updateUser, updateIsLeader, updateIsClubLeader, updateStoriesForPage, updateUserRole, 
    updateRoleOwner, getAllUsers,
    getAllUsersLeader,
    getAllUsersClubLeader
} from '../controllers/userController.js';
import { get } from 'mongoose';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/verify-email', verifyEmail)
userRouter.post('/login', loginUser)
userRouter.get('/data', protect, getUserDataController)
userRouter.post('/avatar', upload.single('avatar'), protect, uploadAvatar)
userRouter.put("/analytical-featured/:id", protect, toggleUserFeaturedAnalytical);
userRouter.put("/news-featured/:id", protect, toggleUserFeaturedNews);
userRouter.put("/position-featured/:id", protect, toggleUserFeaturedPosition);
userRouter.put("/update", protect, upload.fields([{ name: "avatar", maxCount: 1 }, { name: "cover_photo", maxCount: 1 }]), updateUser);
userRouter.put("/is-leader", protect, updateIsLeader);
userRouter.put("/is-club-leader", protect, updateIsClubLeader);
userRouter.put("/stories-for-page", protect, updateStoriesForPage);
userRouter.put("/role", protect, updateUserRole);
userRouter.put("/role-owner", protect, updateRoleOwner);
userRouter.get("/users", getAllUsers);
userRouter.get("/usersleader", getAllUsersLeader);
userRouter.get("/usersclubleader", getAllUsersClubLeader);

export default userRouter