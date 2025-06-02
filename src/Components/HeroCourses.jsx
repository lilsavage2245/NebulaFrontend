// src/components/Courses/HeroCourse.jsx
import React from 'react';
import heroImage from '../assets/HeroCourse.png';
import { Link } from 'react-router-dom';

const HeroCourse = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-8 gap-8 w-full max-w-7xl mx-auto">
      {/* Title and Underline */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl sm:text-5xl font-port font-normal text-black text-center">
          Courses
        </h2>
        <div className="w-32 h-1 border-b-[5px] border-yellow-400" />
      </div>

      {/* Hero Frame */}
      <div className="flex flex-col md:flex-row items-center gap-8 w-full p-4 sm:p-6 lg:p-8 bg-teal-600/45 rounded-3xl">
        {/* Text Section */}
        <div className="flex flex-col justify-between items-start gap-8 max-w-md text-center md:text-left">
          <p className="text-lg sm:text-xl font-port leading-relaxed text-black font-port lligat sans">
            We offer a range of high quality courses from pre-academy courses to beginner’s courses to intermediate courses and to advanced courses.
            Study options includes full-time, part-time, and flexible learning.
          </p>
          <Link to="/apply">
            <button className="px-6 py-2 bg-yellow-400 text-[#4A2B29] text-sm font-poppins rounded-full shadow-lg hover:bg-yellow-300">
              Apply Now
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[804px] h-[300px] md:h-[400px] rounded-r-[150px] overflow-hidden bg-white">
          <img
            src={heroImage}
            alt="Hero Courses"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroCourse;
