// src/pages/Courses.jsx
import React from 'react';
import HeroCourses from '../Components/HeroCourses';
import CourseFinderSection from '../Components/CourseFinderSection';
import ProgramSection from '../Components/programs/ProgramSection';
import HelpSection from '../Components/HelpSection';
import CategorySection from '../Components/category/CategorySection';
import BenefitSection from '../Components/benefits/BenefitSection';
import FaqsSection from '../Components/FaqsSection';
import Logo from '../Components/Logo';

const Courses = () => {
  return (
    <>
      <HeroCourses />
      <CourseFinderSection />
      <ProgramSection />
      <HelpSection />
      <CategorySection />
      <BenefitSection />
      <FaqsSection />
      <Logo />
    </>
  );
};

export default Courses;
