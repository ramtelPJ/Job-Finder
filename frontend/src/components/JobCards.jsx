
import React from "react";
import { Badge } from "@/components/ui/badge"


function JobCards({job}) {
return (
    <div className="p-5 rounded-md shadow-xl bg-white border-gray-200">
        <div>
            <h1 className="font-serif font-medium text-lg text-[#840029]">{job?.company?.name}</h1>
            <p className="text-sm text-gray-700">United States</p>
        </div>
        <div>
            <h1 className="font-serif font-bold text-lg my-2 text-black"> {job?.title}</h1>
            <p className="text-sm text-gray-800">
               {job?.description}
            </p>
        </div>
        <div className="flex items-center gap-2 mt-4">
            <Badge className={'text-[#840029] font-bold border-[#840029]'} variant="outline">{job?.position}</Badge>
            <Badge className={'text-[#fdb913] font-bold border-[#fdb913]'} variant="outline">{job?.jobType}</Badge>
            <Badge className={'text-[#840029] font-bold border-[#840029]'} variant="outline">Hourly Rate</Badge>
        </div>
    </div>
)
}

export default JobCards