// src/Pages/About.jsx
import React from 'react';
import AboutNavbar from '../Components/AboutNavbar';
import HeroAbout from '../Components/HeroAbout';
import PartnershipStories from '../Components/partnershipstories/PartnershipStories';
import OurTeamSection from '../Components/ourteam/OurTeamSection';
import NewsSection from '../Components/News/NewsSection';
import FinalCtaSection from '../Components/FinalCtaSection';

const About = () => {
  return (
    <>
    <AboutNavbar />
    <HeroAbout />
    <PartnershipStories />
    <OurTeamSection />
    <NewsSection />
    <FinalCtaSection />

    </>
  );
};

export default About;
