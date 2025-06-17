// src/Pages/collaborate/components/AvailableCard.jsx

import React from "react";

const TypeCard = ({ image, title, description, buttonLabel }) => {
  return (
    <div className="flex flex-col items-start gap-8 w-full h-auto min-h-[500px] bg-white rounded-[24px] overflow-hidden shadow-sm">
      {/* Top Image */}
      <div className="w-full h-[300px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover bg-white"
        />
      </div>

      {/* Title & Description */}
      <div className="flex flex-col items-center justify-center gap-4 px-4 text-center w-full">
        <h3 className="text-[40px] font-bold leading-[20px] tracking-[0.0025em] text-black font-poppins">
          {title}
        </h3>
        <p className="text-[16px] font-normal leading-[24px] tracking-[0.0025em] text-black font-poppins max-w-[580px]">
          {description}
        </p>
      </div>

      {/* Button */}
      <div className="px-4">
        <button className="flex items-center justify-center gap-2 px-6 py-2 w-[159px] h-[40px] bg-[#FFC925] text-[#4A2B29] text-[14px] font-normal font-poppins rounded-full shadow-[0_16px_24px_2px_rgba(0,0,0,0.25)] hover:brightness-105 transition">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default TypeCard;
