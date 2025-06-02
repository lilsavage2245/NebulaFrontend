import React from 'react';
import { ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';

const ProgramCard = ({ image, label }) => {
  return (
    <div
      className="relative w-full max-w-sm h-52 rounded-2xl overflow-hidden bg-cover bg-center flex items-end"
      style={{ backgroundImage: `url(${image})` }}
    >
      <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#FFC925] text-white rounded-full m-4 shadow-md">
        <span className="font-bold text-sm sm:text-base text-black">{label}</span>
        <ArrowRight size={18} className="text-black" />
      </button>
    </div>
  );
};

ProgramCard.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ProgramCard;
