// src/Components/BenefitCard2.jsx

import React from 'react';

export default function BenefitCard2({ image, title, description }) {
  return (
    <div className="flex flex-col items-start gap-6 w-[310px] h-[316px]">
      <div className="w-[200px] h-[200px] bg-gray-300 rounded overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      <h3 className="text-[28px] font-bold leading-[20px] text-black">
        {title}
      </h3>

      <p className="text-[16px] md:text-[15px] lg:text-[16px] font-normal leading-[1.6] tracking-[0.0025em] text-black font-poppins text-center lg:text-left">

        {description}
      </p>
    </div>
  );
}
