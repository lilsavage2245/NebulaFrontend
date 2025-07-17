import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CareerRolesCard = ({ title, description, description2, description3, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-[300px] shadow-md rounded-[18px] overflow-hidden bg-white hover:scale-[1.02] transition duration-300">
      {/* Image Section */}
      <div
        className="w-full h-[250px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      {/* Title and Toggle */}
      <div className="flex items-start justify-between px-3 py-4 border-t-[6px] border-[rgba(0,128,128,0.5)]">
        <h3 className="text-[22px] font-medium font-poppins text-black w-[230px] leading-tight">
          {title}
        </h3>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>

      {/* Expandable Description */}
      {expanded && (
        <div className="px-4 pb-4 text-[15px] text-gray-700 font-poppins transition-all duration-300">
          {description}
            {description2 && (
                <p className="mt-2">
                {description2}
              </p>
            )}
            {description3 && (
              <p className="mt-2">
                {description3}
              </p>
            )}
        </div>
        )}
        
    </div>
  );
};

export default CareerRolesCard;
