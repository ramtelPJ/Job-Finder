import React, { useEffect } from 'react'
import { JOB_ENDPOINT } from '../utils/constant';
import { setAllJobs } from '../redux/jobSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';  
function useGetAllJobs() {
    const dispatch = useDispatch();
  useEffect(()=>{
    const fetchAllJobs=async()=>{
        try {
            const res=await axios.get(`${JOB_ENDPOINT}/get`,{withCredentials:true});
            if(res.data.success){
                dispatch(setAllJobs(res.data.job))
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchAllJobs();
  },[])
}

export default useGetAllJobs