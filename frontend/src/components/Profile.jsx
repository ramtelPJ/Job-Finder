import React from "react";
import Navbar from "./shared/navbar.jsx";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Pen, Contact, Mail } from "lucide-react";
import { Button } from "./ui/button.jsx";
import { Badge } from "./ui/badge.jsx";
import { Label } from "./ui/label.jsx";
import AppliedJobTable from "./AppliedJobTable.jsx";
import { useState } from "react";
import UpdateProfileDialog from "./UpdateProfileDialog.jsx";
import { useSelector } from "react-redux";

//const skills = ["JavaScript", "React", "Node.js", "CSS"];
const isResumeAvailable = true; // This can be a prop or state based on your application logic

function Profile() {
  const[open,setOpen]=useState(false);
  const {user}=useSelector((state)=>state.auth);
  return (
    <div className="bg-[#fff] min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-[#fff] border border-[#800000] rounded-2xl my-5 p-8 shadow-lg">
        <div className="flex justify-between">
          <div className="flex items-center gap-4 mb-5">
            <Avatar className="h-24 w-24 border-4 border-[#800000]">
              <AvatarImage
                src="https://www.ulm.edu/_resources/images/ulm-logo.png"
                className="h-24 w-24 object-cover"
                alt="ULM Logo"
              />
            </Avatar>
            <div>
              <h1 className="font-bold text-2xl text-[#800000]">{user?.fullName}</h1>
              <p className="text-[#333]">{user?.bio}</p>
            </div>
          </div>
          <Button onClick={()=>setOpen(true)} className="text-right border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-[#fff]" variant="outline">
            <Pen />
          </Button>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4 text-[#800000]">
            <Mail />
            <span className="text-black">{user?.email}</span>
          </div>
          <div className="flex items-center gap-2 mb-4 text-[#800000]">
            <Contact />
            <span className="text-black">{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-lg font-semibold text-[#800000]">Skills</h1>
          <div className="flex items-center gap-1">
            {user?.profile?.skills.map((item, i) => (
              <Badge key={i} className="bg-[#FFCC00] text-[#800000] border border-[#800000]">
                {item}
              </Badge>
            ))}
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-md font-bold mt-1.5 text-[#800000]">Resume</Label>
            {isResumeAvailable ? (
              <a
                target="blank"
                href={user?.profile?.resume}
                className="text-[#800000] hover:underline hover:text-[#FFCC00]"
              >
                {user?.profile?.resumeOriginalName || "Download Resume"}
              </a>
            ) : (
              <span className="text-red-500">Resume not available</span>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-[#fff] rounded-2xl border border-[#800000] p-6 mt-6 shadow">
        <h1 className="text-xl font-bold text-[#800000] mb-2">Applied Jobs</h1>
        <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  );
}

export default Profile;
