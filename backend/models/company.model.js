import mongoose from "mongoose";
const companySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true       
    },
    location:{
        type:String,
        
        trim:true
    },
    jobTypes:{
        type:String,
        enum:['full-time, part-time, contract, internship']
        
    },
    website:{
        type:String,
    },
    logo:{
        type:String,
    },
    description:{
        type:String,
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        
    }
}, {timestamps:true});

export const Company=mongoose.model("Company",companySchema)