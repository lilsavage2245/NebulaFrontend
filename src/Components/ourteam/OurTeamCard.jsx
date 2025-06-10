// OurTeamCard.jsx
import React from 'react';

const OurTeamCard = ({ name, title, image }) => {
  return (
    <div className="flex flex-col items-start gap-6 w-[300px] h-[395px] bg-white shadow-md rounded-[24px]">
      {/* Frame 12 - Image */}
      <div
        className="w-full h-[364px] bg-cover bg-center rounded-t-[24px]"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Frame 16 - Info */}
      <div className="flex flex-col px-2 w-full gap-3">
        {/* Frame 13 - Title */}
        <div className="flex items-center gap-2 px-2">
          <p className="text-[24px] leading-[35px] font-normal text-black font-poppins">
            {title}
          </p>
        </div>

        {/* Frame 14 - Name */}
        <div className="flex items-center gap-2 px-2">
          <p className="text-[24px] font-bold text-black font-poppins">
            {name}
          </p>
        </div>

        {/* Frame 15 - Socials */}
        <div className="flex items-center gap-4 px-2 py-2">
          <div className="w-0 h-[34px] border-l-[6px] border-[#FFC925]" />
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;
