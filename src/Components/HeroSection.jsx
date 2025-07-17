// src/components/HeroSection.jsx
import React from 'react';
import bgImg from '../assets/SecHero.png.png';
import heroImg from '../assets/Hero.png.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[847px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(32,21,32,0.54)] z-0" />

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 py-16">
        
        {/* Text Block */}
        <div className="flex flex-col gap-12 max-w-xl text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-[57px] leading-tight lg:leading-[86px] font-bold font-poppins">
            Unlocking critical thinking and teamwork
          </h1>

          <div className="flex flex-col gap-8">
            {/* Yellow Line */}
            <div className="w-[96.5px] h-0 border-t-[8px] border-[#FFC925]" />

            <p className="text-base sm:text-lg lg:text-[24px] leading-[32px] font-poppins">
              Build your future in technology at a world class coding education academy, discover innovative, hands-on learning experiences and soft skills.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mt-4">
  <Link to="/apply/free-class">
  <button className="bg-[#FFC925] text-[#201520] font-semibold text-sm sm:text-base px-6 py-3 rounded-md hover:bg-yellow-400 transition">
    Join Free Intro Class
  </button>
  </Link>
  <Link to="/apply">
  <button className="border border-[#FFC925] text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-md hover:bg-[#FFC925] hover:text-[#201520] transition">
    Apply Now
  </button>
  </Link>
</div>

          </div>
        </div>

        {/* Hero Image Block */}
        <div className="relative w-[300px] sm:w-[400px] lg:w-[510px] h-[300px] sm:h-[400px] lg:h-[519px] mt-10 lg:mt-0">
          {/* Ellipse background */}
          <div className="absolute inset-6 bg-[#FFC925] bg-opacity-70 rounded-full z-0" />
          
          {/* Hero image */}
          <img
            src={heroImg}
            alt="Hero"
            className="relative z-10 w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
