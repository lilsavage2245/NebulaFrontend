// src/Pages/Apply.jsx
import React from 'react';
import MiniNavbar from '../Components/MiniNavbar';
import ProgramSection from '../components/ProgramSection';

const Apply = () => {
  return (
    <div className="flex flex-col min-h-screen"> 
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <MiniNavbar.jsx />
          <ProgramSection />
        </div>
    </div>
  );
};

export default Apply;
