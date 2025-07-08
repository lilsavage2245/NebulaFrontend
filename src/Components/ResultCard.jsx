// src/components/ResultCard.jsx
import React from "react";

const ResultCard = ({
  programTitle,
  category,
  topic,
  sourceLink,
  introText,
  highlight,
  continuation,
  image
}) => {
  return (
    <div className="flex flex-col w-[585px] max-w-[585px] gap-2">
      {/* Top Bar */}
      <div className="flex flex-col gap-1 px-2 py-2 bg-gray-200">
        <div className="flex items-end gap-1">
          <h2 className="text-[18px] font-bold text-[#1D15B1]">
            {programTitle}
          </h2>
          <div className="border-l-2 border-[#1D15B1] h-[18px] mx-1" />
          <div className="bg-[#FFC925] px-2 py-0.5 text-[13px] font-bold">
            {category}
          </div>
          <h2 className="text-[18px] font-bold text-[#1D15B1]">{topic}</h2>
        </div>
        <a
          href={sourceLink}
          className="text-[10px] italic text-black underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {sourceLink}
        </a>
      </div>

      {/* Main Card */}
      <div className="flex flex-col sm:flex-row gap-4 p-4 shadow-md bg-white">
        {/* Text Section */}
        <div className="flex flex-col gap-2 w-full sm:w-[529px]">
          <div className="flex flex-wrap gap-1 items-center">
            <span className="text-[13px]">{introText}</span>
            <div className="bg-[#FFC925] px-2 py-0.5 text-[13px] font-bold">
              {highlight}
            </div>
            <span className="text-[13px]">{continuation}</span>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="w-full sm:w-[166px] h-[100px] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
    </div>
  );
};

export default ResultCard;
