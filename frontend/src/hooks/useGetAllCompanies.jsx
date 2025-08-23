import React, { useEffect } from 'react'
import { COMPANY_ENDPOINT } from '../utils/constant';
import axios from 'axios';
import { useDispatch } from 'react-redux';  
import { setCompanies } from '../redux/companySlice';
function useGetAllCompanies() {
    const dispatch = useDispatch();
  useEffect(()=>{
    const fetchCompanies=async()=>{
        try {
            const res=await axios.get(`${COMPANY_ENDPOINT}/get`,{withCredentials:true});
            if(res.data.success){
                dispatch(setCompanies(res.data.companies))
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchCompanies();
  },[])
}

export default useGetAllCompanies