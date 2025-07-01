import React from 'react';
import CurriculumSection from './curriculum/CurriculumSection';
//import { ChevronLeft, ChevronRight } from 'lucide-react';
//import scratchImg from '../assets/apple.png'; // Use actual paths
//import codeImg from '../assets/Outcome1.png';
//import idnImg from '../assets/Others2.png';

const CurriculumComponent = () => {
  return (
    <section className="flex flex-col items-start px-2 md:px-4 py-8 gap-10 border-y-[5px] border-[#77777733] w-full max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-[40px] font-bold text-black">Curriculum</h2>

     {/* Description */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
         <h2 className=  "text-black font-bold text-lg leading-9">
            Theme:  Laying the Digital Foundation
         </h2>
         <h2 className=  "text-black font-bold text-lg leading-9">
            Description
         </h2>
    
        <h3 className=  "text-black font-normal text-lg leading-9">
           The first level of the Pre-academy journey is all about sparking curiosity, developing core digital skill, and nurturing a love for technology through exploration and creativity. Tailored for learners aged 10+, this year introduces students to the digital world - from navigating devices to building animations, playing with robotics, and telling digital stories.
        </h3>
        </div>

     <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
        <CurriculumSection />
        </div>   

      
      {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
            Teaching, Learning , and Assessment
        </h2>
        <p>At Nebula Code Academy, we believe that learning should be hands-on, creative and rewarding, especially for young mind. That’s why every module in our Pre-academy Program comes with a unique project and an opportunity to earn a badge.:</p>
        
      </div>

      {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
            Hands-on Project
        </h2>
        <p>At the end of each module, learners complete a mini project that applies the skills they have gained in a fun and creative way. These projects helps reinforce learners and give students something they can proudly showcase.</p>
        <h2 className= "text-black font-bold text-lg leading-9">
            Example:
        </h2>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Design a poster on “Online safety”.</li>
          <li>Create an animated story on scratch.</li>
          <li>Build a simple LEGO robot that reacts to light.</li>
          <li>Design your first digital comic strip.</li>
        </ul>
        <p>Each project is age appropriate, mentor guided, and encourages creativity, problem solving, and personal expression</p>
      </div>

       {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
            Achievement Badges
        </h2>
        <p>Each completed module and project earns the student a digital badge that reflects their efforts and progress. These badges are designed in their personal dashboard and can be:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Downloaded as certificate.</li>
          <li>Printed for offline motivation.</li>
          <li>Used to unlock new learning contents or challenges.</li>
        </ul>
      </div>

      {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
            Achievement Badges
        </h2>
        <p>Each completed module and project earns the student a digital badge that reflects their efforts and progress. These badges are designed in their personal dashboard and can be:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Downloaded as certificate.</li>
          <li>Printed for offline motivation.</li>
          <li>Used to unlock new learning contents or challenges.</li>
        </ul>
      </div>

       {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
            Sample Badges
        </h2>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Digital Navigator (For completing digital literacy).</li>
          <li>Visual Coder (For scratch programming).</li>
          <li>STEM explorer.</li>
          <li>Creative story teller.</li>
        </ul>
      </div>



      {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
            Why It Matters
        </h2>
        <p>Badges and Projects:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Make learning visible and motivating.</li>
          <li>Gives students a sense ownership and achievement.</li>
          <li>Helps parents track progress in a non-academic but measureable way.</li>
          <li>Inspires learners to level up to the next year.</li>
        </ul>
      </div>
    </section>
  );
};

export default CurriculumComponent;
