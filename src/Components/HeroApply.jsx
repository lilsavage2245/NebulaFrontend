// HeroApply.jsx
import React from 'react';
import HeroImage from '../assets/HeroApply.png';

const HeroApply = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-8 bg-[rgba(0,128,128,0.3)] rounded-md max-w-[1296px] mx-auto mt-10 gap-8">
      {/* Left Side Text */}
      <div className="flex flex-col justify-center items-start gap-8 w-full md:w-[580px] p-4">
        <h2 className="text-[40px] leading-[48px] font-semibold text-black">
          APPLY TO NEBULA ACADEMY
        </h2>

        <div className="w-[352px] h-0 border-t-[10px] border-[#FFC925]"></div>

        <div className="w-full">
          <p className="text-[24px] leading-[29px] text-black">
            Ready to launch your tech journey? Apply now to become part of our vibrant community and start learning from industry-leading instructors. Your future in tech begins here!
          </p>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-full md:w-[672px] h-[380px] rounded-[150px] overflow-hidden flex-shrink-0">
        <img
          src={HeroImage}
          alt="Hero Apply Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroApply;
