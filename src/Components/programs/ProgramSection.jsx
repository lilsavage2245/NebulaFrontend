// ProgramSection.jsx
import React from 'react';
import ProgramCard from './ProgramCard';
import Program1 from '../../assets/Program1.png';
import Program2 from '../../assets/Program2.png';
import Program3 from '../../assets/Program3.png';
import Program4 from '../../assets/Program4.png';
import Program5 from '../../assets/Program5.png';

const ProgramSection = () => {
  const programs = [
    { image: Program5, label: 'Pre-Academy Program' },
    { image: Program2, label: 'Beginner Program' },
    { image: Program3, label: 'Intermediate Program' },
    { image: Program4, label: 'Advanced Program' },
    { image: Program1, label: 'Expert Program' },
  ];

  return (
    <section className="flex flex-col items-start gap-12 w-full max-w-7xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="flex justify-center items-center w-full">
        <h2 className="text-4xl font-bold text-black text-center">Programs We Offer</h2>
      </div>

      {/* Program Cards Grid */}
      <div className="flex flex-wrap gap-y-12 gap-x-6 justify-start items-start w-full">
        {programs.map((program, index) => (
          <ProgramCard key={index} image={program.image} label={program.label} />
        ))}
      </div>
    </section>
  );
};

export default ProgramSection;
