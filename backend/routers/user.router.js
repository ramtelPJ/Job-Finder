import express from 'express';
import {registerUser,loginUser, updateUserProfile} from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
const router=express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/profile/update').post(isAuthenticated,updateUserProfile);


export default router;