// src/Pages/collaborate/IndustryPartnership.jsx
import React from 'react';
import HeroAdvanced from '../../Components/HeroAdvanced';
import AdvancedRequirement from '../../Components/requirements/AdvancedRequirement';
import AdvancedCategories from '../../Components/categories/AdvancedCategories';
import AdvancedOthers from '../../Components/AdvancedOthers';
import AdvancedOutcome from '../../Components/outcome/AdvancedOutcome';
import EventsSection from '../../Components/Events/EventSection';
import AdvancedFaqs from '../../Components/AdvancedFaqs';
import AdvancedTestimonials from '../../Components/AdvancedTestimonials';

const Advanced = () => {
  return (
    <>
    <HeroAdvanced />
    <AdvancedRequirement />
    <AdvancedCategories />
    <AdvancedOthers />
    <AdvancedOutcome />
    <EventsSection />
    <AdvancedFaqs />
    <AdvancedTestimonials />
    </>
  );
};

export default Advanced;
