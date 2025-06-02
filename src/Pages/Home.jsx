// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../Components/HeroSection';
import StudySection from '../Components/StudySection';
import RankingSection from '../Components/RankingSection';
import VideoSection from '../Components/VideoSection';
import EventsSection from '../Components/Events/EventSection';
import NewsSection from '../Components/News/NewsSection';
import CoursesSection from '../Components/Courses/CoursesSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <StudySection />
      <RankingSection />
      <VideoSection />
      <EventsSection />
      <NewsSection />
      <CoursesSection />
    </>
  );
};

export default Home;

