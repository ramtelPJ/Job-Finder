import React, { use } from 'react'
import Navbar from '../shared/navbar'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { RadioGroup, } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Login() {
  const[iinput,setInput]=useState({
    email: '',
    password: '',
    phoneNumber:'',
    fullName:'',
    role: 'user',
    profile: null
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,[e.target.name]: e.target.value
    })
  }
  const handleFileChange = (e) =>{
    setInput({...input,file:e.target.files?.[0]})
  }
  return (
    <div>
      <Navbar/>
      <div className='flex justify-center items-center min-h-screen bg-gray-100'> 
        <form action="" className='bg-white p-8 rounded-lg shadow-lg w-96 my-10'>
          <h1 className='font-bold text-2xl mb-6 text-center text-gray-700'>Login</h1>
          
          <div className='mb-4'>
            <Label className='block text-gray-600 mb-2'>Email</Label>
            <Input type="email" placeholder='xyz@gmail.com' className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' />
          </div>
          
          <div className='mb-4'>
            <Label className='block text-gray-600 mb-2'>Password</Label>
            <Input type="password" placeholder='Enter the password' className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' />
          </div>
          <div className='flex justify-between items-center mb-6'>
            <RadioGroup className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <Input
                  type="radio"
                  name='role'
                  value="recruiter"
                  className="cursor-pointer"
                  id="r1"
                />
                <Label htmlFor="r1" className='text-gray-600'>Recruiter</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Input
                  type="radio"
                  name='role'
                  value="user"
                  className="cursor-pointer"
                  id="r2"
                  defaultChecked
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
          <Button type='submit' className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Login</Button>
          <span>Don't have an account?<Link to='/signup' className='text-blue-500'>Signup</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login