// src/Pages/collaborate/IndustryPartnership.jsx
import React from 'react';
import HeroBeginner from '../../Components/HeroBeginner';
import BeginnerRequirement from '../../Components/requirements/BeginnerRequirement';
import BeginnerCategories from '../../Components/categories/BeginnerCategories';
import BeginnerOthers from '../../Components/BeginnerOthers';
import BeginnerOutcome from '../../Components/outcome/BeginnerOutcome';
import EventsSection from '../../Components/Events/EventSection';
import BeginnerFaqs from '../../Components/BeginnerFaqs';
import BeginnerTestimonials from '../../Components/BeginnerTestimonials';

const Beginners = () => {
  return (
    <>
    <HeroBeginner />
    <BeginnerRequirement />
    <BeginnerCategories />
    <BeginnerOthers />
    <BeginnerOutcome />
    <EventsSection />
    <BeginnerFaqs />
    <BeginnerTestimonials />
    </>
  );
};

export default Beginners;
