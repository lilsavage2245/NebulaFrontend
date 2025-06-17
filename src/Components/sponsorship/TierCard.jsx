// src/Pages/collaborate/components/TierCard.jsx

import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function TierCard({ tierIcon, tierLabel, tierType, amount, benefits, buttonText, bgColor = '#70B5C6' }) {
  return (
    <div
      className="flex flex-col items-center p-4 gap-4 rounded-xl w-full max-w-[300px] h-auto"
      style={{ backgroundColor: bgColor }}
    >
      {/* Top Section */}
      <div className="flex flex-col items-center px-4 text-center">
        <div className="mb-4">
          {tierIcon}
        </div>
        <h3 className="text-[40px] font-semibold text-black font-poppins leading-[60px]">{tierLabel}</h3>
        <p className="text-[36px] font-normal text-black font-poppins leading-[54px]">{tierType}</p>
      </div>

      {/* Amount */}
      <p className="text-[32px] font-semibold text-black font-poppins text-center leading-[60px]">
        {amount}
      </p>

      {/* Benefits List */}
      <div className="flex flex-col gap-4 w-full max-w-[260px]">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-3">
            <CheckCircle className="text-black w-6 h-6" />
            <p className="text-[16px] font-medium text-black font-poppins leading-[30px]">
              {benefit}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className="w-full max-w-[260px] h-[62px] bg-[#007B9A] text-white font-poppins text-[20px] rounded-md mt-6">
        {buttonText}
      </button>
    </div>
  );
}
