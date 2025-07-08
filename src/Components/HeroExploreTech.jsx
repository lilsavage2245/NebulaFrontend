// src/components/HeroExploreTech.jsx
import React from 'react';
import placeholderImage from '../assets/Hero.png.png'; // replace with actual image path

const HeroExploreTech = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-center min-h-[600px] bg-[#008080]">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center gap-8 p-8 lg:p-12 text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight">
          Explore Tech Career Paths
        </h1>

        <p className="text-base sm:text-lg leading-relaxed max-w-xl">
          From creative minds to problem-solvers, the tech industry offers a path for everyone. Explore career options,
          discover the skills required, and find out how Nebula can guide you there. We are also open for industry collaboration and hiring partners.
        </p>

        <div className="flex flex-wrap gap-6">
          <button className="bg-[#FFC925] text-[#4A2B29] px-6 py-2 rounded-lg shadow-lg text-sm hover:scale-105 transition-transform">
            Register role interest
          </button>

          <button className="bg-black text-white px-6 py-2 rounded-lg shadow-lg text-sm hover:scale-105 transition-transform">
            Become a hiring partner
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-[750px] lg:w-1/2 h-[600px]">
        <img
          src={placeholderImage}
          alt="Explore Tech Careers"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroExploreTech;
