import React from "react";
import { Button } from "./ui/button.jsx";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge.jsx";
import { useNavigate } from "react-router-dom";
function SingleJob({job}) {
  const navigate = useNavigate();
  const daysAgo=(mongodbtime)=>{
    const createdAt=new Date(mongodbtime);
    const currentDate=new Date();
    const timeDiff=currentDate.getTime()-createdAt.getTime();
    const daysDiff=Math.floor(timeDiff/(1000*3600*24));
    return daysDiff;
  }
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p>{daysAgo(job?.createdAt)===0 ? "Today":`${daysAgo(job?.createdAt)} days ago`}</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-2" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://png.pngtree.com/png-vector/20190304/ourmid/pngtree-growth-business-company-logo-png-image_728232.jpg" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-bold text-lg ">{job?.company?.name}</h1>
          <p className="text-sm">United States</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">
          {job?.description}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge
          className={"text-[#840029] font-bold border-[#840029]"}
          variant="outline"
        >
          12 Positions
        </Badge>
        <Badge
          className={"text-[#fdb913] font-bold border-[#fdb913]"}
          variant="outline"
        >
          Part-Time
        </Badge>
        <Badge
          className={"text-[#840029] font-bold border-[#840029]"}
          variant="outline"
        >
          $7.25/hr
        </Badge>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Button onClick={()=> navigate(`/description/${job?._id}`)} variant='outline'>Details</Button>
        <Button className='bg-[#840029] cursor-pointer'>Save Jobs</Button>
      </div>
    </div>
  );
}

export default SingleJob;
