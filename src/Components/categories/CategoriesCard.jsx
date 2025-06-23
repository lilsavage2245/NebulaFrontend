// src/Pages/apply/pre-academy/CategoryCard.jsx

import React from "react";

export default function CategoryCard({ image, title, duration, onClick }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-[#F5F5FF] p-6 md:p-8 rounded-2xl w-full max-w-[1200px] shadow-sm">
      {/* Left Side: Image and Text */}
      <div className="flex items-center gap-6 w-full md:w-auto">
        <img
          src={image}
          alt={title}
          className="w-[300px] h-[170px] object-cover rounded-2xl"
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-[20px] md:text-[24px] font-bold text-black font-poppins">
            Title: {title}
          </h3>
          <p className="text-[16px] font-normal text-black font-poppins">
            Duration: {duration}
          </p>
        </div>
      </div>

      {/* Right Side: Button */}
      <button
        onClick={onClick}
        className="mt-6 md:mt-0 bg-[#FFC925] text-[#4A2B29] font-poppins text-[14px] px-6 py-2 rounded-full shadow-lg hover:opacity-90"
      >
        View Details
      </button>
    </div>
  );
}
