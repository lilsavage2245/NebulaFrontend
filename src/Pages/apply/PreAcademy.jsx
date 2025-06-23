// src/Pages/collaborate/IndustryPartnership.jsx
import React from 'react';
import HeroPreAcademy from '../../Components/HeroPreAcademy';
import PreAcademyRequirement from '../../Components/requirements/PreAcademyRequirement';
import PreAcademyCategories from '../../Components/categories/PreAcademyCategory';
import PreAcademyOthers from '../../Components/PreAcademyOthers';
import PreAcademyOutcome from '../../Components/outcome/PreAcademyOutcome';
import EventsSection from '../../Components/Events/EventSection';
import PreAcademyFaqs from '../../Components/PreAcademyFaqs';
import PreAcademyTestimonials from '../../Components/PreAcademyTestimonials';

const PreAcademy = () => {
  return (
    <>
    <HeroPreAcademy />
    <PreAcademyRequirement />
    <PreAcademyCategories />
    <PreAcademyOthers />
    <PreAcademyOutcome />
    <EventsSection />
    <PreAcademyFaqs />
    <PreAcademyTestimonials />
    </>
  );
};

export default PreAcademy;
