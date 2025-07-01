import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import scratchImg from '../assets/apple.png'; // Use actual paths
import codeImg from '../assets/Outcome1.png';
import idnImg from '../assets/Others2.png';

const OverviewComponent = () => {
  return (
    <section className="flex flex-col items-start px-2 md:px-4 py-8 gap-[48px] border-y-[5px] border-[#77777733] w-full max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-[40px] font-bold text-black">Overview</h2>

      {/* Description */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[32px]">
         <h2 className=  "text-black font-bold text-lg leading-9">
            Description
         </h2>
      <h3 className=  "text-black font-semibold text-lg leading-9">
        Year 1 of the Pre-Academy program is designed to ignite curiosity and gently introduce learners aged 10+ to the world of technology and digital thinking. Through fun, gamified learning experiences, students...
        </h3>
        <h3 className=  "text-black font-normal text-lg leading-9">
            Through fun, gamified learning experiences, students explore the foundational concepts of computer science, digital literacy, and creative problem-solving. This year focuses on building digital confidence in a playful environment - Using tools like Scratch, Interactive games, and story telling platform to teach core concepts without overwhelming complexity.
        </h3>
         <h3 className=  "text-black font-normal text-lg leading-9">
            No prior experience is needed. The goal is to craete excitement about technology while developing the problem solving mindset that's essential for future levels. 
         </h3>
      </div>

      {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
            Learning Outcome
        </h2>
        <p>By the end of level 1 learners will:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Understand what computers are</li>
          <li>Operate computers and navigate</li>
          <li>Have built their first robot anima</li>
          <li>Feel empowered as creators, not just consumers</li>
        </ul>
      </div>

      {/* Learning Philosophy */}
      <div className="px-6 py-4 w-full text-black font-semibold text-lg leading-9 flex flex-col items-center">
        <h2 className="text-black font-bold text-lg leading-9 mb-4">Learning Philosophy</h2>
        <p className="text-center font-normal">
          “Our approach is exploration-first, result-second.” Learners are encouraged to try, play, make mistakes and ask Why at every turn.
        </p>
        <p className="mt-4 text-sm font-bold">Founder: Oluchi Okoye</p>
      </div>

      {/* Learning Tools */}
      <div className="w-full border-y border-black py-4 flex flex-col items-center gap-4">
        <h3 className="text-xl font-bold text-center text-black">Learning Tools Used</h3>

        <div className="flex items-center justify-center gap-8">
          <ChevronLeft size={40} className="text-gray-600 cursor-pointer" />

          <div className="flex gap-6">
            {/* Tool 1 */}
            <div className="flex flex-col items-center gap-2 w-[150px]">
              <img src={scratchImg} alt="Scratch" className="w-[150px] h-[100px] object-cover bg-gray-300" />
              <p className="text-center text-black text-sm">Scratch</p>
            </div>
            {/* Tool 2 */}
            <div className="flex flex-col items-center gap-2 w-[150px]">
              <img src={codeImg} alt="Code.org Puzzle" className="w-[150px] h-[100px] object-cover bg-gray-300" />
              <p className="text-center text-black text-sm">Code.org Puzzle</p>
            </div>
            {/* Tool 3 */}
            <div className="flex flex-col items-center gap-2 w-[150px]">
              <img src={idnImg} alt="IDN" className="w-[150px] h-[100px] object-cover bg-gray-300" />
              <p className="text-center text-black text-sm">I.D.N</p>
            </div>
          </div>

          <ChevronRight size={40} className="text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Recommended For */}
      <div className="bg-[#77777733] px-6 py-4 w-full text-black font-semibold text-lg leading-9">
        <p className="text-start text-[24px] font-bold">
            Recommended For:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Learners aged 10 to 12</li>
          <li>Absolute beginners</li>
          <li>Kids curious about computers</li>
          <li>Parents or guardians seeking structured and meaningful screen time</li>
        </ul>
      </div>
    </section>
  );
};

export default OverviewComponent;
