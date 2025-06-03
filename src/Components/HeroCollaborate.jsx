// HeroCollaborate.jsx
import React from 'react';
import heroImage from '../assets/HeroCollaborate.png';

const HeroCollaborate = () => {
  return (
    <section className="w-full flex justify-center items-center px-4 py-10 bg-[rgba(0,128,128,0.35)] rounded-[24px] max-w-[1337px] mx-auto my-12 flex-col md:flex-row gap-8">
      <div className="flex flex-col justify-center items-start gap-10 w-full max-w-[522px]">
        <div className="flex flex-col gap-6">
          <h1 className="text-[45px] leading-[36px] font-poppins font-normal text-black">
            COLLABORATE WITH US
          </h1>
          <div className="w-[392px] border-t-[8px] border-[#FFC925]" />
        </div>
        <p className="text-[20px] leading-[30px] font-poppins text-black">
          At Nebula Academy we believe great things happen when we work together. Partner with us to inspire innovation, drive community impact and build the next generation of tech talent.
        </p>
      </div>

      <div className="w-full max-w-[750px] h-[400px] rounded-[0px_150px_0px_150px] overflow-hidden">
        <img
          src={heroImage}
          alt="Collaboration Visual"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroCollaborate;
