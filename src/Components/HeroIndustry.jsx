// src/Pages/collaborate/components/HeroIndustry.jsx

import React from "react";
import IndustryHeroImage from "../assets/Collaborate1.png"; // Adjust path based on your structure

export default function HeroIndustry() {
  return (
    <section className="flex flex-col items-center px-2 gap-8 w-full max-w-[1272px] mx-auto py-24">
      {/* Yellow Line Vector */}
      <div className="w-[400px] border-t-[6px] border-yellow-400"></div>

      {/* Title */}
      <h1 className="text-[48px] leading-[44px] font-bold text-center text-black font-poppins">
        Become an Industry Partner
      </h1>

      {/* Subtitle */}
      <p className="text-[20px] leading-[44px] text-center text-black font-poppins max-w-[878px]">
        Partner with Nebula Academy to shape tomorrow’s tech workforce and access top-tier talent
      </p>

      {/* Hero Image */}
      <div className="w-full max-w-[1256px] h-[450px] overflow-hidden rounded-lg">
        <img
          src={IndustryHeroImage}
          alt="Industry Collaboration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CTA Button */}
      <button className="mt-4 bg-[#FFC925] text-[#4A2B29] px-6 py-2 w-[382px] h-[40px] rounded-full text-[14px] font-normal font-poppins shadow-[0_16px_24px_2px_rgba(0,0,0,0.25)] hover:brightness-105 transition">
        Start a Partnership
      </button>
    </section>
  );
}
