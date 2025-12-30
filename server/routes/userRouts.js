import express from 'express';

import  protect  from '../middlewares/authMiddleware.js';
import  upload  from '../configs/multer.js'
import { getUserDataController, loginUser, registerUser, verifyEmail, uploadAvatar, toggleUserFeaturedAnalytical, toggleUserFeaturedNews } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/verify-email', verifyEmail)
userRouter.post('/login', loginUser)
userRouter.get('/data', protect, getUserDataController)
userRouter.post('/avatar',upload.single('avatar'), protect, uploadAvatar)
userRouter.put("/analytical-featured/:id", protect, toggleUserFeaturedAnalytical);
userRouter.put("/news-featured/:id", protect, toggleUserFeaturedNews);

export default userRouter