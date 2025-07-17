import React, { useState } from 'react';
import { Quote } from 'lucide-react';
import teamImage from '../assets/Team1.png'; // Replace with correct path

const testimonials = [
  {
    name: 'Oluchi Okoye',
    role: 'CEO, Nebula Academy',
    message:
      ' Our goal is to bridge education and real careers with the right skills and mentorship. Nebula students can become tech leaders of tomorrow. Our career explorer is designed to guide, inspire, and connect students with future opportunities',
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

const CareerBenefits = () => {
  const [index, ] = useState(0);
  const current = testimonials[index];

 

  return (
    <section className="relative w-full max-w-[900px] mx-auto py-16 px-4 border-b-[5px] border-black-200">
      <h2 className="text-4xl font-bold text-center text-black font-poppins mb-6">
        Why We Built This Page
      </h2>

      <div className="flex items-center justify-center gap-4 mb-6 relative z-10">
        <span className="w-[120px] border-t-4 border-black" />
        <span className="w-[80px] h-[80px] bg-teal-500/70 rounded-full relative">
          <Quote size={60} className="absolute text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </span>
        <span className="w-[120px] border-t-4 border-black" />
      </div>

      <p className="text-center font-poppins text-[16px] leading-[30px] text-black mb-10">
        {current.message}
      </p>

      <div className="flex justify-center mb-4">
        <img
          src={current.image}
          alt={current.name}
          className="w-[90px] h-[90px] rounded-full object-cover"
        />
      </div>

      <div className="text-center font-poppins">
        <h3 className="text-[21px] font-semibold text-black">{current.name}</h3>
        <p className="text-[18px] text-black">{current.role}</p>
      </div>
        
    </section>
  );
};

export default CareerBenefits;
