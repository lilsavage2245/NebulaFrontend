// PartnerStoryCard.jsx
import React from 'react';

const PartnerStoryCard = ({ image, title, summary, linkText }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-[350px] hover:shadow-xl transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] object-cover rounded-t-2xl"
      />
      <div className="p-5 flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-black font-poppins">{title}</h3>
        <p className="text-gray-600 text-base font-inter">{summary}</p>
        <button className="mt-auto text-teal-700 font-semibold hover:underline">{linkText}</button>
      </div>
    </div>
  );
};

export default PartnerStoryCard;
