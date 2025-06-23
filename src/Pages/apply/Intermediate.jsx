// src/Pages/collaborate/IndustryPartnership.jsx
import React from 'react';
import HeroIntermediate from '../../Components/HeroIntermediate';
import IntermediateRequirement from '../../Components/requirements/IntermediateRequirement';
import IntermediateCategories from '../../Components/categories/IntermediateCategories';
import IntermediateOthers from '../../Components/IntermediateOthers';
import IntermediateOutcome from '../../Components/outcome/IntermediateOutcome';
import EventsSection from '../../Components/Events/EventSection';
import IntermediateFaqs from '../../Components/IntermediateFaqs';
import IntermediateTestimonials from '../../Components/IntermediateTestimonials';

const Intermediate = () => {
  return (
    <>
    <HeroIntermediate />
    <IntermediateRequirement />
    <IntermediateCategories />
    <IntermediateOthers />
    <IntermediateOutcome />
    <EventsSection />
    <IntermediateFaqs />
    <IntermediateTestimonials />
    </>
  );
};

export default Intermediate;
