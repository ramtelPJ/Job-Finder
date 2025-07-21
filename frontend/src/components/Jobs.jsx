import React from "react";
import Navbar from "./shared/navbar.jsx";
import FilterCard from "./FilterCard.jsx";
import SingleJob from "./SingleJob.jsx";
const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Jobs() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>

          {
          jobsArray.length <= 0 ? 
            <span>No Jobs Found</span>
           : (
            <div className="flex-1 h[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {
                jobsArray.map((jobItem, index) => (
                  <>
                    <div>
                      <SingleJob />
                    </div>
                    
                  </>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
