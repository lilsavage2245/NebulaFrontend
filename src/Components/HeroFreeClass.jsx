// src/Components/HeroFreeClass.jsx

import React from 'react';
import HeroImage from '../assets/Hero.png.png';

export default function HeroFreeClass() {
  return (
    <section className="w-full bg-gradient-to-r from-black to-white px-6 md:px-14 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-[100px] min-h-[720px]">
      {/* Left Side Text */}
      <div className="flex flex-col items-start gap-8 w-full md:w-[600px] text-white">
        <h1 className="text-[32px] md:text-[48px] font-bold leading-[48px] md:leading-[72px]">
          Get a Taste of The Nebula Experience For Free
        </h1>
        <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px]">
          Join our upcoming live or on-demand introductory and interactive session. No payment or commitment required.
        </p>
        <button className="bg-[#FFC925] text-[#4A2B29] px-6 py-2 rounded-full shadow-md text-sm md:text-base font-medium">
          Reserve my spot
        </button>
      </div>

      {/* Right Side Image */}
      <div className="w-full md:w-[682px] h-[400px] md:h-[550px] rounded-[24px] overflow-hidden flex-shrink-0">
        <img
          src={HeroImage}
          alt="Nebula Free Class Hero"
          className="w-full h-[550px] object-cover"
        />
      </div>
    </section>
  );
}
