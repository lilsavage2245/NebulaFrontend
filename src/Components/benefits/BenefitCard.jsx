import React from "react";

const BenefitCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-row justify-between items-center p-4 gap-4 w-[590px] h-[130px] bg-white border-b border-black">
      {/* Text Block */}
      <div className="flex flex-col w-[370px] h-[88px]">
        <h2 className="text-[28px] leading-[44px] font-semibold font-inter text-black">
          {title}
        </h2>
        <p className="text-[16px] leading-[28px] text-black">{description}</p>
      </div>

      {/* Image Frame */}
      <div
        className="w-[200px] h-[130px] bg-white rounded-tr-[48px] overflow-hidden"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
    </div>
  );
};

export default BenefitCard;
