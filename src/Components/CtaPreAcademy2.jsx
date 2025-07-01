import React from "react";

export default function CtaPreAcademy2() {
  return (
    <section className="w-full bg-[#FFC925]/50 py-20 px-4">
      <div className="max-w-[900px] mx-auto flex flex-col items-center text-center gap-6">
        

        {/* Heading */}
        <h2 className="text-[28px] sm:text-[32px] md:text-[32px] lg:text-[48px] font-bold text-black font-poppins leading-tight">
          Got a Question?
        </h2>

        {/* Subtext (Optional) */}
        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-700 max-w-[700px] font-poppins">
          Make an enquiry about this course.
        </p>

        {/* CTA Button */}
        <button className="mt-4 px-6 py-3 bg-yellow-400 text-[#4A2B29] rounded-full shadow-md text-[16px] font-semibold hover:brightness-105 transition">
          Fill in an Enquiry Form
        </button>
      </div>
    </section>
  );
}
