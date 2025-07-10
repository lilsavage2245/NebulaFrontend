// ProgramCard.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProgramCard = ({ title, description, imageSrc, onStartClick, onExploreClick }) => {
  return (
    <div className="relative w-[345px] h-[390px]">
      {/* Image Background Section */}
      <div
        className="absolute top-0 left-0 w-full h-[321px] rounded-[35.94px] bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div
          onClick={onStartClick}
          className="absolute bottom-[150px] left-1/2 transform -translate-x-1/2 bg-[#FFC925] text-[#4A2B29] rounded-[29.95px] shadow-md px-6 py-3 cursor-pointer flex items-center gap-3 text-[12px] font-medium"
        >
          Start Application <ArrowRight size={18} />
        </div>
      </div>

      {/* Text Overlay Box */}
      <div className="absolute bottom-0 left-0 bg-white/90 backdrop-blur-sm rounded-tr-[35.94px] rounded-br-[35.94px] rounded-bl-[35.94px] shadow-lg px-6 py-5 w-[274px] h-[169px]">
        <h3 className="text-[21px] font-bold text-black leading-[10px]">{title}</h3>
        <p className="mt-4 text-[14px] leading-[20px] text-black">{description}</p>
        <div
          onClick={onExploreClick}
          className="w-[157px] h-[34px] mt-6 bg-[#FFC925] text-[#4A2B29] rounded-[29.95px] shadow-lg px-6 py-3 cursor-pointer flex items-center gap-3 text-[8px] font-medium"
        >
          Explore Course <ArrowRight size={18} />
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
