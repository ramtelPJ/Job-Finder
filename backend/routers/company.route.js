import express from 'express';
//import {registerUser,loginUser, updateUserProfile} from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { registerCompany } from '../controllers/company.controller.js';
import { get } from 'mongoose';
const router=express.Router();

// router.route('/register').post(registerUser);
// router.route('/login').post(loginUser);
// router.route('/profile/update').post(isAuthenticated,updateUserProfile);

router.route('/register').post(registerCompany);
router.route('/get').post(getCompany);
router.route('/get/:id').post(getCompanyById);
router.route('/update/:id')
export default router;