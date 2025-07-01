import React from 'react';
import CareerSection from './CareerSection';


const CareerProspectsComponent = () => {
  return (
    <section className="flex flex-col items-start px-2 md:px-4 py-8 gap-10 border-y-[5px] border-[#77777733] w-full max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-[40px] font-bold text-black">Career Prospects</h2>

      {/* Description */}
      <div className="bg-[#77777733] px-6 py-4 w-full text-black font-normal leading-9">
      <h3 className="text-[24px] font-bold text-black"> Level 1: Introduction and Exploration</h3>
      
      <p>While level 1 learners are just beginning their jouney, the foundational skills built here form the first step in a long term pathway toward modern tech careers. From understanding how digital systems work to thinking and creating projects, every activity builds confidence and fluency in the digital world.</p>
      </div>

      <CareerSection />

      {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
            Future Pathways This Year Opens Up:
        </h2>
        <p>By mastering level 1, learners are setting themselves up to:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Progress confidently into block-based programming, robotics and game development in later years.</li>
          <li>Enter higher Pre-Academy levels with a strong grasp of computer logic and creativity.</li>
          <li>Participate in tech clubs, hackathons , or coding competitions at school.</li>
          <li>Develop any early portfolio or projects(animations, games, and digital art).</li>
          <li>Build self-esteem in their ability to solve problems using technology.</li>
        </ul>
      </div>

     {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
            In The Long Run:
        </h2>
        <p>Starting at year 1 may lead them into future interest in:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Software Development.</li>
          <li>Game Design and Animation.</li>
          <li>AI & Robotics.</li>
          <li>Creative Tech Arts.</li>
          <li>Web and App Development.</li>
          <li>STEM Research & Innovation.</li>
        </ul>
      </div>

      {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
            For Parents:
        </h2>
        <p>You are not just enrolling your child in a class - you are giving them a head start in one of the most powerful skillset of the 21st century.</p>
        <h2 className= "text-black font-bold text-lg leading-9">
            For Young Learners This Means:
        </h2>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Seeing themselves as creators, not just users of technology.</li>
          <li>Becoming digitally responsible citizens.</li>
          <li>Discovering what excites them in the world of technology.</li>
        </ul>
      </div>

      {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
            Support For Your Journey
        </h2>
        <p>At Nebula, we believe education is more than just classes - it's about building confidence, feeling supported, and growing as a learner and creator.</p>
        <p>We are committed to helping every child not only succeed in tech but also feel safe, guided, and inspired along the way.</p>
        <p>In addition to expert tutors who make learning engaging and hands-on, your child will benefit from:</p>
        <h2 className= "text-black font-bold text-lg leading-9">
           Our Student Support Includes:
        </h2>
        <ul className="list-disc pl-5 mt-2 space-y-1 font-bold">
          <li>Personal Learning Mentors.
            <p className= "text-black font-normal leading-9">Trained instructors who guide each learner through projects and offers personalized feedback</p>
          </li>
          <li>Emotional and Social Support.
            <p className= "text-black font-normal leading-9">We create a positive learning environment where every students feels heard, encouraged, and included.</p>
          </li>
          <li>Parent Communication.
            <p className= "text-black font-normal leading-9">Regular updates, progress check-ins, and ways for parents to stay involved and informed.</p>
          </li>
          <li>Technical Support Team
            <p className= "text-black font-normal leading-9">For any issues attending classes, devices, or materials - we are just a message away</p>
          </li>
          <li>Community Events and Peer Challenges
            <p className= "text-black font-normal leading-9">From mini coding competitions to fun tech games, students are part of a global learning family</p>
          </li>
        </ul>

        <h2 className= "text-black font-bold text-lg leading-9">
            Life Long Support
        </h2>
        <p>Even after completing the program, your child can continue to:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Join our free tech workshops.</li>
          <li>Access learning resources.</li>
          <li>Receive guidiance on what to study next</li>
          
        </ul>
        <p>Our mission isn't just to teach, but also to nurture future innovators</p>
      </div>

      {/* Recommended For */}
      <div className="bg-[#77777733] px-6 py-4 w-full text-black font-semibold text-lg leading-9">
        <p>Recommended For:</p>
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

export default CareerProspectsComponent;
