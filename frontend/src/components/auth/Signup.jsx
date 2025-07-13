import React from 'react'
import Navbar from '../shared/navbar'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
function Signup() {
  const handleInputChange = (e) => {
    setInput({
      ...input,[e.target.name]: e.target.value
    })
  }
  const handleFileChange = (e) =>{
    setInput({...input,file:e.target.files?.[0]})
  }
  const submitHandler = async(e) => {
    e.preventDefault();
    console.log(input)
  }
  return (
    <div>
      <Navbar/>
      <div className='flex justify-center items-center min-h-screen bg-gray-100'> 
        <form onSubmit={submitHandler} className='bg-white p-8 rounded-lg shadow-lg w-96 my-10'>
          <h1 className='font-bold text-2xl mb-6 text-center text-gray-700'>Sign Up</h1>
          <div className='mb-4'>
            <Label className='block text-gray-600 mb-2'>Full Name</Label>
            <Input type="text" value={input.fullname} name="fullname" onChange={handleInputChange} placeholder='Enter your fullname' className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' />
          </div>
          <div className='mb-4'>
            <Label className='block text-gray-600 mb-2'>Email</Label>
            <Input type="email" value={input.email} name="email" onChange={handleInputChange} placeholder='xyz@gmail.com' className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' />
          </div>
          <div className='mb-4'>
            <Label className='block text-gray-600 mb-2'>Phone Number</Label>
            <Input type="number" value={input.phoneNumber} name="phoneNumber" onChange={handleInputChange}placeholder='123-456-789' className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' />
          </div>
          <div className='mb-4'>
            <Label className='block text-gray-600 mb-2'>Password</Label>
            <Input type="password" value={input.password} name="password" onChange={handleInputChange} placeholder='Enter the password' className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' />
          </div>
          <div className='flex justify-between items-center mb-6'>
            <RadioGroup className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <Input
                  type="radio"
                  name='role'
                  value="recruiter"
                  checked={input.role === 'recruiter'}
                  onChange={handleInputChange}
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
                  checked={input.role === 'user'}
                  onChange={handleInputChange}
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
          <Button type='submit' className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Signup</Button>
          <span>Already have an account?<Link to='/login' className='text-blue-500'>Login</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Signup