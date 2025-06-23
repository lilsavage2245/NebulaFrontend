// src/Pages/apply/pre-academy/BeginnerOthers.jsx

import React from 'react';
import Others1 from '../assets/Option1.png';
import Others2 from '../assets/Others2.png';

export default function BeginnerOthers() {
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
              Who It’s For:
            </h3>
            <p className="text-[16px] leading-6 text-black">
              - New comers to tech.<br/>
              - Career Changers.<br/>
              - Post secondary students.<br/>
              - Anyone ready to begin a serious journey into software and digital system.
            </p>
          </div>
        </div>

        {/* Placement Assessment */}
        <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-10 items-center shadow-[0_16px_24px_2px_rgba(0,0,0,0.25)] {/* Image Section */} bg-white p-4 md:p-6">
          <img
            src= {Others2}
            alt="Placement Assessment" 
            className="w-full md:w-[364px] h-[272px] object-cover"
          />
          <div className="flex flex-col gap-6 md:w-[820px]">
            <h3 className="text-[24px] md:text-[36px] font-medium text-black">
              Why You’ll Love It:
            </h3>
            <p className="text-[16px] leading-6 text-black">
              - We don’t expect you to know anything.<br/>
              - You will make cool things that you .............<br/>
              - You will learn how to work like ....................<br/>
              - You will be ready ......................(16+)
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center shadow-[0_16px_24px_2px_rgba(0,0,0,0.25)] bg-white p-4 md:p-6">
          <img
            src={Others1}  
            alt="What Students Need to Bring" 
            className="w-full md:w-[380px] h-[272px] object-cover"
          />
          <div className="flex flex-col gap-6 md:w-[820px]">
            <h3 className="text-[24px] md:text-[35px] font-medium text-black">
              What you’ll Do:
            </h3>
            <p className="text-[16px] leading-6 text-black">
              - Learn Python and Javascript.<br/>
              - Make your own website.<br/>
              - Work with database.<br/>
              - Try out mobile app.<br/>
              - Build one big final project...........
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
