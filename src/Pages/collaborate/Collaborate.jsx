// src/Pages/Apply.jsx
import React from 'react';
import MiniHeaderCollab from '../../Components/MiniHeaderCollab';
import HeroCollaborate from '../../Components/HeroCollaborate';
import CollaborateSection from '../../Components/Collaborate/CollaborateSection';
import PartnershipStories from '../../Components/partnershipstories/PartnershipStories';
import NewsSection from '../../Components/News/NewsSection';
import FaqsCollaboration from '../../Components/FaqsCollaboration';

const Collaborate = () => {
  return (
    <>
    <MiniHeaderCollab />
    <HeroCollaborate />
    <CollaborateSection />
    <PartnershipStories />
    <NewsSection />
    <FaqsCollaboration />
    </>
  );
};

export default Collaborate;
