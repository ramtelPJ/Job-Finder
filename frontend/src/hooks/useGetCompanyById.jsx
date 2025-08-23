import React, { useEffect } from 'react'
import { COMPANY_ENDPOINT } from '../utils/constant';

import axios from 'axios';
import { useDispatch } from 'react-redux';  
import { setSingleCompany } from '../redux/companySlice';
function useGetCompanyById(companyId) {
    const dispatch = useDispatch();
  useEffect(()=>{
    const fetchSingleCompany=async()=>{
        try {
            const res=await axios.get(`${COMPANY_ENDPOINT}/get/${companyId}`,{withCredentials:true});
            if(res.data.success){
                dispatch(setSingleCompany(res.data.company))
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchSingleCompany();
  },[companyId,dispatch])
}

export default useGetCompanyById