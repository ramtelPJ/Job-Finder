import React, { useState } from 'react'
import Navbar from '../shared/navbar'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { RadioGroup } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { END_USER_ENDPOINT } from "@/utils/constant";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '../../redux/authSlice'
import { Loader2 } from 'lucide-react'
import store from '../../redux/store'

function Login() {
  const [input, setInput] = useState({
    email: '',
    password: '',
    role: '',
    // Removed profile field as it's not needed for login
  })
  
  const { Loading } = useSelector(store => store.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!input.email || !input.password || !input.role) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    try {
      dispatch(setLoading(true));
      
      // Only send necessary login data
      const loginData = {
        email: input.email,
        password: input.password,
        role: input.role
      };
      
      const res = await axios.post(`${END_USER_ENDPOINT}/login`, loginData, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      });
      
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate('/');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      
      // Better error handling
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else if (error.response?.status === 400) {
        toast.error('Invalid credentials or missing required fields');
      } else {
        toast.error('Login failed. Please try again.');
      }
    } finally {
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
            <Input 
              type="email" 
              value={input.email} 
              onChange={handleInputChange} 
              name="email" 
              placeholder='xyz@gmail.com' 
              className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              required 
            />
          </div>
          
          <div className='mb-4'>
            <Label className='block text-gray-600 mb-2'>Password</Label>
            <Input 
              type="password" 
              value={input.password} 
              onChange={handleInputChange} 
              name="password" 
              placeholder='Enter the password' 
              className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              required 
            />
          </div>
          
          <div className='flex justify-between items-center mb-6'>
            <RadioGroup className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  name='role'
                  value="recruiter"
                  checked={input.role === 'recruiter'}
                  className="cursor-pointer"
                  id="r1"
                  onChange={handleInputChange}
                  required
                />
                <Label htmlFor="r1" className='text-gray-600'>Recruiter</Label>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  name='role'
                  value="user"
                  checked={input.role === 'user'}
                  className="cursor-pointer"
                  id="r2"
                  onChange={handleInputChange}
                  required
                />
                <Label htmlFor="r2" className='text-gray-600'>User</Label>
              </div>
            </RadioGroup>
          </div>
          
          {/* Removed profile upload section for login */}
          
          {Loading ? (
            <Button className='w-full py-2' disabled>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              Please Wait
            </Button>
          ) : (
            <Button 
              type='submit' 
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Login
            </Button>
          )}
          
          <span className='block text-center mt-4'>
            Don't have an account? <Link to='/signup' className='text-blue-500'>Signup</Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Login