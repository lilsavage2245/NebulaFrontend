import React from "react";
import { ArrowRight } from "lucide-react";

const CategoryCard = ({ image, count, label }) => {
  return (
    <div
      className="relative w-[296px] h-[300px] rounded-[32px] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Top Count Badge */}
      <div className="absolute top-4 right-4 bg-[#FFC925] shadow-md rounded-[16px] flex items-center justify-center gap-2 px-2 py-1 w-[55px] h-[28px]">
        <span className="text-[16px] font-poppins text-black">{count}</span>
        <ArrowRight size={18} className="text-black" />
      </div>

      {/* Category Label Button */}
      <div className="absolute top-[125px] left-[68px] bg-[#FFC925] shadow-lg rounded-[20px] px-6 py-2 flex items-center gap-2 w-[159px] h-[50px]">
        <span className="text-[#4A2B29] text-[14px] font-poppins">{label}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
