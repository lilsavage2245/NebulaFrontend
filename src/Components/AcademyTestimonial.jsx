import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import teamImage from '../assets/Team1.png'; // Replace with correct path

const testimonials = [
  {
    name: 'Martin Okoye',
    role: 'Current student',
    message:
      'Lorem ipsum nisl scelerisque pellentesque tellus blandit urna et aliquet eget non donec porta purus auctor ornare tortor sed nec nulla mattis lobortis volutpat a volutpat tincidunt habitasse odio proin interdum sapien tellus suspendisse leo turpis enim vitae accumsan tincidunt netus adipiscing montes neque ullamcorper.',
    image: teamImage,
  },
  {
    name: 'Ada Smith',
    role: 'Graduate',
    message:
      'The academy gave me more than just skills. It gave me confidence. I went from zero knowledge to building full-stack projects in months.',
    image: teamImage,
  },
  {
    name: 'John Doe',
    role: 'Current student',
    message:
      'I love the community and the structure. The mentors are amazing and always willing to help. I highly recommend it.',
    image: teamImage,
  },
];

const AcademyTestimonial = () => {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full max-w-[1512px] mx-auto py-16 px-4 border-b-[5px] border-black-200">
      <h2 className="text-[40px] font-bold text-center text-black font-poppins mb-8">
        What students say
      </h2>

      <div className="flex items-center justify-center gap-6 mb-6 relative z-10">
        <span className="w-[120px] border-t-4 border-black" />
        <span className="w-[100px] h-[100px] bg-teal-500/70 rounded-full relative">
          <Quote size={60} className="absolute text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </span>
        <span className="w-[120px] border-t-4 border-black" />
      </div>

      <p className="text-center font-poppins text-[20px] leading-[30px] text-black mb-10">
        {current.message}
      </p>

      <div className="flex justify-center mb-4">
        <img
          src={current.image}
          alt={current.name}
          className="w-[130px] h-[130px] rounded-full object-cover"
        />
      </div>

      <div className="text-center font-poppins">
        <h3 className="text-[30px] font-semibold text-black">{current.name}</h3>
        <p className="text-[25px] text-black">{current.role}</p>
      </div>

      <div className="flex justify-between items-center mt-8 px-12">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default AcademyTestimonial;
