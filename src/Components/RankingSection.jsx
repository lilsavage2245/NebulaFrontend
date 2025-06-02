// src/components/RankingSection.jsx
import React from 'react';
import { Briefcase, Award, ThumbsUp, Globe, ArrowRight } from 'lucide-react';

const RankingSection = () => {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-16 bg-[rgba(0,128,128,0.16)] space-y-12">
      
      {/* Stats Box */}
      <div className="bg-[#008080] rounded-xl p-6 flex flex-col lg:flex-row gap-72 flex-wrap text-black">
        
        {/* First Value Column */}
        <div className="flex flex-col gap-6 max-w-607">
          {/* 55% Employed */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <Briefcase size={48} className="text-black" />
              <p className="text-[48px] font-bold">55%</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[7px] h-[14px] border-2 border-black" />
              <p className="text-base sm:text-lg font-medium">
                Of our graduates are employed after graduation
              </p>
            </div>
          </div>

          {/* No 1 in Africa */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-3">
              <Award size={48} className="text-black" />
              <p className="text-[48px] font-bold">No 1</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[7px] h-[14px] border-2 border-black" />
              <p className="text-base sm:text-lg font-medium">
                In Africa for teaching first generation students
              </p>
            </div>
          </div>
        </div>

        {/* Second Value Column */}
        <div className="flex flex-col gap-6 max-w-607">
          {/* 86% Satisfaction */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <ThumbsUp size={48} className="text-black" />
              <p className="text-[48px] font-bold">86%</p>
            </div>
            <div className="flex items-center gap-3">
              <ArrowRight size={48} className="text-black" />
              <p className="text-base sm:text-lg font-medium">
                Satisfaction with course teaching
              </p>
            </div>
          </div>

          {/* 55% Global Recognition */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-3">
              <Globe size={48} className="text-black" />
              <p className="text-[48px] font-bold">55%</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[7px] h-[14px] border-2 border-black" />
              <p className="text-base sm:text-lg font-normal">
                Recognised globally as one of the best tech academies
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white rounded-3xl p-8 flex flex-col items-center gap-10 text-center shadow-md">
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-black leading-snug font-poppins max-w-5xl">
          Start your journey today with NEBULA Academy.
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Elevated Button */}
          <button className="bg-[#FFC925] text-[#4A2B29] shadow-lg px-6 py-2 rounded-full text-sm sm:text-base font-poppins hover:bg-yellow-400 transition">
            Elevated Button
          </button>

          {/* Outline Button */}
          <button className="border border-black text-[#4A2B29] px-6 py-2 rounded-full text-sm sm:text-base font-poppins hover:bg-black hover:text-white transition">
            Outline Button
          </button>
        </div>
      </div>
    </section>
  );
};

export default RankingSection;
