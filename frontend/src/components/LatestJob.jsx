import React from "react";
import JobCards from "./JobCards";
import { useSelector } from "react-redux";
import { useStore } from "react-redux";

function LatestJob() {
    const{allJobs}=useSelector(store=>store.job);
return (
    <div className="max-w-7xl mx-auto my-20 text-center">
        
            <h1 className="text-4xl font-bold"><span className="text-[#840029]">Latest</span> <span className="text-[#FDB913]"> Job Openings</span> </h1>
            <div className="grid grid-cols-3 gap-4 my-5">
            {
                    allJobs.slice(0,6).map((job) => <JobCards key={job._id} job={job} />)
            }
            </div>
            
    </div>
)
}

export default LatestJob;