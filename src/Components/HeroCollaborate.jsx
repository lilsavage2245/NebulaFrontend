import React from 'react';
import HeroImage from '../assets/HeroCollaborate.png';

const partners = [
  { label: 'Educational Institution', left: '196px', top: '50px', height: '550px' },
  { label: 'Individual Mentors', left: '0px', top: '85px', height: '480px' },
  { label: 'Community Organizations', left: '784px', top: '85px', height: '480px' },
  { label: 'Corporate Sponsorship', left: '588px', top: '50px', height: '550px' },
  { label: 'Industry Partnership', left: '392px', top: '0px', height: '650px' },
];

const HeroCollaborate = () => {
  return (
    <section className="relative w-full h-[700px] mx-6 bg-white px-4 flex justify-start items-center gap-10 mt-24">
      {/* Collab page head */}
      <div className="flex flex-col justify-center items-start gap-10 w-[390px] h-[400px]">
        <div className="flex flex-col items-start gap-10 w-full">
          <h1 className="text-[45px] leading-[68px] font-poppins font-normal text-black">
            COLLABORATE WITH US
          </h1>
          <div className="w-[200px] border-t-[8px] border-yellow-400" />
        </div>
        <p className="text-[20px] leading-[30px] text-black font-poppins w-full">
          At Nebula Academy we believe great things happen when we work together. Partner with us to inspire innovation, drive community impact and build the next generation of tech talent.
        </p>
        <button className="bg-yellow-400 px-6 py-2 rounded-full text-[#4A2B29] shadow-xl font-poppins text-sm">
          Let’s collaborate
        </button>
      </div>

      {/* Grouped images and buttons */}
      <div className="absolute w-[964px] h-[650px] right-0 top-0 ">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className="absolute bg-white rounded-[32px] shadow-md flex flex-col items-center justify-center"
            style={{ left: partner.left, top: partner.top, width: '180px', height: partner.height }}
          >
            <img src={HeroImage} alt="Hero" className="rounded-[32px] h-[100%] w-full object-cover" />
            <button className="absolute top-[220px] left-[10px] w-[160px] h-[40px] bg-yellow-400 text-[#4A2B29] font-poppins text-sm rounded-full shadow-lg flex items-center justify-center">
              {partner.label}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroCollaborate;
