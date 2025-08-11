import React from "react";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"; // Adjust the import path as necessary
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {User2,LogOut} from "lucide-react"; // Assuming you have lucide-react installed for icons
// Assuming Button is a custom or shared UI component
import {Button} from "@/components/ui/button";
import { useDispatch,useSelector } from "react-redux";
import { toast } from "sonner";
import { END_USER_ENDPOINT } from "../../utils/constant.js";
import axios from "axios"; 
import { setUser } from "@/redux/authSlice.js";
import { Link,useNavigate } from "react-router-dom";


const Navbar = () => {
    
  const {user} = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const logOutHandler = async() => {
    try {
      const res = await axios.get(`${END_USER_ENDPOINT}/logout`, {
        withCredentials: true
      });
      
      if(res.data.success){
        // Clear user from Redux store
        dispatch(setUser(null));
        
        // Navigate to home page
        navigate("/");
        
        // Show success message
        toast.success(res.data.message);
      } else {
        // Handle case where API returns success: false
        toast.error(res.data.message || "Logout failed");
      }
    } catch (error) {
      console.log("Logout error:", error);
      
      // Handle different types of errors
      if (error.response) {
        // Server responded with error status
        toast.error(error.response.data?.message || "Server error occurred");
      } else if (error.request) {
        // Request was made but no response received
        toast.error("Network error - please check your connection");
      } else {
        // Something else happened
        toast.error("An unexpected error occurred");
      }
      
      // Optionally, still clear user data and redirect on any error
      // This ensures user is logged out even if server request fails
      dispatch(setUser(null));
      navigate("/");
    }
  }

  return (
    <nav className="bg-[#840029] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-serif font-bold">University of Louisiana at Monroe</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-[#fdb913]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="text-white hover:text-[#fdb913]">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/browse" className="text-white hover:text-[#fdb913]">
              Browse
            </Link>
          </li>
        </ul>
        {
          !user ? (
            <div className="text-white flex items-center space-x-4 gap-2">
              <Link to='/login'>
                <Button variant="outline" className="border-white text-white hover:bg-[#fdb913]">
                  Login
                </Button>
              </Link>
              <Link to='/signup'>
                <Button variant="outline" className="border-white text-white hover:bg-[#fdb913]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="w-8 h-8 cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePicture}
                    alt="@shadcn"
                    className="rounded-2xl"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-white text-gray-800">
                <div className="flex items-center gap-4 p-4 bg-[#fdb913]">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={user?.profile?.profilePicture}
                      alt="@shadcn"
                      className="rounded-2xl"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-serif font-semibold">{user.fullName}</h4>
                  </div>
                </div>
                <div className="px-4 pb-4 flex flex-col text-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                    <User2 />
                    <Link to='/profile'>
                      <Button variant="link" className="text-[#840029] hover:text-[#fdb913]">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <LogOut />
                    <Button 
                      onClick={logOutHandler} 
                      variant="link" 
                      className="text-[#840029] hover:text-[#fdb913]"
                    >
                      Log Out
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;