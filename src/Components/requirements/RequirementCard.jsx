// src/Pages/apply/components/RequirementCard.jsx

import React from 'react';

export default function RequirementCard({ title, description, description2, description3, description4, }) {
  return (
    <div className="flex flex-col items-start p-3 gap-5 w-[300px] h-auto bg-[#CFE6EC] rounded-md">
      {/* Title with bottom border */}
      <div className="w-full border-b border-black pb-1">
        <h3 className="text-[24px] font-bold font-inter text-black">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-[15px] font-poppins text-black leading-[22px]">
        {description} <br/>
        {description2}<br/>
        {description3}<br/>
        {description4}
      </p>
    </div>
  );
}
