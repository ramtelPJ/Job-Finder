import mongoose from "mongoose";

const jobSchema=new mongoose.Schema({
title:{
    type:String,
    required:true,
    trim:true   
},
description:{
    type:String,
    required:true
},
requirements:[{type:String, trim:true}],
salary:{
    type:Number,
      
},
location:{
    type:String,
    required:true,
    trim:true
},
experienceLevel:{
    type:String,

},
jobType:{
    type:String,
    enum:['full-time', 'part-time', 'contract', 'internship'],
    required:true
},
position:{
    type:String,
    required:true,
    trim:true
},
company:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Company",
    
},
createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
   // required:true
},
},{timestamps:true})

export const Job=mongoose.model("Job",jobSchema);