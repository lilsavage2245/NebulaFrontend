// src/Pages/collaborate/components/HeroCorporate.jsx

import React from "react";
import CommunityHeroImage from "../assets/Collaborate4.png"; // Adjust path based on your structure

export default function HeroCommunity() {
  return (
    <section className="flex flex-col items-center px-2 gap-8 w-full max-w-[1512px] mx-auto py-24 bg-[#201520]">
      {/* Yellow Line Vector */}
      <div className="w-[400px] border-t-[6px] border-yellow-400"></div>

      {/* Title */}
      <h1 className="text-[48px] leading-[44px] font-bold text-center text-white font-poppins">
        Together, Empowering Our Community Through Technology 
      </h1>

      {/* Subtitle */}
      <p className="text-[20px] leading-[44px] text-center text-white font-poppins max-w-[878px]">
        Collaborate with Nebula Academy to bridge the digital divide, empower local communities and create lasting positive impact.
      </p>

      {/* Hero Image */}
      <div className="w-full max-w-[1256px] h-[450px] overflow-hidden rounded-lg">
        <img
          src={CommunityHeroImage}
          alt="Industry Collaboration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CTA Button */}
      <button className="mt-4 bg-[#FFC925] text-[#4A2B29] px-6 py-2 w-[382px] h-[40px] rounded-full text-[14px] font-normal font-poppins shadow-[0_16px_24px_2px_rgba(0,0,0,0.25)] hover:brightness-105 transition">
        Sponsor Now
      </button>
    </section>
  );
}
