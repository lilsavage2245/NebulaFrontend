// HelpSection.jsx
import React from 'react';

const HelpSection = () => {
  return (
    <section className="bg-yellow-300/35 w-full max-w-7xl mx-auto px-6 py-10 flex flex-col gap-10 rounded-xl">
      <h2 className="text-xl md:text-2xl font-bold text-black">
        NEED HELP DECIDING WHICH PROGRAM TO ENROLL?
      </h2>

      {/* Chat Section */}
      <div className="flex flex-col gap-4">
        <p className="text-base text-black">
          Chat with our career assistant team
        </p>
        <button className="bg-[#FFC925] text-[#4A2B29] px-6 py-2 rounded-full shadow-md text-sm font-medium w-max">
          Chat now
        </button>
      </div>

      {/* Assessment Section */}
      <div className="flex flex-col gap-4">
        <p className="text-base text-black">
          Take a quick placement assessment
        </p>
        <button className="bg-[#FFC925] text-[#4A2B29] px-6 py-2 rounded-full shadow-md text-sm font-medium w-max">
          Start
        </button>
      </div>
    </section>
  );
};

export default HelpSection;
