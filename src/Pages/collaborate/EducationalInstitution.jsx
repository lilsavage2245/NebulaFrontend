// src/Pages/collaborate/IndustryPartnership.jsx
import React from 'react';
import HeroEducation from '../../Components/HeroEducation';
import EducationBenefit from '../../Components/benefit/EducationBenefit';
import EducationType from '../../Components/type/EducationType';
import EducationTestimonials from '../../Components/EducationTestimonials';
import EducationStep from '../../Components/step/EducationStep';
import EducationForm from '../../Components/EducationForm';
import EducationFaqs from '../../Components/EducationFaqs';
import EducationCta from '../../Components/EducationCta';

const EducationalInstitution = () => {
  return (
    <>
    <HeroEducation />
    <EducationBenefit />
    <EducationType />
    <EducationTestimonials />
    <EducationStep />
    <EducationForm />
    <EducationFaqs />
    <EducationCta />
    </>
  );
};
 
export default EducationalInstitution;
