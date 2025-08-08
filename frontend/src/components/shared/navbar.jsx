import React, { use } from "react";
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
const navigate=useNavigate();
  const logOutHandler = async() => {
    try {
      const res=await axios.get(`${END_USER_ENDPOINT}/logout`,{withCredentials:true});
      if(res.data.success){
        dispatch(setUser(null));
        navigate("/")
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
    }
  }
  return (
    <nav className="bg-[#840029] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-serif font-bold">University of Louisiana at Monroe</div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-[#fdb913]">
              Home
            </a>
          </li>
          <li>
            <a href="/jobs" className="text-white hover:text-[#fdb913]">
              Jobs
            </a>
          </li>
          <li>
            <a href="/browse" className="text-white hover:text-[#fdb913]">
              Browse
            </a>
          </li>
          
        </ul>
        {
          !user ? (
            <div className="text-white flex items-center space-x-4 gap-2">
              <Link to='/login'><Button variant="outline" className="border-white text-white hover:bg-[#fdb913]">Login</Button></Link>
              <Link to='/signup'><Button variant="outline" className="border-white text-white hover:bg-[#fdb913]">Signup</Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="w-8 h-8 cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="rounded-2xl"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-white text-gray-800">
                <div className="flex items-center gap-4 p-4 bg-[#fdb913]">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="rounded-2xl"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-serif font-medium">{user.fullname}</h4>
                  </div>
                </div>
                <div className="px-4 pb-4 flex flex-col text-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                    <User2 />
                    <Button variant="link" className="text-[#840029] hover:text-[#fdb913]"><Link to='profile'>View Profile</Link></Button>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <LogOut />
                    <Button onClick={logOutHandler} variant="link" className="text-[#840029] hover:text-[#fdb913]">Log Out</Button>
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
//dsdss
export default Navbar;
