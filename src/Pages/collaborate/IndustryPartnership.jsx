// src/Pages/collaborate/IndustryPartnership.jsx
import React from 'react';
import HeroIndustry from '../../Components/HeroIndustry';
import IndustryBenefit from '../../Components/benefit/IndustryBenefit';
import IndustryType from '../../Components/type/IndustryType';
import IndustryPartners from '../../Components/IndustryPartners';
import IndustryStep from '../../Components/step/IndustryStep.jsx';
import IndustryForm from '../../Components/IndustryForm.jsx';
import IndustryTestimonial from '../../Components/IndustryTestimonial.jsx';
import IndustryFaqs from '../../Components/IndustryFaqs.jsx';
import IndustryCta from '../../Components/IndustryCta.jsx';

const IndustryPartnership = () => {
  return (
    <>
    <HeroIndustry />
    <IndustryBenefit />
    <IndustryType />
    <IndustryPartners />
    <IndustryStep />
    <IndustryForm />
    <IndustryTestimonial />
    <IndustryFaqs />
    <IndustryCta />
    </>
  );
};

export default IndustryPartnership;
