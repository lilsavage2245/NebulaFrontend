import React from 'react';
import heroImage from '../assets/Hero.png.png'; // adjust based on your actual path
//import { Button } from '@/components/ui/button'; // optional if you use a reusable Button component

const HeroPreAcademy2 = () => {
  return (
    <section className="w-full h-[650px] bg-gradient-to-b from-black via-[#666666CC] to-[#666666CC] py-[173px] px-[120px] flex flex-col lg:flex-row items-center justify-between gap-[72px] min-h-[650px]">
      {/* Left Text Content */}
      <div className="flex flex-col items-start gap-[48px] max-w-[750px]">
        {/* Title */}
        <h1 className="text-white text-[48px] leading-[58px] font-bold">
          Pre-Academy Courses
        </h1>

        {/* Description */}
        <p className="text-white text-[16px] leading-[19px] font-medium drop-shadow-md max-w-[482px]">
          A structured journey from coding curiosity to expert readiness designed for ages 10+
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-[48px] sm:gap-[180px]">
          {/* Apply Button */}
          <button className="bg-[#FFC925] text-[#4A2B29] font-poppins text-[14px] px-6 py-[10px] shadow-[0_16px_24px_2px_rgba(0,0,0,0.25)] rounded-md">
            Apply
          </button>

          {/* Free Class Button */}
          <button className="border border-white text-white font-poppins text-[14px] px-6 py-[10px] rounded-md">
            Take a Free Class
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-[500px] h-[500px]">
        <img
          src={heroImage}
          alt="Pre-Academy Hero"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default HeroPreAcademy2;
