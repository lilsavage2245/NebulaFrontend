// src/Pages/collaborate/components/BenefitCard.jsx

import React from "react";

const BenefitCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 w-full max-w-[612px] h-auto shadow-[0_16px_24px_2px_rgba(0,0,0,0.25)]">
      {/* Image Section */}
      <div className="w-full h-[200px] lg:w-[180px] lg:h-[204px] flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover bg-white"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-8 w-full lg:w-[400px] mt-3">
        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold leading-[1.2] tracking-[0.0025em] text-black font-poppins text-center lg:text-left">
          {title}
        </h3>
        <p className="text-[16px] md:text-[15px] lg:text-[16px] font-normal leading-[1.6] tracking-[0.0025em] text-black font-poppins text-center lg:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
