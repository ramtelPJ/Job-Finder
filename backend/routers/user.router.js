import express from 'express';
import {registerUser,loginUser, updateUserProfile,logoutUser} from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
const router=express.Router();
import { profilePictureUpload, resumeUpload } from '../middlewares/multer.js';
router.route('/register').post(profilePictureUpload,registerUser);
router.route('/login').post(loginUser);
router.route('/profile/update').put(isAuthenticated,resumeUpload,updateUserProfile);
router.route('/logout').get(isAuthenticated,logoutUser);

export default router;