// BenefitCard.jsx
import React from 'react';

const BenefitCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col bg-white w-full max-w-2xl rounded-lg overflow-hidden shadow-md">
      {/* Image Section */}
      <div
        className="w-full h-64 bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Text Section */}
      <div className="flex flex-col gap-4 p-6">
        <h3 className="text-3xl font-semibold text-black">
          {title}
        </h3>
        <p className="text-base text-gray-800">
          {description}
        </p>
        <button className="bg-[#FFC925] text-[#4A2B29] px-6 py-2 rounded-full shadow-md text-sm font-medium w-max">
          Join free introductory class
        </button>
      </div>
    </div>
  );
};

export default BenefitCard;
