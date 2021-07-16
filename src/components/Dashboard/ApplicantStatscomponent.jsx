import React from "react";
import Applicant from '../../assets/Applicants.png'
const ApplicantStats =() =>{
    return(
        <div class=" divide-gray-200 rounded-xl shadow-md overflow-hidden  w-11/12 ml-16  z-30  hover:shadow-2xl">
  <div class="md:flex w-full">
    <div class="md:flex-shrink-0 ">
      <img class="h-48 w-full object-cover md:w-48" src={Applicant} alt="Man looking at item at a store"/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
    );
}

export default ApplicantStats;