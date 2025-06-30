import {Company} from '../models/company.model.js';

export const CompanyName=async(req,res)=>{
    try {
        const {companyName}=req.body
        if(!companyName){
            return res.status(400).json({
                message:"Comapny name is not found",
                success:false
            })
        }
        let company=await Company.findOne({name:companyName});
        //Check if company already exists
        if(company){
            return res.status(200).json({
                message:"Company already exists",
                success:true,
                company
            })
        }
    } catch (error) {
        console.log(error)
    }
}