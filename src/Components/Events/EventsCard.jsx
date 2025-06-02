// src/components/EventsCard.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const EventsCard = ({ image, date, category, tittle, summary, buttonText }) => {
  return (
    <div className="w-[408px] h-[500px] bg-white shadow-2xl rounded-lg flex flex-col overflow-hidden">
      
      {/* Image Section */}
      <div className="relative w-full h-[265px] bg-cover bg-center"/>
       <img
      src={image}
      alt="Event Visual"
      className="w-full h-[200px] object-cover"
      />

      {/* Yellow Date Block */}
      <div className="bg-[#FFC925] w-[172px] h-[85px] flex flex-col justify-center items-center -mt-6 mx-auto rounded-md z-10 relative shadow-md">
        <span className="text-white text-[16px] font-bold font-poppins">Events</span>
        <div className="bg-white mt-2 px-4 py-1 rounded-md">
          <span className="text-black text-[14px] font-bold font-poppins">{date}</span>
        </div>
      </div>

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
