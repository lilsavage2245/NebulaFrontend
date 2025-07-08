import React, { useState } from 'react';
import { Check,  } from 'lucide-react';
import SearchBar from './SearchBar';

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Pre-academy'];
const studyModes = [
  'Full-time',
  'Part-time',
  'Flexible',
  'Self paced',
  'Individual modules',
  'Apprenticeships',
];


const CourseFinder = () => {
  const [activeLevel, setActiveLevel] = useState('All');

  return (
    <>
      {/* Overall Heading */}
      <div className="w-full py-10 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-port font-semibold text-black text-center">
          Find the Right Course For You
        </h1>
        <div className="w-20 border-t-[6px] border-[#FFC925] mt-2" />
      </div>

      {/* Course Finder Section */}
      <section className="bg-yellow-300/50 p-4 w-full max-w-6xl mx-auto flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-black">Course Finder</h2>

        {/* Level Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          {levels.map((level) => (
            <button
              key={level}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#EFE3C8] transition-all whitespace-nowrap ${
                activeLevel === level ? 'ring-2 ring-black' : ''
              }`}
              onClick={() => setActiveLevel(level)}
            >
              <Check className="w-4 h-4" />
              <span className="text-sm font-medium text-black">{level}</span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <>
        <SearchBar />
        </>

        {/* Category Links */}
        <div className="flex flex-wrap gap-2 text-black text-base sm:text-lg">
          <span>Beginner courses A-Z</span>
          <span className="hidden sm:inline border-l border-black h-6" />
          <span>Advanced courses A-Z</span>
          <span className="hidden sm:inline border-l border-black h-6" />
          <span>Intermediate courses A-Z</span>
          <span className="hidden sm:inline border-l border-black h-6" />
          <span>Expert courses A-Z</span>
          <span className="hidden sm:inline border-l border-black h-6" />
          <span>Pre - Academy (ages 10+) courses A-Z</span>
        </div>

        {/* Study Modes */}
        <div className="mt-4 flex flex-col items-start gap-2">
          <h3 className="font-semibold text-base text-black">Other ways you can study</h3>
          <ul className="flex flex-col gap-2">
            {studyModes.map((mode) => (
              <li key={mode} className="flex items-center gap-2 text-sm text-black">
                <span className="w-2 h-2 bg-black rounded-full" />
                {mode}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default CourseFinder;
