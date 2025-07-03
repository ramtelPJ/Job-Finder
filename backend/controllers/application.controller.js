
import {Application} from '../models/application.model.js';
import {Job} from '../models/job.model.js';
export const applyJobs=async(req,res)=>{
    try {
        const userId=req.id;
        const jobId=req.params.id;
        // have to have the job id: 
        if(!jobId){
            return res.status(400).json({
                message:"Job id is required",
                success:false,
            })
        }


        //check if user has already applied for the job:
        const existingApplication=await Application.findOne({job:jobId,applicant:userId});
        if(existingApplication){
            return res.status(400).json({
                message:"You have already applied for this job",
                success:false,
            });
        };
// Check if the job exists:
const job=await Job.findById(jobId);
if(!job){
    return res.status(404).json({
        message:"Job not found",
        success:false,
    });
}

// Finally, create a application for the job:
const newApplication=await Application.create({
    job:jobId,
    application:userId,

})
job.applications.push(newApplication._id);
await job.save();

returnres.status(201).json({
    message:"Application submitted successfully",
    application:newApplication,
    success:true,   
})

    } catch (error) {
        console.log(error);
    }
}

export const getAppliedJobs=async(req,res)=>{
    try {
        const userId=req.id;
        const applications=await Application.find({applicant:userId}).sort({createdAt:-1}).populate({path:"job",populate:{path:'company'}});
        if(!applications){
            return res.status(404).json({
                message:"No applications found",
                success:false,
            });
        }
        return res.status(200).json({
            message:"Applications found successfully",
            applications,
            success:true,
        })
        // Find all applications made by the user:
    } catch (error) {
        console.log(error);
    }
}

// For the admin to see how many applications are there:

export const getApplications=async(req,res)=>{
    try {
        const jobId=req.params.id;
        const job=await Job.findById(jobId).populate({path:'applications',populate:{path:'applicant'}});
        if(!job){
            return res.status(404).json({
                message:"No body applied for this job",
                success:false,
            });
        }
        return res.status(200).json({
           job,
           success:true
        });
    } catch (error) {
        console.log(error);
    }
}

// about the status of the application:

export const statusApplication=async(req,res)=>{
    try {
        const {status}=req.body;
        const applicationId=req.params.id;
        if(!status){
            return res.status(400).json({
                message:"Status is required",
                success:false,
            });
        }
        const application=await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(404).json({
                message:"Application not found",
                success:false,
            });
        };
        application.status=status.toLowerCase();  // updating the status of the application
        await application.save();
        return res.status(200).json({
            message:"Application status updated successfully",
            application,
            success:true,
        })
    } catch (error) {
        console.log(error);
    }
}