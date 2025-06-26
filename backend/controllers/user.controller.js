import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Logic for the user registration:

export const resisterUser=async(req,res)=>{
try{
    const{fullName,email,phoneNumber,password,role}=req.body;
    if(!fullName || !email || !phoneNumber || !password||!role){
        return res.status(400).json(
            {
                message:"Input fields are required",
                success:false
            }
        );
    }

let user=await User.findOne({email});
if(user){
    return res.status(400).json(
        {
            message:"User already exists",
            success:false
        }
    )
}
const hashedPassword=await bcrypt.hash(password,10);
await User.create({
    fullName,
    email,
    phoneNumber,
    password:hashedPassword,
    role
});

return res.status(201).json({
    message:"Account created successfully",
    success:true
})
}
catch(error){
    console.error("Error in resisterUser:", error);
    return res.status(500).json({
        message:"Internal server error",
        success:false
    });

}
}

// Logic to handle the user login

export const loginUser=async(req,res)=>{
    try {
        const{email,password,role}=req.body;
        if(!email||!password||!role){
            return res.status(400).json({
                message:"Input fields are required",
                success:false
            })
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"User does not exist",
                success:false
            });
        }
        const isPasswordValid=await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(400).json({
                message:"Invalid password",
                success:false
            });
        }
        // Check if the role is matching or not:

        if(role !== user.role){
            return res.status(403).json({
                message:"Unauthorized role",
                success:false
            });
        }
        const tokenData={
        userID:user._id,
        }
        const token=await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:"1d"});
        user={
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile,
        }
        //Storing the token in the cookie
        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpsOnly:true,sameSite:"strict:"}).json({
            message:"Login Sucessful",
            success:true,
        })
    } catch (error) {
        console.log(error)
    }
}



// Logic for the user logout

export const logoutUser=async(req,res)=>{
try {
    return res.status(200).cookie("token","",{maxAge:0}).json({
        message:"Logout successful",
        success:true
    })
} catch (error) {
    console.log(error);
}

}
