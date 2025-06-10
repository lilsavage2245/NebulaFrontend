import React from 'react';
import HeroCourseImg from '../assets/HeroCourse.png';

const heroTags = [
  { label: 'Featured' },
  { label: 'In Demand' },
  { label: 'Popular' },
];

export default function HeroCourse() {
  return (
    <section className="relative max-w-[1386px] mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Image Block */}
      <div className="w-full lg:w-[972px] h-[570px] relative z-0">
        <img
          src={HeroCourseImg}
          alt="Course Preview"
          className="w-full h-full object-cover rounded-md shadow-md"
        />
      </div>

      {/* Right Text Block with Overlap */}
      <div className="relative z-10 w-full lg:w-[600px] bg-white bg-opacity-80 shadow-lg p-6 rounded-md flex flex-col gap-8 mt-10 lg:mt-0 -ml-0 lg:-ml-20">
        {/* Heading + Underline */}
        <div className="flex items-center gap-6">
          <h2 className="text-[48px] leading-[72px] font-bold text-black font-poppins">
            Courses
          </h2>
          <div className="w-[224px] border-t-[7px] border-[#FFC925]" />
        </div>

        {/* Description */}
        <p className="text-[24px] leading-[32px] font-normal text-black font-port">
          We offer a range of high quality courses from pre‑academy courses to beginner’s courses to intermediate courses and to advanced courses. Study options include full‑time, part‑time, and flexible learning.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          {heroTags.map((tag, index) => (
            <button
              key={index}
              className="flex items-center bg-white rounded-full px-4 py-2 shadow-md hover:bg-gray-100 transition"
            >
              <span className="text-[16px] font-poppins text-black">
                {tag.label}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-black ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
