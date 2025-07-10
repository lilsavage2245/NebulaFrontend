import React from 'react';

//import { ChevronLeft, ChevronRight } from 'lucide-react';
//import scratchImg from '../assets/apple.png'; // Use actual paths
//import codeImg from '../assets/Outcome1.png';
//import idnImg from '../assets/Others2.png';
import { ArrowRight } from 'lucide-react';
import EntryCard from './EntryCard';        

const EntryRequirementscomponent = () => {
  return (
    <section className="flex flex-col items-start px-2 md:px-4 py-8 gap-10 border-y-[5px] border-[#77777733] w-full max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-[40px] font-bold text-black">Entry Requirements</h2>

     {/* Description */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[32px]">
         <h2 className=  "text-black font-bold text-lg leading-9">
            Description
         </h2>
      <h3 className=  "text-black font-semibold text-lg leading-9">
       At Nebula Academy, we believe every child deserves every chance to explore the world of technology. Our Pre-Academy programs are designed to be access ensuring that learners are set up for success.
        </h3>
        <h3 className=  "text-black font-normal text-lg leading-9">
            Below are the typical entry requirements for year 1: Introduction and Exploration. If your are unsure whether this program is the right fit for your child, feel free to reach out using the enquiry form at the bottom of this page - we are always happy to help!
        </h3>
         
      </div>

       <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[32px]">
            <EntryCard />
         </div>


     {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
            Device & Access Requirement
        </h2>
        <p>To ensure the best learning experience, each learners will need:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>A Laptop or a Desktop (Windows, Mac, or Chromebook preferred).</li>
          <li>Stable internet connection.</li>
          <li>Access to a modern web browser (Chrome, Firefox, or Safari).</li>
          <li>A quiet workspace for learning and completing tasks.</li>
        </ul>
      </div>

      {/* Recommended For */}
      <div className="bg-[#77777733] px-6 py-4 w-full text-black font-semibold text-lg leading-9">
        <p className="text-start text-[24px] font-bold">
           Parental Support</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>While the program is designed for independent engagement, we recommend light supervision from a parent or guardian, especially during live session or project submission weeks.</li>
          <li>Learners should be able to stay focused for 20 to 30 minutes at a time without constant redirection.</li>
          
        </ul>
      </div>

       {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
           Not Quite Ready ?
        </h2>
        <p>If your child is still under 10 or you’re unsure about readiness:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Try our free introductory class to evaluate fit.</li>
          <li>OR, wait until the next enrollment cycle and build digital habits with our pre-learning guides.</li>
        </ul>
        
           {/* Join Button */}
        <button className="flex items-center gap-2 bg-[#FFC925] px-6 py-2 rounded-full w-fit hover:bg-yellow-400 transition">
          <span className="text-[16px] font-semibold text-black font-poppins">Make an Enquiry</span>
          <ArrowRight size={18} className="text-black" />
        </button>
      </div>

      
    </section>
  );
};

export default EntryRequirementscomponent;
