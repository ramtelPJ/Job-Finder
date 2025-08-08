import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";  
//Logic for the user registration:

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Input fields are required",
        success: false,
      });
    }
const file=req.file;
const fileUri=getDataUri(file);
const cloudResponse=await cloudinary.uploader.upload(fileUri.content);
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }
    //Logic for the password hashing:
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });
    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// Logic to handle the user login

export const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Input fields are required",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
        success: false,
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid password",
        success: false,
      });
    }
    // Check if the role is matching or not:

    if (role !== user.role) {
      return res.status(403).json({
        message: "Unauthorized role",
        success: false,
      });
    }
    // return res.status(200).json({
    //     message: "Login successful",
    //     success: true,
    //     user:{
    //         fullName:user.fullName,
    //         email:user.email,
    //         phoneNumber:user.phoneNumber,
    //         role:user.role,
    //         profile:user.profile,   
    //     }
    // })
    
    const tokenData = {
      userID: user._id,
    };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    const safeUser = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    //Storing the token in the cookie
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure:false   // only true if there is https
      })
      .json({
        message: "Login Sucessful",
        success: true,
        user:safeUser,
      });

  } catch (error) {
    console.log(error);
  }
};

// Logic for the user logout

export const logoutUser = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logout successful",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// logic for updating the user profile:
export const updateUserProfile = async (req, res) => {
  try {
    const { fullName,email,phoneNumber,bio, skills} = req.body;
    //console.log(fullName,email,phoneNumber,bio, skills);
    //const { bio, skills, resume, profilePicture, company } = req.body;

    const file = req.file; // Assuming you are using multer for file uploads
    const fileUri=getDataUri(file);
    const cloudResponse=await cloudinary.uploader.upload(fileUri.content);


    const skillsArray = skills.split(",");
    const userId = req.id; // middleware will add the user id to the request object
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }
    if(fullName)user.fullName = fullName
    if(email)user.email = email
     if(phoneNumber) user.phoneNumber = phoneNumber
      if(bio) user.profile.bio = bio
      if(skills) user.profile.skills = skillsArray
      //(user.profile.resume = resume),
      //(user.profile.profilePicture = profilePicture),
      //(user.profile.company = company),
      //Resume comes over here

if(cloudResponse){
        user.profile.resume = cloudResponse.secure_url;
        user.profile.resumeOriginalName = file.originalname;
      }

    
      await user.save();
      user = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile,
      };
      return res.status(200).json({
        message:"Account updated successfully",
        user,
        success: true,
      })
  } catch (error) {
    console.log(error);
  }
};
