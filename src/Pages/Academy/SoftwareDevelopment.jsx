// src/Pages/collaborate/FindCourses.jsx
import React from 'react';
import HeroSoftware from '../../Components/HeroSoftware';
import SoftwarePageContentNav from '../../Components/SoftwarePageContent';
import OverviewSoftware from '../../Components/OverviewSoftware';
import CareerRoles from '../../Components/CareerRoles/CareerRoles';
import SalaryDemand from '../../Components/SalaryDemand';
import DemandForecast from '../../Components/DemandForecast';
import Preparations from '../../Components/Preparations/Preparations';
import StudentsStories from '../../Components/StudentStories/StudentsStories';
import CareerOpportunities from '../../Components/CareerOpportunities/CareerOpportunities';
import IndustryImpact from '../../Components/IndustryImpact/IndustryImpact';
import CtaSoftware from '../../Components/CtaSoftware';
import SoftwareFaqs from '../../Components/SoftwareFaqs';


const SoftwareDevelopment = () => {
  return (
    <>
    <HeroSoftware />
    <SoftwarePageContentNav />
    <OverviewSoftware />
    <CareerRoles />
    <SalaryDemand />
    <DemandForecast />
    <Preparations />
    <StudentsStories />
    <CareerOpportunities />
    <IndustryImpact />
    <CtaSoftware />
    <SoftwareFaqs />
    </>
  );
};

export default SoftwareDevelopment;