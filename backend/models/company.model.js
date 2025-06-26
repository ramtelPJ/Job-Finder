import mongoose from "mongoose";
const companySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true       
    },
    location:{
        type:String,
        required:true,
        trim:true
    },
    jobTypes:{
        type:String,
        enum:['full-time, part-time, contract, internship'],
        required:true
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
        required:true
    }
}, {timestamps:true});

export const Company=mongoose.model("Company",companySchema)