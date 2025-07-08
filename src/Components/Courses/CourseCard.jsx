// src/components/CourseCard.jsx
import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

const CourseCard = ({image, category, tittle, summary, summary2, summary3 }) => {
  return (
    <div className="w-[299px] h-[470px] rounded-[120px_0px_120px_0px] shadow-[15px_15px_4px_0px_rgba(255,201,37,0.8)] overflow-hidden flex flex-col bg-white">

      {/* Top Half - Image */}
      <div
        className="h-[230] w-full bg-cover bg-center"/>
        <img
        src={image}
        alt="Course Visual"
        className="w-full h-1/2 object-cover"
        />

      {/* Bottom Half - Course Info */}
<div className="h-1/2 w-full bg-[#008080] bg-opacity-90 backdrop-blur-sm pt-4 pb-4 pr-4 pl-3 flex flex-col justify-between">

  {/* Frame 81 - Header */}
  <div className="flex flex-col gap-0 text-left pl-[12px]">
    <h3 className="text-[20px] font-bold font-poppins text-black">
      {tittle}
    </h3>
    <p className="text-[16px] font-medium font-poppins text-black">
      {category}
    </p>
  </div>

  {/* Frame 85 - Course Modules */}
  <div className="flex flex-col gap-0 mt-2 pl-[12px]">
    <div className="flex items-center gap-2">
      <ChevronRight size={12} className="text-black" />
      <span className="text-[12px] text-black font-poppins">
        {summary}
      </span>
    </div>

    <div className="flex items-center gap-2">
      <ChevronRight size={12} className="text-black" />
      <span className="text-[12px] text-black font-poppins">
        {summary2}
      </span>
    </div>

    <div className="flex items-center gap-2">
      <ChevronRight size={12} className="text-black" />
      <span className="text-[12px] text-black font-poppins">
        {summary3}
      </span>
    </div>
  </div>

  {/* Frame 284 - Arrow Button */}
  <div className="flex justify-start mt-4">
    <div className="w-[38px] h-[38px] bg-[#FFC925] border border-black rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition">
      <ArrowRight size={18} className="text-black" />
    </div>
  </div>
</div>
    </div>
  );
};

export default CourseCard;
