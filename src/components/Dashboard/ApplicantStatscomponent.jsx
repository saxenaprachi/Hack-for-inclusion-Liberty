import React from "react";
import graph from '../../assets/graph.png'
const ApplicantStats =() =>{
    return(
       <div class=" divide-gray-200 rounded-xl shadow-md overflow-hidden  w-11/12 ml-16  z-30  hover:shadow-2xl">
  <div class=" overflow-hidden rounded-lg shadow-lg sm:flex w-12/12  z-30">
  <div class="w-full sm:w-1/3">
    <img class="object-cover w-10/12 h-72" src={graph} alt="Flower and sky"/>
  </div>
  <div class="flex-1 px-6 py-4">
    <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">Our Company Stats</h4>
    <p class="leading-normal text-gray-700">Unconscious gender bias is defined as unintentional and automatic mental associations based on
gender, stemming from traditions, norms, values, culture and/or experience. Automatic associations
feed into decision-making, enabling a quick assessment of an individual according to gender and gender
stereotypes. Organizations can take steps to counteract gender biases and other types of biases, thus the
presence of unconscious gender bias in an individual does not automatically translate into biases in the
workplace.</p>
  </div>
</div>
</div>
    );
}

export default ApplicantStats;
