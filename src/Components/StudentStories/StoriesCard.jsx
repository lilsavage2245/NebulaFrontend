import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Video } from 'lucide-react'; // or your preferred icons

const StoriesCard = ({ title, student, storyImageSrc, userImageSrc, description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full max-w-[344px] rounded-[18px] shadow-md flex flex-col items-center">
      
      {/* Top Image Frame with Gradient Overlay */}
      <div 
        className="relative w-full h-[174px] rounded-t-[18px] bg-cover bg-center"
        style={{ 
            backgroundImage: `linear-gradient(180deg, rgba(0,128,128,0.48) 0%, rgba(0,128,128,0) 50%), url(${storyImageSrc})`,
       }}     
      >
        <h3 className="absolute top-2 left-4 text-white text-[22px] font-medium">{title}</h3>
        <div className="absolute top-1 right-3">
          <Video size={30} color="#fff" />
        </div>
      </div>

      {/* Student Info Frame */}
      <div className="relative w-full bg-white border-t-[7px] border-teal-600 rounded-b-[18px] pt-3 pb-2 px-4">
        <div className="flex items-center gap-4">
          <img src={userImageSrc} alt="User" className="w-[37px] h-[37px] rounded-full object-cover" />
          <p className="text-[22px] font-medium text-black">{student}</p>
        </div>
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="absolute bottom-2 right-3 p-1"
          aria-label="Expand Description"
        >
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {/* Expandable Description */}
      {expanded && (
        <div className="w-full bg-white text-sm text-gray-700 px-4 py-2 border-t border-gray-300 rounded-b-[18px] -mt-[1px]">
          {description}
        </div>
      )}
    </div>
  );
};

export default StoriesCard;
