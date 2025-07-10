// src/Components/OutcomeCard.jsx
import React from 'react';

const OutcomeCard = ({ image, text }) => {
  return (
    <div
      className="w-[300px] h-[230px] flex flex-col justify-end items-center gap-14 p-12 bg-white bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex justify-center items-center p-4 w-[240px] h-[85px] bg-[#FFC925] rounded-[24px]">
        <p className="text-center text-black text-[16px] leading-[19px] font-normal font-['Inter']">
          {text}
        </p>
      </div>
    </div>
  );
};

export default OutcomeCard;
