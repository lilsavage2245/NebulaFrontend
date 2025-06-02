// src/pages/Courses.jsx
import React from 'react';
import HeroCourses from '../Components/HeroCourses';
import CourseFinderSection from '../Components/CourseFinderSection';
import ProgramSection from '../Components/programs/ProgramSection';
import HelpSection from '../Components/HelpSection';
import HotSection from '../Components/hot/HotSection';
import BenefitSection from '../Components/benefits/BenefitSection';
import FaqsSection from '../Components/FaqsSection';

const Courses = () => {
  return (
    <>
      <HeroCourses />
      <CourseFinderSection />
      <ProgramSection />
      <HelpSection />
      <HotSection />
      <BenefitSection />
      <FaqsSection />
    </>
  );
};

export default Courses;
