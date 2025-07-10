import React from "react";

const ApplyProgramCard = ({ title, subtitle, description, image }) => {
  return (
    <div className="flex flex-col items-start gap-8 w-[345px] h-[390px] bg-black/50 rounded-[40px] overflow-hidden text-white pb-[10px]">
      {/* Top Image Section */}
      <div className="relative w-full h-[300px] shadow-md  overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[180px] object-cover"
        />
        <div className="absolute left-4 bottom-6 text-2xl font-semibold">{title}</div>
        <div className="absolute left-16 bottom-1 text-2xl font-semibold">{subtitle}</div>
      </div>

      {/* Bottom Text & Buttons */}
      <div className="flex flex-col items-start justify-center gap-4 px-4 text-start mt-4">

        
        <p className="text-[16px] leading-[20px] ">{description}</p>

        <div className="flex flex-row items-center justify-center gap-[40px]">
          <button className="px-6 py-3 text-[8px] font-medium text-[#4A2B29] bg-[#FFC925] rounded-[30px] shadow-lg">
            Explore course
          </button>
          <button className="w-[116px] px-6 py-3 text-[8px] font-medium text-[#4A2B29] bg-[#FFC925] rounded-[20px] shadow-md">
            Check eligibility
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyProgramCard;
