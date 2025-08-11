import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog.jsx";
import { Input } from "./ui/input.jsx";
import { Label } from "./ui/label.jsx";
import { Button } from "./ui/button.jsx";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";
import { END_USER_ENDPOINT } from "../utils/constant.js";
import axios from "axios";
import { toast } from "sonner"; 
import { setUser } from "@/redux/authSlice.js";
import { useDispatch } from "react-redux";

function UpdateProfileDialog({ open, setOpen }) {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(store => store.auth);
    const [input, setInput] = useState({
        fullName: user?.fullName || "",
        email: user?.email || "", 
        phoneNumber: user?.phoneNumber || "",
        bio: user?.profile?.bio || "",
        skills: user?.profile?.skills?.join(", ") || "", // Join array to string
        file: null // Changed from user?.profile?.resume to null
    });
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const fileHandlerChange = (e) => {
        const file = e.target.files?.[0];
        
        // Client-side file validation
        if (file) {
            const allowedTypes = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            ];
            
            const maxSize = 5 * 1024 * 1024; // 5MB
            
            if (!allowedTypes.includes(file.type)) {
                toast.error("Only PDF and DOC files are allowed for resume");
                e.target.value = ""; // Clear the input
                return;
            }
            
            if (file.size > maxSize) {
                toast.error("File size must be less than 5MB");
                e.target.value = ""; // Clear the input
                return;
            }
        }
        
        setInput({ ...input, file });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        // Append all form fields
        formData.append('fullName', input.fullName);
        formData.append('email', input.email);
        formData.append('phoneNumber', input.phoneNumber);
        formData.append('bio', input.bio);
        formData.append('skills', input.skills);
        
        // IMPORTANT: Changed field name from 'file' to 'resume' to match multer config
        if (input.file) {
            formData.append('resume', input.file);
        }

        try {
            setLoading(true);
            // Changed from POST to PUT to match your backend route
            const res = await axios.put(`${END_USER_ENDPOINT}/profile/update`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true,
            });
            
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
                setOpen(false);
            }
        } catch (error) {
            console.log("Profile update error:", error);
            
            // Improved error handling
            if (error.response) {
                const errorMessage = error.response.data?.message || "Failed to update profile";
                toast.error(errorMessage);
            } else if (error.request) {
                toast.error("Network error - please check your connection");
            } else {
                toast.error("An unexpected error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Dialog open={open} onChange={setOpen}>
                <DialogContent className="sm:max-w-[425px] w-full" onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={submitHandler}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input 
                                    id="name" 
                                    name='fullName' 
                                    type='text' 
                                    value={input.fullName} 
                                    onChange={handleInputChange} 
                                    className="col-span-3" 
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right">
                                    Email
                                </Label>
                                <Input 
                                    id="email" 
                                    name='email' 
                                    type='email'
                                    value={input.email} 
                                    onChange={handleInputChange} 
                                    className="col-span-3" 
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="number" className="text-right">
                                    CWID Number
                                </Label>
                                <Input 
                                    id="number" 
                                    name='phoneNumber' 
                                    value={input.phoneNumber} 
                                    onChange={handleInputChange} 
                                    className="col-span-3" 
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="bio" className="text-right">
                                    Bio
                                </Label>
                                <Input 
                                    id="bio" 
                                    name='bio' 
                                    value={input.bio} 
                                    onChange={handleInputChange} 
                                    className="col-span-3" 
                                    placeholder="Tell us about yourself"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="skills" className="text-right">
                                    Skills
                                </Label>
                                <Input 
                                    id="skills" 
                                    name='skills' 
                                    value={input.skills} 
                                    onChange={handleInputChange} 
                                    className="col-span-3" 
                                    placeholder="e.g. JavaScript, React, Node.js"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="file" className="text-right">
                                    Resume
                                </Label>
                                <Input 
                                    id="file" 
                                    name='file' 
                                    className="col-span-3" 
                                    onChange={fileHandlerChange} 
                                    type='file' 
                                    accept='.pdf,.doc,.docx'
                                />
                            </div>
                            {/* Show current resume if exists */}
                            {user?.profile?.resumeOriginalName && (
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label className="text-right">Current Resume</Label>
                                    <span className="col-span-3 text-sm text-gray-600">
                                        {user.profile.resumeOriginalName}
                                    </span>
                                </div>
                            )}
                        </div>
                        <DialogFooter>
                            {loading ? (
                                <Button className='w-full py-2' disabled>
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                    Please Wait
                                </Button>
                            ) : (
                                <Button 
                                    type='submit' 
                                    className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                                >
                                    Update
                                </Button>
                            )}
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default UpdateProfileDialog;