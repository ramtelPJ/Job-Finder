import React from "react";
import JobCards from "./JobCards";

const randomJobs=[1,2,3,4,5,6,7,8];
function LatestJob() {
    
return (
    <div className="max-w-7xl mx-auto my-20 text-center">
            <h1 className="text-4xl font-bold"><span className="text-[#840029]">Latest</span> <span className="text-[#FDB913]"> Job Openings</span> </h1>
            <div className="grid grid-cols-3 gap-4 my-5">
            {
                    randomJobs.slice(0,6).map((item, i) => <JobCards key={i} item={item} />)
            }
            </div>
            
    </div>
)
}

export default LatestJob