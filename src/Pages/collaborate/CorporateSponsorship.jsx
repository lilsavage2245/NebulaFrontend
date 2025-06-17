// src/Pages/collaborate/IndustryPartnership.jsx
import React from 'react';
import HeroCorporate from '../../Components/HeroCorporate';
import CorporateBenefit from '../../Components/benefit/CorporateBenefit';
import CorporateType from '../../Components/type/CorporateType';
import SponsorshipTiers from '../../Components/sponsorship/SponsorshipTiers';
import CorporateTestimonials from '../../Components/CorporateTestimonials';
import CorporateForm from '../../Components/CorporateForm';
import CorporateFaqs from '../../Components/CorporateFaqs';
import CorporateCta from '../../Components/CorporateCta';

const CorporateSponsorship = () => {
  return (
    <>
    <HeroCorporate />
    <CorporateBenefit />
    <CorporateType />
    <SponsorshipTiers />
    <CorporateTestimonials />
    <CorporateForm />
    <CorporateFaqs />
    <CorporateCta />
    </>
  );
};

export default CorporateSponsorship;
