// src/Pages/collaborate/IndustryPartnership.jsx
import React from 'react';
import HeroCommunity from '../../Components/HeroCommunity';
import CommunityBenefit from '../../Components/benefit/CommunityBenefit';
import CommunityType from '../../Components/type/CommunityType';
import CommunityTestimonials from '../../Components/CommunityTestimonials';
import CommunityStep from '../../Components/step/CommunityStep';
import CommunityForm from '../../Components/CommunityForm';
import CommunityCta from '../../Components/CommunityCta';
import CommunityFaqs from '../../Components/CommunityFaqs';

const CommunityOrganization = () => {
  return (
    <>
    <HeroCommunity />
    <CommunityBenefit />
    <CommunityType />
    <CommunityTestimonials />
    <CommunityStep />
    <CommunityForm />
    <CommunityFaqs />
    <CommunityCta />
    </>
  );
};

export default CommunityOrganization;
