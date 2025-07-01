import express from 'express';
//import {registerUser,loginUser, updateUserProfile} from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { registerCompany,getCompany, getCompanyById, updateCompany } from '../controllers/company.controller.js';
//import { get } from 'mongoose';
const router=express.Router();

router.route('/register').post(isAuthenticated,registerCompany);
router.route('/get').get(isAuthenticated,getCompany);
router.route('/get/:id').get(isAuthenticated,getCompanyById);
router.route('/update/:id').post(isAuthenticated,updateCompany);

export default router;