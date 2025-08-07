import React from "react";
import { Badge } from "./ui/badge.jsx";
import { Button } from "./ui/button.jsx";
function JobDescription() {
  const isApplied = false;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl ">Title</h1>
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
        </div>
        {isApplied ? (
          <Button disabled className="bg-red-500 cursor-not-allowed">
            {" "}
            Already Applied
          </Button>
        ) : (
          <Button className="bg-[#840029] hover:bg-amber-800 cursor-pointer">
            Apply Now
          </Button>
        )}
      </div>
      <h1 className="text-xl border-b-2 border-b-gray-300 font-medium py-4">Job Description</h1>
      <div>
<h1 className="font-bold my-1">Role:<span className="pl-4 font-normal text-gray-800">FrontEnd Developer</span></h1>
<h1 className="font-bold my-1">Location:<span className="pl-4 font-normal text-gray-800">IT Department,ULM</span></h1>
<h1 className="font-bold my-1">Description:<span className="pl-4 font-normal text-gray-800">This is a student worker job </span></h1>
<h1 className="font-bold my-1">Experience:<span className="pl-4 font-normal text-gray-800">Sophomore Semester</span></h1>
<h1 className="font-bold my-1">Salary:<span className="pl-4 font-normal text-gray-800">$9.00/hr</span></h1>
<h1 className="font-bold my-1">Posted Date:<span className="pl-4 font-normal text-gray-800">08/05/2025</span></h1>

      </div>
    </div>
  );
}

export default JobDescription;
