// src/components/AcademyCard.jsx
import React from 'react';

const AcademyCard = ({ image, level }) => {
  return (
    <div className="relative w-[300px] h-[424px] group">
      {/* Top Vector Line */}
      <div className="absolute top-0 left-0 w-[150px] border-t-[12px] border-yellow-400"></div>

      {/* Card Container */}
      <div className="absolute top-[24px] left-0 w-full h-[400px] bg-gradient-to-b from-yellow-400 to-[#997816] rounded-[25px_25px_0_25px] shadow-lg group-hover:scale-105 transition-transform duration-300 ease-in-out">
        {/* Image Frame */}
        <div className="box-border w-[288px] h-[298px] bg-[#8A1414] border-[6px] border-black/30 rounded-t-[25px] mx-auto mt-[5px]">
          <img
            src={image}
            alt="Academy Level"
            className="w-full h-full object-cover rounded-t-[19px]"
          />
        </div>

        {/* Level Label */}
        <p className="text-center text-[30px] font-semibold text-black mt-4">
          {level}
        </p>
      </div>
    </div>
  );
};

export default AcademyCard;
