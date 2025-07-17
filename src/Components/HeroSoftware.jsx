// src/components/HeroSoftware.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import SoftwareImg from '../assets/SecHero.png.png'; // Replace with actual path

const HeroSoftware = () => {
  return (
    <section className="relative w-full h-[560px] px-6 sm:px-12 lg:px-20 mt-10">
      {/* Right image with text overlay */}
      <div className="absolute top-0 right-0 w-[1036px] h-full bg-cover bg-center rounded-[27px]" style={{ backgroundImage: `url(${SoftwareImg})` }}>
        <h1 className="absolute top-10 left-16 text-white text-[36px] sm:text-[47px] font-bold leading-[48px] w-[700px]">
          Become a Software Developer
        </h1>
      </div>

      {/* Left content box overlaying image */}
      <div className="absolute top-20 left-0 bg-[rgba(239,238,238,0.94)] border border-white shadow-xl rounded-[27px] w-[540px] h-[344px] p-10">
        <p className="text-[18px] leading-[20px] font-medium text-black max-w-[437px]">
          From mobile apps to large scale platforms, software developers build the tools that power the world. This career path combines creativity, logic, and real-world interface.
        </p>

        <button className="mt-10 flex items-center justify-center gap-3 w-[235px] h-[40px] bg-[#FFC925]/90 rounded-full text-[#4A2B29] text-[14px] font-poppins">
          Find matching courses
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default HeroSoftware;
