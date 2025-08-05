import React from 'react'

import { Table, TableCaption,TableHeader,TableRow, TableBody, TableHead, TableCell } from "./ui/table.jsx";
function AppliedJobTable() {
return (
    <div>
            <Table>
                    <TableCaption>Applied Jobs List</TableCaption>
                    <TableHeader>
                            <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Job Role</TableHead>
                                    <TableHead>Company</TableHead>
                                    <TableHead className='text-right '>Status</TableHead>
                            </TableRow>
                    </TableHeader>
                    <TableBody>
                            {
                                    [1,2,3,4].map((item,i) => (
                                            <TableRow key={i}>
                                                    <TableCell>02/14/2003</TableCell>
                                                    <TableCell>Software Engineer</TableCell>
                                                    <TableCell>Company Name</TableCell>
                                                    <TableCell className='text-right'>
                                                            <span className="font-bold bg-green-100 text-green-800 px-3 py-1 rounded">
                                                                    Applied
                                                            </span>
                                                    </TableCell>   
                                            </TableRow>
                                    ))
                            }
                    </TableBody>
            </Table>
    </div>
)
}

export default AppliedJobTable