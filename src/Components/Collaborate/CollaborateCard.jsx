// src/components/EventsCard.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const EventsCard = ({ image, tittle, summary, buttonText }) => {
  return (
    <div className="w-[408px] h-[450px] bg-white shadow-2xl rounded-lg flex flex-col overflow-hidden">
      
      {/* Image Section */}
      <div className="relative w-full h-[300px] bg-cover bg-center"/>
       <img
      src={image}
      alt="Event Visual"
      className="w-full h-[200px] object-cover"
      />

      {/* Event Info Section */}
      <div className="p-8 flex flex-col gap-6">
        {/* Title + Description */}
        <div className="flex flex-col gap-6 text-left">
          <h3 className="text-[24px] font-bold text-black leading-9 font-poppins">
            {tittle}
          </h3>
          <p className="text-[14px] leading-[21px] font-normal text-black font-poppins">
            {summary}
          </p>
        </div>

        {/* Join Button */}
        <button className="flex items-center gap-2 bg-[#FFC925] px-6 py-2 rounded-full w-fit hover:bg-yellow-400 transition">
          <span className="text-[16px] font-semibold text-black font-poppins">{buttonText}</span>
          <ArrowRight size={18} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default EventsCard;
