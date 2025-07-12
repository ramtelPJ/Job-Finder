import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Link } from "react-router-dom";
import {User2,LogOut} from "lucide-react"; // Assuming you have lucide-react installed for icons
// Assuming Button is a custom or shared UI component
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const user=false;
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Job Portal</div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/jobs" className="text-white hover:text-gray-300">
              Jobs
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
{
    !user ?(
        <div className="text-white flex items-center space-x-4 gap-2">
            <Button variant="outline">Login</Button> 
            <Button variant="outline">Signup</Button> 
        </div>
    ):(
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
          <PopoverContent className="w-80">
            <div className="flex items-center gap-4 p-4 bg-amber-50">
              <Avatar className="w-10 h-10">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  className="rounded-2xl"
                />
              </Avatar>
              <div>
                <h4 className="font-medium">Prajwol Ramtel</h4>
              </div>
            </div>
            <div className="px-4 pb-4 flex flex-col text-gray-600">
              <div className="flex items-center gap-2 mb-2">
               <User2/>
                <Button variant="link">View Profile</Button>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <LogOut/>
                <Button variant="link">Log Out </Button>
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
