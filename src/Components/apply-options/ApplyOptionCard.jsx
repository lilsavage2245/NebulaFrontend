import React from "react";

const ApplyOptionCard = ({ image, details }) => {
  const { title, levels } = details;

  return (
    <div className="flex flex-col items-center gap-5 w-[300px] h-[459px] bg-white rounded-[32px] shadow">
      {/* Image Frame */}
      <div className="w-[300px] h-[300px] rounded-[32px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details Frame */}
      <div className="flex flex-col items-start gap-4 w-full px-2">
        {/* Yellow Line */}
        <div className="w-[70px] border-t-[7px] border-[#FFC925]" />

        {/* Title */}
        <h3 className="text-[28px] font-semibold text-black leading-[20px]">
          {title}
        </h3>

        {/* Levels */}
        <p className="text-[20px] text-black leading-[30px] whitespace-pre-line">
          {levels}
        </p>
      </div>
    </div>
  );
};

export default ApplyOptionCard;
