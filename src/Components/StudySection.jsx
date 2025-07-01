// src/components/StudySection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import study1 from '../assets/Study1.png';
import study2 from '../assets/Study2.png';

const StudySection = () => {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-16 bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

        {/* Left Column */}
        <div className="flex flex-col gap-10 w-[500px] max-w-xl">
          <h2 className="text-[40px] lg:text-[57px] font-bold text-black font-poppins leading-tight">
            Study
          </h2>

          <div className="w-[82px] h-0 border-t-[4px] border-black" />

          <p className="text-base sm:text-lg lg:text-[17px] leading-[32px] text-black font-poppins">
            Learn to code, create and build your dreams. Start with our Pre-academy if you are 10+, or drive deep with our full academy program. Your tech journey starts here.
          </p>

          <Link to="/programs" className="mt-2 flex items-center gap-2 bg-[#FFC925] text-[#4A2B29] font-poppins px-6 py-2 rounded-full hover:bg-yellow-400 transition w-fit">
            Explore all Programs
            <span className="w-[18px] h-[18px] bg-black rounded-full"></span>
          </Link>
        </div>

        {/* Right Cards */}
        <div className="flex flex-col md:flex-row gap-8">

          {/* Academy Card */}
          <div className="bg-white rounded-3xl shadow-md p-6 w-full max-w-sm flex flex-col items-center text-center gap-4">
            <img src={study1} alt="Academy" className="w-full h-60 object-contain rounded-md" />
            <h3 className="text-2xl font-bold font-poppins text-black">Academy</h3>
            <h4 className="text-[12px] font-poppins text-gray-700">
              Designed for teens and adults ready to launch a tech career. Learn real world skills through structured programs, projects, and mentorship across 5 levels
            </h4>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/academy/find-courses">
                <button className="px-6 py-2 border border-black text-[#4A2B29] rounded-full text-sm font-poppins">
                  Find course
                </button>
              </Link>
              <Link to="/academy/learn-more">
                <button className="px-6 py-2 border border-black text-[#4A2B29] rounded-full text-sm font-poppins">
                  Learn more
                </button>
              </Link>
            </div>
          </div>

          {/* Pre-Academy Card */}
          <div className="bg-white rounded-3xl shadow-md p-6 w-full max-w-sm flex flex-col items-center text-center gap-4">
            <img src={study2} alt="Pre Academy" className="w-full h-60 object-contain rounded-md" />
            <h3 className="text-xl lg:text-2xl font-bold font-poppins text-black">
              Pre Academy age 10+
            </h3>
            <h4 className="text-[12px] font-poppins text-gray-700">
              Start early, think big. Our Pre-academy introduces kids and young teens to coding, logic , and creative problem solving in a fun, gamified way.
            </h4>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/pre-academy/find-courses">
                <button className="px-6 py-2 border border-black text-[#4A2B29] rounded-full text-sm font-poppins">
                  Find course
                </button>
              </Link>
              <Link to="/pre-academy/learn-more">
                <button className="px-6 py-2 border border-black text-[#4A2B29] rounded-full text-sm font-poppins">
                  Learn more
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudySection;
