import React from "react";
import {Button} from './ui/button';
import { Search } from "lucide-react";
// To enable autocomplete, ensure you have a proper development environment set up.
// For example, install the necessary dependencies and configure your editor.

const HeroSection = () => {
    return (
        <div className="text-center bg-white text-[#1a1a1a]">
            <div className="flex flex-col gap-4 my-10">
                <span className="mx-auto px-4 py-2 my-4 rounded-full bg-[#FDB913] text-[#1a1a1a] font-medium">
                    Where you can find the best job....
                </span>
                <h1 className="text-5xl font-bold text-[#840029] font-serif">
                    Search, Apply & <br /> Get Your <span className="text-[#FDB913]">Dream Jobs</span>
                </h1>
                <p className="font-sans">
                    Your dream job is out there. We help you get closer with smarter search and instant alerts
                </p>
                <div className="flex w-[40%] shadow-lg border border-gray-300 pl-3 rounded-full items-center mx-auto gap-4">
                    <input
                        type="text"
                        placeholder="Find your Dream Jobs"
                        className="outline-none border-none w-full py-2 font-sans"
                    />
                    <Button className="bg-[#840029] text-white px-4 py-2 rounded-full hover:bg-[#FDB913] transition-colors">
                        <Search className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
