// src/components/AcademyStructure.jsx
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CardImg from '../assets/Study1.png'; // Replace with your actual image path

const structureData = [
  { level: 'Beginner', image: CardImg },
  { level: 'Intermediate', image: CardImg },
  { level: 'Advanced', image: CardImg },
];

const AcademyStructure = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 420;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full px-6 sm:px-10 py-16 relative border-b-[5px] border-black-200">
      {/* Vector 37 Line */}
      <div className="w-20 border-t-[12px] border-yellow-400 mb-4"></div>

      <h2 className="text-[40px] font-bold text-black font-poppins mb-2">
        Academy Structure
      </h2>

      <div className="border-t-[5px] border-gray-300 w-full max-w-4xl mb-6"></div>

      <div className="relative">
        {/* Left Chevron */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
        >
          <ChevronLeft size={30} />
        </button>

        {/* Card Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
        >
          {structureData.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[300px] sm:min-w-[380px] md:min-w-[400px] h-[450px] rounded-lg shadow-xl bg-white relative"
            >
              {/* Yellow Banner */}
              <div className="absolute top-0 left-0 w-full h-[150px] bg-yellow-400 bg-opacity-95 rounded-t-lg z-10">
                <h3 className="text-white text-[32px] sm:text-[38px] font-bold pl-6 pt-8">
                  {item.level}
                </h3>
              </div>

              {/* Background Image */}
              <img
                src={item.image}
                alt={item.level}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Right Chevron */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </section>
  );
};

export default AcademyStructure;
