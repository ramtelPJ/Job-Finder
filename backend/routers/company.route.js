import express from 'express';

import isAuthenticated from '../middlewares/isAuthenticated.js';
import { registerCompany,getCompany, getCompanyById,updateCompany } from '../controllers/company.controller.js';

const router=express.Router();

router.route('/register').post(registerCompany);
router.route('/get').get(getCompany);
router.route('/get/:id').get(getCompanyById);
router.route('/update/:id').put(updateCompany);

export default router;