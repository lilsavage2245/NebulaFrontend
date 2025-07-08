import React from 'react';
import CareerSection from './CareerSection';
import { Link } from 'react-router-dom'; // Import Link


const CareerPath = () => {
  return (
    <section className="w-full px-4 md:px-20 py-16 relative border-b-[5px] border-black-200">
      {/* Header */}
      <div className="mb-10">
        <div className="w-[85px] border-t-[12px] border-[#FFC925] mb-4"></div>
        <h2 className="text-3xl md:text-4xl font-extrabold font-poppins text-black">
          Career Pathway
        </h2>
      </div>
      <CareerSection />

      {/* Link to Eligibility page */}
  <Link to="/career-paths">
    <button className="flex items-center gap-2 bg-[#FFC925] px-6 py-2 rounded-full w-fit hover:bg-yellow-400 transition mt-8">
      <span className="text-[16px] font-semibold text-black font-poppins">Explore more career paths</span>
      {/*<ArrowRight size={18} className="text-black" />*/}
    </button>
  </Link>
    </section>
  );
};

export default CareerPath;
