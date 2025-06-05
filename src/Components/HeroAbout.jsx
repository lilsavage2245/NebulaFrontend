// HeroAbout.jsx
import React from 'react';
import HeroAboutImage from '../assets/HeroAbout.png';

const HeroAbout = () => {
  return (
    <section className="w-full flex justify-center mt-12 mb-32">
  <div className="w-[1275px] bg-teal-500/40 rounded-[24px] flex flex-col lg:flex-row justify-between items-center gap-[31px] px-4 py-8">
      {/* Left content */}
      <div className="flex flex-col gap-8 max-w-xl text-left">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black font-poppins">
            THE NEBULA ACADEMY
          </h1>
          <div className="w-[280px] border-t-[10px] border-[#FFC925]" />
        </div>

        <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-poppins text-black">
          At Nebula Academy, we are more than just a coding school. We are a community committed
          to excellence, innovation and collaboration. Discover our story, connect with the
          inspiring team driving our mission, and explore what studying at Nebula Academy can do
          for your future in tech.
        </p>
      </div>

      {/* Right image */}
      <div className="max-w-[740px] h-[500px] rounded-[0_150px_0_150px] overflow-hidden">
        <img
          src={HeroAboutImage}
          alt="Hero About Nebula"
          className="w-full h-full object-cover"
        />
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
