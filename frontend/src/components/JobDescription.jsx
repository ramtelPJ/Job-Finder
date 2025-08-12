import React, { useEffect } from "react";
import { Badge } from "./ui/badge.jsx";
import { Button } from "./ui/button.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_ENDPOINT, JOB_ENDPOINT } from "../utils/constant.js";
import { setSingleJob } from "../redux/jobSlice.js";
import { useDispatch, useSelector } from "react-redux";
import {toast} from 'sonner'
import { useState } from "react";
function JobDescription() {
  const {singleJob}=useSelector(store=>store.job);
  const {user}=useSelector(store=>store.auth);
  const isInitiallyApplied = singleJob?.applications?.some(application=> application.applicant === user?._id)||false;;
  const [isApplied, setIsApplied] = useState(isInitiallyApplied);
  const params = useParams();
  const jobId=params.id;
  const dispatch = useDispatch();
  const applyJobHandler=async()=>{
    try {
      const res=await axios.post(`${APPLICATION_ENDPOINT}/apply/${jobId}`,{withCredentials:true});
      //console.log(res.data);
      if(res.data.success){
        setIsApplied(true);
        const updatedSingleJob= {...singleJob, applications: [...singleJob.applications, { applicant: user?._id }]};
        dispatch(setSingleJob(updatedSingleJob));
        toast.success("Job Applied Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while applying for the job");
    }
  }
  useEffect(()=>{
    const fetchSingleJob=async()=>{
        try {
            const res=await axios.get(`${JOB_ENDPOINT}/get/${jobId}`,{withCredentials:true});
            if(res.data.success){
                dispatch(setSingleJob(res.data.job))
                setIsApplied(res.data.job.applications.some(application=> application.applicant === user?._id));
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchSingleJob();
  },[jobId,dispatch,user?._id])

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl ">{singleJob?.title}</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge
              className={"text-[#840029] font-bold border-[#840029]"}
              variant="outline"
            >
              {singleJob?.position}
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
        

        <Button
                onClick={isApplied ? null : applyJobHandler}
                    disabled={isApplied}
                    className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
      </div>
      <h1 className="text-xl border-b-2 border-b-gray-300 font-medium py-4">Job Description</h1>
      <div>
<h1 className="font-bold my-1">Role:<span className="pl-4 font-normal text-gray-800">{singleJob?.title}</span></h1>
<h1 className="font-bold my-1">Location:<span className="pl-4 font-normal text-gray-800">{singleJob?.location}</span></h1>
<h1 className="font-bold my-1">Description:<span className="pl-4 font-normal text-gray-800">{singleJob?.description} </span></h1>
<h1 className="font-bold my-1">Experience:<span className="pl-4 font-normal text-gray-800">{singleJob?.experienceLevel}</span></h1>
<h1 className="font-bold my-1">Salary:<span className="pl-4 font-normal text-gray-800">$9.00/hr</span></h1>
<h1 className="font-bold my-1">Total Applicants:<span className="pl-4 font-normal text-gray-800">{singleJob?.applications?.length}</span></h1>
<h1 className="font-bold my-1">Posted Date:<span className="pl-4 font-normal text-gray-800">{singleJob?.createdAt.split("T")[0]}</span></h1>

      </div>
    </div>
  );
}

export default JobDescription;
