// src/Components/TestimonialCard.jsx

import React from 'react';

const TestimonialCard = ({ image, name, date, message }) => {
  return (
    <div className="flex flex-col items-start p-6 gap-6 w-full max-w-[408px] min-h-[229px] bg-white shadow-md rounded-md">
      {/* Top Row: Avatar and Name/Date */}
      <div className="flex flex-row items-center gap-4">
        {/* Avatar */}
        <img
          src={image}
          alt={name}
          className="w-[100px] h-[100px] rounded-full object-cover border border-gray-300"
        />

        {/* Name & Date */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[24px] leading-[29px] text-[#1D15B1] font-normal">{name}</h3>
          <p className="text-[15px] leading-[18px] text-black font-normal">{date}</p>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-[16px] leading-[19px] text-black font-normal">
        {message}
      </p>
    </div>
  );
};

export default TestimonialCard;
