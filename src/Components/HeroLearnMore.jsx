// src/components/HeroLearnMore.jsx
import React from 'react';
import hero1 from '../assets/Hero.png.png'; // Replace with actual image
import hero2 from '../assets/HeroAbout.png';
import hero3 from '../assets/HeroCourse.png';
import bgImg from '../assets/SecHero.png.png'; 

const HeroLearnMore = () => {
  return (
    <section className="relative w-full h-[610px] bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
        >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A144D] opacity-80 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col lg:flex-row justify-between items-start lg:items-center px-6 md:px-12 lg:px-[108px] py-16 h-full gap-8">
        {/* Left Text */}
        <div className="max-w-xl flex flex-col gap-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Your Start To A Future-Proof, Tech Career Starts Here
          </h1>
          <p className="text-base md:text-lg font-medium leading-relaxed">
            The academy track is designed for teens and adults ready to become creators, not just consumers. We guide students to start real tech careers.
          </p>
        </div>

        {/* Right Images */}
        <div className="relative w-full lg:w-[556px] h-[435px] flex items-center justify-center">
          {/* Card 1 */}
          <div className="absolute top-0 left-0 w-[320px] h-[200px] p-6 bg-white bg-opacity-80 text-black rounded-[80px_80px_80px_60px] shadow-lg hover:scale-105 transition-transform duration-300">
            <img src={hero1} alt="Hero 1" className="w-full h-full object-cover rounded-[80px_80px_80px_60px] absolute inset-0 z-0 opacity-30" />
            <div className="relative z-10">
              <button className="mt-auto px-6 py-2 bg-[#FFC925] text-[#4A2B29] font-medium rounded-full shadow-md hover:brightness-110">
                Join a free class
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="absolute bottom-0 left-0 w-[320px] h-[200px] p-6 bg-white text-black rounded-[80px_80px_80px_60px] shadow-lg hover:scale-105 transition-transform duration-300">
            <img src={hero2} alt="Hero 2" className="w-full h-full object-cover rounded-[80px_80px_80px_60px] absolute inset-0 z-0 opacity-30" />
            <div className="relative z-10">
              <button className="mt-auto px-6 py-2 bg-[#FFC925] text-[#4A2B29] font-medium rounded-full shadow-md hover:brightness-110">
                Apply now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="absolute top-[110px] right-0 w-[320px] h-[200px] p-6 bg-white text-black rounded-[80px_80px_80px_60px] shadow-lg hover:scale-105 transition-transform duration-300">
            <img src={hero3} alt="Hero 3" className="w-full h-full object-cover rounded-[80px_80px_80px_60px] absolute inset-0 z-0 opacity-30" />
            <div className="relative z-10 text-right">
              <button className="mt-auto px-6 py-2 bg-[#FFC925] text-[#4A2B29] font-medium rounded-full shadow-md hover:brightness-110">
                Find Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLearnMore;
