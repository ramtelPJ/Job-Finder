import {Company} from '../models/company.model.js';

//Getting the company name and creating a new company if it does not exist:
export const registerCompany=async(req,res)=>{
    try {
        const {companyName}=req.body;
        if(!companyName){
            return res.status(400).json({
                message:"Comapny name is not found",
                success:false
            })
        }
        
        let company=await Company.findOne({name:companyName});
        //Check if company already exists
        if(company){
            return res.status(400).json({
                message:"Company already exists",
                success:false,
                
            })
        }
        company=await Company.create({
            name:companyName,
            userID:req.id,
        })
        return res.status(201).json({
            message:"Company created successfully",
            company,
            success:true,
        });

    } catch (error) {
        console.log(error)  
    }
}

// Getting the company by user id:
export const getCompany=async(req,res)=>{
    try {
        const userId=req.id; // 
        const company=await Company.findOne(userId); // Findinng the company by id, so that all the 
        if(!company){
            return res.status(401).json({
                message:"Company not found",
                success:false
            });
        }
        return res.status(200).json({
            message:"Company founded successfully",
            success:true,
            company,
        })
    } catch (error) {
        console.log(error);
    }
}

// getting company by id:

export const getCompanyById=async(req,res)=>{
    try {
        const companyId=req.params.id;
        const company=await Company.findById(companyId);
        if(!company){
            return res.status(400).json({
                message:"Company id is not found",
                success:false
            })
        }
        return res.status(200).json({
            message:"Company found successfully",
            success:true,
            company
        })
    } catch (error) {
        console.log(error);
    }
}
// Updating the company by id:
export const updateCompany=async(req,res)=>{
    try {
        const {companyName, location, jobTypes, website, logo, description} = req.body;
        const file=req.file;
        // space for the cloudinary upload
        const updateData={name:companyName, location, jobTypes, website, logo, description};
        const company=await Company.findByIdAndUpdate(req.params.id,updateData,{new:true})  
        if(!company){
            return res.status(400).json({
                message:"Company not found",
                success:false
            })
        }  
        return res.status(200).json({
            message:"Company updated successfully",
            success:true,
            
        })                  
    } catch (error) {
        console.log(error)
    }
}