// src/components/CareersSection.jsx
import React from 'react';
import CareerImg from '../assets/Study2.png'; // Replace with actual images

const careerPaths = [
  'Software and Web',
  'Games and Creative Tech',
  'A.I and Data',
  'Systems Infrastructure',
  'Cyber and Network',
  'Robotics and IOT',
  'Tech Strategy and Product'
];

const CareersSection = () => {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-20 bg-white flex flex-col items-center gap-16 border-b-[5px] border-black-200">
      {/* Title */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-[95px] border-t-[5px] border-[#FFC925]" />
        <h2 className="text-[32px] font-bold font-poppins text-black">Our Career Paths</h2>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 max-w-[1272px] w-full">
        {careerPaths.map((title, idx) => (
          <div key={idx} className="w-[299px] h-[310px] flex flex-col items-start shadow-md rounded-tr-[150px] overflow-hidden hover:scale-[1.02] transition duration-300">
            <div
              className="w-full h-[250px] bg-cover bg-center"
              style={{ backgroundImage: `url(${CareerImg})` }}
            ></div>
            <div className="w-full h-[60px] flex justify-center items-center bg-[#008080] px-4">
              <span className="text-white text-[16px] font-poppins">{title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareersSection;
