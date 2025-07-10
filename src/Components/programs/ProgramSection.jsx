// ProgramSection.jsx
import React from 'react';
import ProgramCard from './ProgramCard';
import Program2 from '../../assets/Program2.png';
import Program3 from '../../assets/Program3.png';
import Program4 from '../../assets/Program4.png';
import Program5 from '../../assets/Program5.png';

const ProgramSection = () => {
  const programs = [
    { imageSrc: Program5, title: 'Pre-Academy Program', description: 'Come learn, play, and invent your future—one fun project at a time.' },
    { imageSrc: Program2, title: 'Beginner Program', description: 'Come learn, play, and invent your future—one fun project at a time.' },
    { imageSrc: Program3, title: 'Intermediate Program', description: 'Come learn, play, and invent your future—one fun project at a time.' },
    { imageSrc: Program4, title: 'Advanced Program', description: 'Come learn, play, and invent your future—one fun project at a time.' },
    { imageSrc: Program4, title: 'Advanced Program', description: 'Come learn, play, and invent your future—one fun project at a time.' },
  ];

  return (
    <section className="flex flex-col items-center gap-12 w-full max-w-7xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="flex justify-center items-center w-full">
        <h2 className="text-4xl font-bold text-black text-center">Programs We Offer</h2>
      </div>

      {/* Program Cards Grid */}
      <div className="flex flex-wrap gap-y-12 gap-x-6 justify-center items-center w-full">
        {programs.map((program, index) => (
          <ProgramCard key={index} imageSrc={program.imageSrc} title={program.title} description={program.description} />
        ))}
      </div>
    </section>
  );
};

export default ProgramSection;
