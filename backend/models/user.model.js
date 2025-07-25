import mongoose from "mongoose";   
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    phoneNumber:{
        type:String,
        
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    role:{
        type:String,
        enum:['user','admin','recruiter'],
        default:'user'
    },
    profile:{
        bio:{
            type:String,
            trim:true
        },
        skills:[{
            type:String,
            trim:true
        }],
        resume:{
            type:String,
            trim:true
        },
        profilePicture:{
            type:String,
            trim:true,
            default:"",
        },
        company:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Company",
            trim:true
        },
    }
},{timestamps:true});

export const User=mongoose.model("User",userSchema)