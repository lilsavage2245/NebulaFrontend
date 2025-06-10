import React from "react";

const ApplyProgramCard = ({ title, subtitle, description, image }) => {
  return (
    <div className="flex flex-col items-start gap-8 w-[610px] h-[546px] bg-black/50 rounded-[40px] overflow-hidden text-white">
      {/* Top Image Section */}
      <div className="relative w-full h-[350px] shadow-md rounded-[40px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute left-4 bottom-20 text-3xl font-semibold">{title}</div>
        <div className="absolute left-12 bottom-6 text-3xl font-semibold">{subtitle}</div>
      </div>

      {/* Bottom Text & Buttons */}
      <div className="flex flex-col items-center justify-center gap-8 px-4 text-center">
        <p className="text-[24px] leading-[36px]">{description}</p>

        <div className="flex flex-row items-center justify-center gap-[40px]">
          <button className="px-6 py-3 text-[20px] font-medium text-[#4A2B29] bg-[#FFC925] rounded-[30px] shadow-lg">
            Explore course
          </button>
          <button className="px-6 py-3 text-[20px] font-medium text-[#4A2B29] bg-[#FFC925] rounded-[20px] shadow-md">
            Check eligibility
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyProgramCard;
