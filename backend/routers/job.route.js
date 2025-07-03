import express from 'express';
import { getAdminJobs, getJob, getJobById, postJob } from '../controllers/job.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router=express.Router();
router.route('/post').post(postJob);
router.route('/get').get(isAuthenticated,getJob)
router.route('/get/:id').get(isAuthenticated,getJobById)
router.route('/getadminsjob/:id').get(isAuthenticated,getAdminJobs)


export default router;