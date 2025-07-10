// src/Components/FreeClassSection.jsx

import React from 'react';
import FreeClassCard from './FreeClassCard';
import FreeClassImg from '../../assets/Course4.png'; // update path as needed

export default function FreeClassSection() {
  const sessions = [
    {
      image: FreeClassImg,
      title: 'How to Build a Website',
      level: 'Beginner',
      date: '25th Sept, 2025',
      reserved: true,
    },
    {
      image: FreeClassImg,
      title: 'Intro to Python Programming',
      level: 'Intermediate',
      date: '27th Sept, 2025',
      reserved: false,
    },
    {
      image: FreeClassImg,
      title: 'Game Development Basics',
      level: 'Pre-Academy',
      date: '29th Sept, 2025',
      reserved: true,
    },
  ];

  return (
    <section className="w-full px-4 md:px-16 py-20 bg-white border border-black ">
      <h2 className="text-[36px] md:text-4x1 font-bold text-center text-black mb-12">
        Upcoming Free Classes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {sessions.map((session, index) => (
          <FreeClassCard key={index} {...session} />
        ))}
      </div>
      {/* Load More Button */}
      <div className="flex justify-center mt-16">
        <button className="flex items-center justify-center px-6 py-2 gap-2 bg-[#008080] shadow-[0px_16px_24px_2px_rgba(0,0,0,0.25)]">
          <span className="text-[14px] font-normal leading-[20px] text-[#4A2B29] font-['Poppins']">
            Load More
          </span>
        </button>
      </div>
    </section>
  );
}
