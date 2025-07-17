import React from "react";

const OpportunityCard = ({
  logo,
  company,
  location,
  description,
  salary,
  onApply,
}) => {
  return (
    <div className="w-[300px] h-[290px] flex flex-col items-end shadow-md rounded-[18px] overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center gap-5 bg-white px-5 py-3 w-full h-[79px] rounded-t-[18px]">
        <img
          src={logo}
          alt="Company Logo"
          className="w-[55px] h-[55px] rounded-full object-cover bg-gray-200"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-[21px] font-poppins font-medium text-black leading-[20px]">
            {company}
          </h3>
          <p className="text-[14px] font-poppins text-black leading-[20px]">
            {location}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white px-5 py-4 flex-grow h-[156px]">
        <p className="text-[15px] leading-[25px] font-poppins text-black">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="bg-white w-full h-[55px] rounded-b-[18px] flex items-center justify-start">
        <div className="flex gap-5 items-center justify-center w-[219px]">
          <p className="text-[16px] font-medium font-poppins text-black">
            {salary}
          </p>
          <button
            onClick={onApply}
            className="bg-white border border-[#000000] text-[#1ABCFE] text-[14px] font-poppins px-3 py-2 rounded-full hover:bg-[#f0f9ff]"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;
