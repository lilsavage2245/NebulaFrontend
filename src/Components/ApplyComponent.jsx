import React from 'react';

import { ArrowRight } from 'lucide-react';

const ApplyComponent = () => {
  return (
    <section className="flex flex-col items-start px-2 md:px-4 py-8 gap-10 border-y-[5px] border-[#77777733] w-full max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-[40px] font-bold text-black">Apply</h2>

      {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
            Ready to Get Started?
        </h2>
        <p>Before applying ensure you've:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Reviewed the Course Overview and Curriculum.</li>
          <li>Checked the Entry Requirements.</li>
          <li>Explored our Fees and payment options.</li>
          <li>Read about Career Prospects and Support Services.</li>
        </ul>
      </div>


      {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
           How to Apply
        </h2>
        <p>When you are ready, click the button below to begin your application. It's quick and easy. Our team is here to help if you need support:</p>
       <p>
        <h3 className= "text-black font-semibold leading-9">
            Note:
        </h3>
        This program is designed for learners aged 10 and above. Parental or guidian approval is required during application.</p>
        
           {/* Join Button */}
        <button className="flex items-center gap-2 bg-[#FFC925] px-6 py-2 rounded-full w-fit hover:bg-yellow-400 transition">
          <span className="text-[16px] font-semibold text-black font-poppins">Apply Now</span>
          <ArrowRight size={18} className="text-black" />
        </button>
      </div>

      {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
           Not Ready Yet?
        </h2>
        
       <p>
        <h3 className= "text-black font-semibold leading-9">
            No Problem!
        </h3>
        You can register your interests and we will send you updates, reminders, and helpful tips to guide your decision.</p>
        
           {/* Join Button */}
        <button className="flex items-center gap-2 bg-[#FFC925] px-6 py-2 rounded-full w-fit hover:bg-yellow-400 transition">
          <span className="text-[16px] font-semibold text-black font-poppins">Register Interest</span>
          <ArrowRight size={18} className="text-black" />
        </button>
      </div>

     

      

     
    </section>
  );
};

export default ApplyComponent;
