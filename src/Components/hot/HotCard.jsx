// HotCard.jsx
import React from 'react';

const HotCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-md">
      {/* Image Section */}
      <div
        className="w-full h-64 bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Text Section */}
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-black">
          {title}
        </h3>
        <p className="text-base text-gray-800">
          {description}
        </p>
        <button className="bg-[#FFC925] text-[#4A2B29] px-6 py-2 rounded-full shadow-md text-sm font-medium w-max">
          View more
        </button>
      </div>
    </div>
  );
};

export default HotCard;
