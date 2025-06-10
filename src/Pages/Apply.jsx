// src/Pages/Apply.jsx
import React from 'react';
import MiniNavbar from '../Components/MiniNavbar';
import HeroApply from '../Components/HeroApply';
import ApplyProgramSection from '../Components/programs/ApplyProgramSection';
import ApplyOptionSection from '../Components/apply-options/ApplyOptionSection';
import EnquirySection from '../Components/EnquirySection';
import FaqsApply from '../Components/FaqsApply';
import AssistanceSection from '../Components/AssistanceSection';

const Apply = () => {
  return (
    <>
    <MiniNavbar />
    <HeroApply />
    <ApplyProgramSection />
    <ApplyOptionSection />
    <EnquirySection />
    <FaqsApply />
    <AssistanceSection />
    </>
  );
};

export default Apply;
