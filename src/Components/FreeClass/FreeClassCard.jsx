// src/Components/FreeClassCard.jsx

import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function FreeClassCard({
  image,
  title,
  level,
  date,
  reserved = false,
}) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[408px] min-h-[479px]">
      {/* Image Frame */}
      <div className="w-full h-[210px] bg-white rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-1 px-2">
        <h3 className="text-[24px] md:text-[19px] font-bold leading-[44px] text-black">
          {title}
        </h3>
        <p className="text-[15px] font-normal leading-[32px] text-black">{level}</p>
        <p className="text-[16px] font-semibold text-black">Date: {date}</p>
      </div>

      {/* Reserved Button */}
      {reserved && (
        <div className="flex items-center gap-2 bg-[#FFC925] px-6 py-2 rounded-full shadow-lg mt-2 ml-2 w-fit">
          <span className="text-sm font-medium text-[#4A2B29]">Reserved</span>
          <CheckCircle size={20} className="text-[#4A2B29]" />
        </div>
      )}
    </div>
  );
}
