// src/Pages/collaborate/components/StepCard.jsx

import React from "react";

const StepCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 w-full max-w-[612px] bg-white p-4 rounded-lg shadow-sm">
      {/* Left Image */}
      <div className="w-full lg:w-[199px] h-[204px] flex-shrink-0 overflow-hidden rounded-[50px_0px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover bg-white"
        />
      </div>

      {/* Right Text Content */}
      <div className="flex flex-col justify-center items-start gap-4 w-full lg:w-[400px] h-auto">
        <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold font-poppins leading-[20px] text-black">
          {title}
        </h3>
        <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-normal font-poppins leading-[36px] text-black">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
