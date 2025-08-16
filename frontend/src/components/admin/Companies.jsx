import React, { use } from 'react'
import Navbar from '../shared/navbar'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
function Companies() {
    const navigate=useNavigate();
return (
    
    <div>
        <Navbar />
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between my-5'>
                <Input
                    className='w-fit'
                    placeholder='Filter by name'
                />
                <Button onClick={()=>navigate("/admin/companies/create")} className='bg-[#840029] text-black mt-2'>New Company</Button>
            </div>
            <CompaniesTable />
        </div>
    </div>
)
}

export default Companies