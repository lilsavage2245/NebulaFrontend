// src/components/NewsCard.jsx
import React from 'react';
import {ChevronRight,  ArrowRight } from 'lucide-react';

const NewsCard = ({ image, date, category, tittle, summary, summary2, summary3 }) => {
  return (
    <div className="w-[408px] h-[450px] rounded-br-[150px] overflow-hidden shadow-[0px_6px_20px_5px_rgba(255,201,37,0.8)] bg-yellow flex flex-col justify-end relative">
      
      {/* Background Image */}
      <div className="relative w-full h-[260px] bg-cover bg-center"/>
      <img
      src={image}
      alt="News Visual"
      className="w-full h-[265px] object cover"
      />
      

      {/* Bottom Half - Course Info */}
<div className="h-[270] w-full bg-[#97BDBD] bg-opacity-90 backdrop-blur-sm pt-4 pb-4 pr-4 pl-3 flex flex-col justify-between gap-2">
  <div className="text-sm font-semibold uppercase tracking-wide">{date}</div>

        {/* Date (Frame 285) */}
        <div className="flex flex-col gap-0 text-left pl-[12px] text-[16px] font-normal font-['Port Lligat Sans'] leading-[17px] text-black">
        </div>


  {/* Frame 81 - Header */}
  <div className="flex flex-col gap-0 text-left pl-[12px]">
    <h3 className="text-[20px] font-bold font-poppins text-black">
      {tittle}
    </h3>
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

export default NewsCard;
