// src/components/VideoSection.jsx
import React from 'react';
import logo from '../assets/logo.png.png';
import videoThumbnail from '../assets/Video.png';

const VideoSection = () => {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-12 rounded-lg">
      
      {/* Top Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-6">
        <img src={logo} alt="Nebula Logo" className="w-14 h-14 object-contain" />
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-black font-poppins">Who Are We ?</h2>
          <p className="text-sm sm:text-base text-black font-poppins">
            Secondary text
          </p>
        </div>
      </div>

      {/* Video Image */}
      <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-md mb-6">
  <img
    src={videoThumbnail}
    alt="Video"
    className="w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] object-cover rounded-lg"
  />
</div>


      {/* Bottom Description & Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Description */}
        <p className="text-base sm:text-lg text-black font-bold font-poppins leading-6 max-w-3xl mt-10">
          Why We Built Nebula - Empowering tech driven Futures
        </p>

        {/* Text Buttons */}
        <div className="flex gap-12 mt-10">
          <button className="px-4 py-2 rounded-full text-sm font-poppins text-[#4A2B29] border border-black hover:bg-gray-100 transition">
            The Vision
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-poppins text-[#4A2B29] border border-black hover:bg-white-100 transition">
            Student Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
