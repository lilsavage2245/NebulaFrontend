// src/Pages/collaborate/components/EducationCta.jsx

import React from "react";

export default function EducationCta() {
  return (
    <section className="w-full bg-[#FFC925]/50 py-20 px-4">
      <div className="max-w-[900px] mx-auto flex flex-col items-center text-center gap-6">
        {/* Yellow Vector */}
        <div className="w-[350px] border-t-[6px] border-yellow-400"></div>

        {/* Heading */}
        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-black font-poppins leading-tight">
          READY TO TRANSFORM YOUR EDUCATIONAL OFFERINGS?
        </h2>

        {/* Subtext (Optional) */}
        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-700 max-w-[700px] font-poppins">
          Let’s begin a partnership that transforms education and industry.
        </p>

        {/* CTA Button */}
        <button className="mt-4 px-6 py-3 bg-yellow-400 text-[#4A2B29] rounded-full shadow-md text-[16px] font-semibold hover:brightness-105 transition">
          Begin Collaboration Today
        </button>
      </div>
    </section>
  );
}
