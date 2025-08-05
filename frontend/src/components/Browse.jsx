import React from 'react'
import Navbar from "./shared/navbar.jsx";
import SingleJob from './SingleJob.jsx';

const randomJobs=[1,2,3]
function Browse() {
  return (
   <div>
    <Navbar/>
    <div className='max-w-7xl mx-auto my-10'>
      <h1 className='font-bold text-xl my-10'>Search Results: {randomJobs.length}</h1>
      <div className='grid grid-cols-3 gap-4 '>
      {
        randomJobs.map((item,index)=>{
          return(<SingleJob/>)
        })
      }
      </div>
      
    </div>
   </div>
    
  )
}

export default Browse