import React from 'react'

import { RadioGroup,RadioGroupItem } from './ui/radio-group.jsx';
//import { RadioGroupItem } from './ui/radio-group-item.jsx';
import { Label } from './ui/label.jsx';
const filterData=[
    {
filterType:"Location",
array:["Library","Walker Hall","Conen Hall","Hub"]
    },

    {
        filterType:"Department",
        array:["Education","Engineering","Aramark","Athletic","Jamark","Information Technology"]
    },
    {
        filterType:"Job Type",
        array:["On-Campus","Full-Time","Internship","Volunteer"]
    },
    {

        filterType:"Salary",
        array:["$0 - $20,000","$20,001 - $40,000","$40,001 - $60,000"]
    }
]
function FilterCard() {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
        <h1 className='font-bold text-lg'>Filter Jobs</h1>
        <hr className='mt-3'/>
        <RadioGroup>
    {
        filterData.map((data, index) => (
            <div key={index}>
                <h1 className='font-bold text-lg'>{data.filterType}</h1>
                {
                   data.array.map((item,index)=>{
                    return(
                        <div className='flex items-center space-x-2 my-2'>
                            <RadioGroupItem value={item}/>
                            <Label>{item}</Label>
                        </div>
                    )
                   }) 
                }
            </div>
        ))
    }
        </RadioGroup>
    </div>
  )
}

export default FilterCard