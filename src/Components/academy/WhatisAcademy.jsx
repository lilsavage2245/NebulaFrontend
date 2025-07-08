// src/components/WhatisAcademy.jsx
import React from 'react';
import AcademyCard from './AcademyCard';
import academyImg1 from '../../assets/Benefit1.png';
import academyImg2 from '../../assets/Course2.png';
import academyImg3 from '../../assets/Course3.png';
import academyImg4 from '../../assets/Course4.png';

const WhatisAcademy = () => {
  const cards = [
    { level: 'Beginner', image: academyImg1 },
    { level: 'Intermediate', image: academyImg2 },
    { level: 'Advanced', image: academyImg3 },
    { level: 'Expert', image: academyImg4 },
  ];

  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-20 py-20 bg-white border-b-[5px] border-black-200">
      {/* Section Heading */}
      <div className="mb-2 max-w-2xl">
        <div className="w-[85px] border-t-[12px] border-yellow-400 mb-6" />
        <h2 className="text-4xl lg:text-[40px] font-extrabold text-black leading-[60px] font-poppins">
          What Is Academy
        </h2>
        <p className="mt-6 text-lg lg:text-[20px] leading-[30px] text-black">
          Lorem ipsum tincidunt fermentum eget purus luctus libero ac ultricies quis
          et malesuada egestas purus urna non dignissim hendrerit erat ac vestibulum sed nunc sit diam.
        </p>
      </div>

      {/* Step Cards */}
      <div className="relative w-full h-[500px] lg:h-[650px] mt-6">
        <div className="absolute right-0 top-0 z-10" style={{ transform: 'translateY(0%)' }}>
          <AcademyCard image={cards[0].image} level={cards[0].level} />
        </div>
        <div className="absolute right-[20%] top-[10%] z-20" style={{ transform: 'translateY(10%)' }}>
          <AcademyCard image={cards[1].image} level={cards[1].level} />
        </div>
        <div className="absolute right-[40%] top-[20%] z-30" style={{ transform: 'translateY(20%)' }}>
          <AcademyCard image={cards[2].image} level={cards[2].level} />
        </div>
        <div className="absolute right-[60%] top-[30%] z-40" style={{ transform: 'translateY(30%)' }}>
          <AcademyCard image={cards[3].image} level={cards[3].level} />
        </div>
      </div>

      {/* Specialization Paragraph */}
      <p className="mt-[8px] lg:mt-[40px] text-lg lg:text-[20px] leading-[30px] text-black max-w-[700px] ml-auto">
        Some multiple specialization such as Web Development, Data Science, Some multiple specialization such as
        Web Development, Data Science, Some multiple specialization such as Web Development, Data Science...
      </p>
    </section>
  );
};

export default WhatisAcademy;
