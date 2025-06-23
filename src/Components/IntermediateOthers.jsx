// src/Pages/apply/pre-academy/IntermediateOthers.jsx

import React from 'react';
import Others1 from '../assets/Option1.png';
import Others2 from '../assets/Others2.png';

export default function IntermediateOthers() {
  return (
    <section className="w-full py-16 px-6 md:px-24 bg-white flex flex-col items-center gap-12">
      <h2 className="text-[36px] md:text-[56px] font-bold text-black text-center">
        Other Things You May Need To Know
      </h2>
 
      <div className="flex flex-col gap-6 w-full max-w-[1240px]">
        {/* What Students Need to Bring */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center shadow-[0_16px_24px_2px_rgba(0,0,0,0.25)] bg-white p-4 md:p-6">
          <img
            src={Others1}  
            alt="What Students Need to Bring" 
            className="w-full md:w-[380px] h-[272px] object-cover"
          />
          <div className="flex flex-col gap-6 md:w-[820px]">
            <h3 className="text-[24px] md:text-[35px] font-medium text-black">
              What Students Need to Bring (Virtually or Physically):
            </h3>
            <p className="text-[16px] leading-6 text-black">
              - Curiosity and creativity<br/>
              - A notebook or digital document to track progress<br/>
              - Willingness to work on projects and share ideas<br/>
              - For hardware sessions: optional robotics kits (Micro:bit or Arduino can be loaned or purchased)
            </p>
          </div>
        </div>

        {/* Placement Assessment */}
        <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-10 items-end shadow-[0_16px_24px_2px_rgba(0,0,0,0.25)] {/* Image Section */} bg-white p-4 md:p-6">
          <img
            src= {Others2}
            alt="Placement Assessment" 
            className="w-full md:w-[364px] h-[308px] object-cover"
          />
          <div className="flex flex-col gap-6 md:w-[820px]">
            <h3 className="text-[24px] md:text-[36px] font-medium text-black">
              Placement Assessment (Optional for Age 13+):
            </h3>
            <p className="text-[16px] leading-6 text-black">
              - Students aged 13 and above may take a short placement quiz to determine whether to:<br/>
              - Start at the beginning of Pre-Academy<br/>
              - Join mid-program (e.g., Year 3 or 4) if they already have coding/robotics experience<br/>
              - Graduate early into the Beginner Program (16+)
            </p>
            <button className="w-fit bg-[#FFC925] text-[#4A2B29] px-6 py-2 rounded-full shadow-xl text-[14px] font-medium">
              Take Quiz
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
