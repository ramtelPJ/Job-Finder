import express from 'express';
import {registerUser,loginUser, updateUserProfile} from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
const router=express.Router();
import { singleUpload } from '../middlewares/multer.js';
router.route('/register').post(singleUpload,registerUser);
router.route('/login').post(loginUser);
router.route('/profile/update').post(isAuthenticated,singleUpload,updateUserProfile);


export default router;