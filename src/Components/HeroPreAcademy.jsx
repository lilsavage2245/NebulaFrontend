import React from 'react';
import { ArrowRight } from 'lucide-react';
import PreAcademyImage from '../assets/Course1.png';
import { Lightbulb, Palette, Cpu } from 'lucide-react';

export default function HeroPreAcademy() {
  return (
    <section className="relative w-full bg-white ">
      <div className="flex flex-col md:flex-row w-full max-w-[1500px] mx-auto min-h-[720px]">
        {/* Left Section */}
        <div className="flex flex-col justify-start px-8 md:px-14 lg:px-20 py-10 gap-16 bg-[#008080] w-full md:w-3/5">
          <h1 className="text-white text-4xl md:text-5xl font-bold font-poppins leading-tight">
            NEBULA PRE - ACADEMY PROGRAM
          </h1>
          <p className="text-white text-base md:text-lg font-poppins">
            Welcome to the Pre-Academy program at Nebula Academy where young learners aged 10 - 16 embark on exciting, creative adventures into the world of coding. Designed specifically to nurture early interest in technology, our fun, interactive and safe courses inspire curiosity, confidence and critical thinking skills. With no previous coding experience required, your child can start building valuable digital skills today. Apply now and help your child unlock a future filled with creativity and innovation!
          </p>
          <button className="flex items-center gap-2 bg-white text-[#4A2B29] px-6 py-2 rounded-md shadow-lg w-fit">
            <span className="text-sm font-poppins">Start Application</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex w-2/5 h-[720px]">
          <img
            src={PreAcademyImage}
            alt="Pre Academy Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Unlocking Section */}
      <div className="absolute bottom-0 left-0 right-1/4 bg-[#CFE6EC] flex items-center px-8 md:px-16 py-6 gap-6 flex-wrap">
       

        {/* Card 1 */}
        <div className="flex flex-col items-start gap-2 w-[308px]">
          <Lightbulb className="w-10 h-10 text-black" />
          <h3 className="font-bold text-black text-lg font-poppins">Critical Thinking</h3>
          <p className="text-black text-sm font-poppins">Make your website user friendly and look more professional</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start gap-2 w-[308px]">
          <Palette className="w-10 h-10 text-black" />
          <h3 className="font-bold text-black text-lg font-poppins">Creativity</h3>
          <p className="text-black text-sm font-poppins">Make your website user friendly and look more professional</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-start gap-2 w-[308px]">
          <Cpu className="w-10 h-10 text-black" />
          <h3 className="font-bold text-black text-lg font-poppins">Technical Competence</h3>
          <p className="text-black text-sm font-poppins">Make your website user friendly and look more professional</p>
        </div>
      </div>
    </section>
  );
}
