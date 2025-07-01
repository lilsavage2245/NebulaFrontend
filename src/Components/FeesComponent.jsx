import React from 'react';
//import { ChevronLeft, ChevronRight } from 'lucide-react';
//import scratchImg from '../assets/apple.png'; // Use actual paths
//import codeImg from '../assets/Outcome1.png';
//import idnImg from '../assets/Others2.png';

const FeesComponent = () => {
  return (
    <section className="flex flex-col items-start px-2 md:px-4 py-8 gap-10 border-y-[5px] border-[#77777733] w-full max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-[40px] font-bold text-black">Fees and Funding</h2>
      <p>The tuition fee for 2025 Pre-Academy Program is calculated for each academic year i.e each level</p>
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-[200px] gap-[24px]">

        <p className="text-[28px] font-bold">£678</p>
        <p className="text-lg font-normal">2025 Annual Fee</p>
      </div>
        

        {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
            What This Covers
        </h2>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Full access to year 1 modules(Digital literacy, Scratch, STEM, Creative Media).</li>
          <li>Live and recorded class sessions.</li>
          <li>Access to digital tools(Scratch, Canva, Storyboard Platforms).</li>
          <li>Personal mentor support for project feedback.</li>
          <li>End-of-year certificate and badge</li>
          <li>Access to optional extra-curricular challenges and student community.</li>
        </ul>
      </div>        

      {/* Description */}
      <div className="bg-[#77777733] px-6 py-4 w-full text-black font-normal leading-9">
      <h3 className="text-[24px] font-bold text-black"> Scholarships and Financial Aids:</h3>
      
      <p>We believe every child deserve access to quality tech education. Limited scholarships are available based on need, talent, or geographic location.</p>
      <p>For more information on Fees and Funding visit here;(......,.)</p>
      </div>

     
    </section>
  );
};

export default FeesComponent;
