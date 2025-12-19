import express from 'express';

import  protect  from '../middlewares/authMiddleware.js';
import  upload  from '../configs/multer.js';
import { loginUser, registerUser, verifyEmail } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/verify-email', verifyEmail)
userRouter.post('/login', loginUser)

export default userRouter