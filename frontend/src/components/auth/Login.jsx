import React, { use } from 'react'
import Navbar from '../shared/navbar'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { RadioGroup, } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { END_USER_ENDPOINT } from "@/utils/constant";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../redux/authSlice'
import { Loader2 } from 'lucide-react'
import store from '../../redux/store'
function Login() {
  
  const[input,setInput]=useState({
    email: '',
    password: '',
    role: '',
    profile: null,
  })
  const {Loading}=useSelector(store=>store.auth)
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleInputChange = (e) => {
    setInput({

      ...input,
      [e.target.name]: e.target.value});
  };

  const submitHandler = async (e) => {
      e.preventDefault();
      
     
      try {
        dispatch(setLoading(true));
        const res=await axios.post(`${END_USER_ENDPOINT}/login`,input,{
          headers:{
            "Content-Type": "application/json"},
          withCredentials: true,
        });
  if(res.data.success){
    navigate('/')
    toast.success(res.data.message);
  }
      } catch (error) {
        console.error("Error during signup:", error);
      }
      finally{
        dispatch(setLoading(false));
      }
    };
  
  
  return (
    <div>
      <Navbar/>
      <div className='flex justify-center items-center min-h-screen bg-gray-100'> 
        <form onSubmit={submitHandler} className='bg-white p-8 rounded-lg shadow-lg w-96 my-10'>
          <h1 className='font-bold text-2xl mb-6 text-center text-gray-700'>Login</h1>
          
          <div className='mb-4'>
            <Label className='block text-gray-600 mb-2'>Email</Label>
            <Input type="email" value={input.email} onChange={handleInputChange} name="email" placeholder='xyz@gmail.com' className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' />
          </div>
          
          <div className='mb-4'>
            <Label className='block text-gray-600 mb-2'>Password</Label>
            <Input type="password" value={input.password} onChange={handleInputChange} name="password" placeholder='Enter the password' className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' />
          </div>
          <div className='flex justify-between items-center mb-6'>
            <RadioGroup className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  name='role'
                  value="recruiter"
                  checked={input.role==='recruiter'}
                  className="cursor-pointer"
                  id="r1"
                  onChange={(e) => setInput({ ...input, role: e.target.value })}
                />
                <Label htmlFor="r1" className='text-gray-600'>Recruiter</Label>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  name='role'
                  value="user"
                  checked={input.role==='user'}
                  className="cursor-pointer"
                  id="r2"
                  onChange={(e) => setInput({ ...input, role: e.target.value })}
                />
                <Label htmlFor="r2" className='text-gray-600'>User</Label>
              </div>
            </RadioGroup>
          </div>
          <div className='flex flex-col items-center mb-6'>
            <Label className='block text-gray-600 mb-2'>Profile</Label>
            <Input
              accept="image/*"
              type="file"
              className="cursor-pointer border rounded-md p-2"
            />
          </div>
{Loading ? (
  <Button className='w-full py-2'>
    <Loader2 className='mr-2 h-4 w-4 animate-spin' />Please Wait
  </Button>
) : (
  <Button type='submit' className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Login</Button>
)}
          <span>Don't have an account?<Link to='/signup' className='text-blue-500'>Signup</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login