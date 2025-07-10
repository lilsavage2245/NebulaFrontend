// src/Components/FreeClassOthers.jsx

import React from 'react';
import OthersImage from '../assets/Others2.png'; // Update to your actual image path

export default function FreeClassOthers() {
  return (
    <section className="w-full px-4 md:px-16 py-20 flex flex-col lg:flex-row items-center justify-between gap-6 bg-[#F9FAFB] shadow-sm ">
      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-8 max-w-[600px]">
        {/* What You Need to Know */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[32px] md:text-4x1 font-bold leading-tight text-black">
            What You Need To Know About Free Introductory Class
          </h2>
          <ul className="flex flex-col gap-2 text-[16px] leading-[24px] text-black font-normal">
            <li>Duration: 60–90 minutes</li>
            <li>Mode: Live online class (interactive video)</li>
            <li>Frequency: Weekly or Bi-weekly classes available</li>
            <li>Prerequisites: None, beginners welcome</li>
            <li>Topics Covered: Coding basics, introduction to HTML</li>
            <li>
              Materials Provided: Session notes, recorded video and further learning resources
            </li>
            <li>Cost: Completely free</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[32px] md:text-4x1 font-bold leading-tight text-black">
            Benefits
          </h2>
          <ul className="flex flex-col gap-2 text-[16px] leading-[24px] text-black font-normal">
            <li>Topics Covered: Coding basics, introduction to HTML</li>
            <li>Mode: Live online class (interactive video)</li>
            <li>Frequency: Weekly or Bi-weekly classes available</li>
            <li>Prerequisites: None, beginners welcome</li>
          </ul>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col items-center justify-center gap-8 max-w-[606px]">
        <img
          src={OthersImage}
          alt="Free Class"
          className="w-full h-[350px] object-cover rounded-lg shadow-lg"
        />
        <p className="text-center text-[20px] md:text-[20px] font-medium leading-[36px] text-black">
          By registering as a Freebie, you consent to getting updates and communication about our
          programs.
        </p>
        <button className="bg-[#FFC925] text-[#4A2B29] px-6 py-2 rounded shadow-lg font-medium hover:scale-105 transition-transform">
          Register Now
        </button>
      </div>
    </section>
  );
}
