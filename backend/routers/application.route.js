import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { applyJobs, getApplications, getAppliedJobs, statusApplication } from '../controllers/application.controller.js';

const router=express.Router();
router.route('/apply/:id').post(isAuthenticated,applyJobs);
router.route('/get').get(isAuthenticated,getAppliedJobs);
router.route('/:id/applicants').get(isAuthenticated,getApplications);
router.route('/status/:id/update').post(isAuthenticated,statusApplication);

export default router;