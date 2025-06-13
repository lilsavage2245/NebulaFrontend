// src/Pages/About.jsx
import React from 'react';
import AboutNavbar from '../Components/AboutNavbar';
import HeroAbout from '../Components/HeroAbout';
import PartnershipStories from '../Components/partnershipstories/PartnershipStories';
import OurTeamSection from '../Components/ourteam/OurTeamSection';
import NewsSection from '../Components/News/NewsSection';
import Newsletter from '../Components/Newsletter';
import LatestArticleSection from '../Components/LatestArticle/LatestArticleSection';
import EventsSection from '../Components/Events/EventSection';
import FinalCtaSection from '../Components/FinalCtaSection';

const About = () => {
  return (
    <>
    <AboutNavbar />
    <HeroAbout />
    <PartnershipStories />
    <OurTeamSection />
    <NewsSection />
    <Newsletter />
    <LatestArticleSection />
    <EventsSection />
    <FinalCtaSection />

    </>
  );
};

export default About;
