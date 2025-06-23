// src/Pages/apply/pre-academy/BeginnerTestimonials.jsx

import React from 'react';
import { Star } from 'lucide-react';

export default function BeginnerTestimonials() {
  return (
    <section className="w-full bg-[#CFE6EC] py-16 px-6 md:px-24 flex flex-col md:flex-row items-center justify-center gap-24">
      {/* Left Heading */}
      <div className="w-full md:w-[450px] flex items-center justify-center text-center">
        <h2 className="text-[36px] md:text-[56px] font-semibold leading-tight">
          What Our Students are saying
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="flex flex-row gap-24 items-start">
        {/* Testimonial Content */}
        <div className="w-full md:w-[500px] flex flex-col gap-6">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="#FFC925" stroke="#FFC925" />
            ))}
          </div>

          <p className="text-[16px] leading-[19px] text-black">
            Lorem ipsum mauris interdum leo habitant orci odio eget interdum et auctor bibendum sagittis
            sapien augue sed ac aliquam vel non ullamcorper mattis lorem sed tristique aliquet tristique est
            in dui faucibus lorem aliquet aliquet tincidunt ut in urna massa dui imperdiet donec pharetra
            nascetur.
          </p>

          <div className="flex items-center gap-6">
            <div className="w-[25px] h-[1px] bg-black" />
            <p className="font-medium text-[16px]">Martin Okoye, Consultant</p>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex flex-col gap-3 mt-2">
          <div className="w-[18px] h-[18px] rounded-full bg-[#FFC925]" />
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-[18px] h-[18px] rounded-full border border-[#FFC925] bg-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
