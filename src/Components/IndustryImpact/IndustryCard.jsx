// src/components/IndustryCard.jsx
import React from 'react';

const IndustryCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full max-w-[620px] bg-white p-4 md:p-0 shadow-md rounded-[18px] hover:scale-[1.02] transition duration-300">
      {/* Image Box */}
      <div
        className="w-[192px] h-[192px] rounded-[18px] bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 201, 37, 0.776) 0%, rgba(255, 201, 37, 0.776) 14.29%, rgba(255, 201, 37, 0) 39.84%), url(${image})`,
        }}
      >
        <h3 className="absolute top-3 w-full text-center text-white text-[30px] font-semibold leading-[20px]">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-[16px] leading-10 text-black font-poppins flex-1">
        {description}
      </p>
    </div>
  );
};

export default IndustryCard;
