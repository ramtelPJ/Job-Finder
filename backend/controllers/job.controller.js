import { Job } from "../models/job.model.js";
export const postJob=async(req,res)=>{
    try {
        const{title,description,location,salary,jobType,requirements,experienceLevel,position,companyId}=req.body;
        const userID=req.id;

        if(!companyId||!title || !description || !location || !salary||!jobType||!requirements||!experienceLevel||!position){
            return res.status(400).json({
                message:"Fields are missing",
                success:false
            })
        }
        const job=await Job.create({
            title,
            description,
            location,
            salaray:Number(salary),
            requirements:requirements.split(","),
            jobType,
            location,
            experienceLevel,
            position,
            created_by:userID,
            company:companyId
        })
        return res.status(201).json({
            message:"Job has been created",
            job,
            success:true,
        })
    } catch (error) {
        console.log(error);
    }
}

// Getting the Job:

export const getJob=async(req,res)=>{
    try {
        const keyword=req.query.keyword||"";
        const query={
            $or:[
               {title:{$regex:keyword,$options:"i"}} ,
               {description:{$regex:keyword,$options:"i"}}
            ]
        }
        const job=await Job.find(query).populate({
            path:"company",
        })
        if(!job){
            return res.status(404).json({
                message:"Couldn't find the job",
                success:false
            })
        }
        return res.status(200).json({ 
            job,
            success:true,
        })
    } catch (error) {
        console.log(error)
    }
}
// For the User
export const getJobById=async(req,res)=>{
    try {
        const jobId=req.params.id;
        const job=await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message:"Couldn't find the job",
                success:false
            }) 
        }
        return res.status(200).json({
            job,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAdminJobs=async(req,res)=>{
    try {
        const adminId=req.id;
        const job=await Job.find({created_by:adminId})
        if(!job){
            return res.status(404).json({
                message:"Couldn't find the job",
                success:false
            })  
        }
        return res.status(200).json({
            job,
            success:true,
            
        })
    } catch (error) {
        console.log(error)
    }
}