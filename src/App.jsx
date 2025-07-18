// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home/Home';
import Courses from './Pages/Courses';
import Apply from './Pages/apply/Apply';
import Collaborate from './Pages/collaborate/Collaborate';
import About from './Pages/About';
import IndustryPartnership from './Pages/collaborate/IndustryPartnership';
import EducationalInstitution from './Pages/collaborate/EducationalInstitution';
import CorporateSponsorship from './Pages/collaborate/CorporateSponsorship';
import IndividualMentors from './Pages/collaborate/IndividualMentors';
import PreAcademy from './Pages/apply/PreAcademy';
import Beginners from './Pages/apply/Beginners';
import Intermediate from './Pages/apply/Intermediate';
import Advanced from './Pages/apply/Advanced';
import FreeClass from './Pages/apply/FreeClass';
import FindCourses from './Pages/PreAcademy/FindCourses';
import MainLayouts from './layouts/MainLayouts';
import CommunityOrganization from './Pages/collaborate/CommunityOrganization';
import SearchPage from './Pages/SearchPage';
import LearnMore from './Pages/PreAcademy/LearnMore';
import LearnMore2 from './Pages/Academy/LearnMore2';
import Programs from './Pages/Programs';
import Eligibility from './Pages/PreAcademy/Eligibility';
import CareerPaths from './Pages/Academy/ExploreCareer';
import SoftwareDevelopment from './Pages/Academy/SoftwareDevelopment';
import InterestForm1 from './Pages/RegisterInterest/InterestForm1';
import PreAcademyApplicationForm from './Pages/PreAcademy/PreAcademyApplicationForm';
import BeginnerFindCourses from './Pages/Academy/FindCourses/BeginnerFindCourses';
import IntermediateFindCourses from './Pages/Academy/FindCourses/IntermediateFindCourses';
import AdvancedFindCourses from './Pages/Academy/FindCourses/AdvancedFindCourses';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayouts><Home /></MainLayouts>} />
        <Route path="/courses" element={<MainLayouts><Courses /></MainLayouts>} />
        <Route path="/apply" element={<MainLayouts><Apply /></MainLayouts>} />
        <Route path="/collaborate" element={<MainLayouts><Collaborate /></MainLayouts>} />
        <Route path="/about" element={<MainLayouts><About /></MainLayouts>} />

        {/* Collaboration sub-pages */}
        <Route path="/collaborate/industry" element={<MainLayouts><IndustryPartnership /></MainLayouts>} />
        <Route path="/collaborate/education" element={<MainLayouts><EducationalInstitution /></MainLayouts>} />
        <Route path="/collaborate/corporate" element={<MainLayouts><CorporateSponsorship /></MainLayouts>} />
        <Route path="/collaborate/community" element={<MainLayouts><CommunityOrganization /></MainLayouts>} />
        <Route path="/collaborate/mentors" element={<MainLayouts><IndividualMentors /></MainLayouts>} />

        {/* Apply sub-pages */}
        <Route path="/apply/pre-academy" element={<MainLayouts><PreAcademy /></MainLayouts>} />
        <Route path="/apply/beginner" element={<MainLayouts><Beginners /></MainLayouts>} />
        <Route path="/apply/intermediate" element={<MainLayouts><Intermediate /></MainLayouts>} />
        <Route path="/apply/advanced" element={<MainLayouts><Advanced /></MainLayouts>} />
        <Route path="/apply/free-class" element={<MainLayouts><FreeClass /></MainLayouts>} />

        <Route path="/pre-academy/find-courses" element={<MainLayouts><FindCourses /></MainLayouts>} />
        <Route path="/pre-academy/learn-more" element={<MainLayouts><LearnMore /></MainLayouts>} />
        <Route path="/academy/learn-more" element={<MainLayouts><LearnMore2 /></MainLayouts>} />
        <Route path="/programs" element={<MainLayouts><Programs /></MainLayouts>} />
        <Route path="/pre-academy/eligibility" element={<MainLayouts><Eligibility /></MainLayouts>} />
        <Route path="/career-paths" element={<MainLayouts><CareerPaths /></MainLayouts>} />
        <Route path="/careers/software-and-web" element={<MainLayouts><SoftwareDevelopment /></MainLayouts>} />
        <Route path="pre-academy/application-form" element={<MainLayouts><PreAcademyApplicationForm /></MainLayouts>} />
        <Route path="academy/find-courses/beginner" element={<MainLayouts><BeginnerFindCourses /></MainLayouts>} />
        <Route path="academy/find-courses/intermediate" element={<MainLayouts><IntermediateFindCourses /></MainLayouts>} />
        <Route path="academy/find-courses/advanced" element={<MainLayouts><AdvancedFindCourses /></MainLayouts>} />

        <Route path="/search" element={<SearchPage />} />
        <Route path="/interest-form" element={<MainLayouts><InterestForm1 /></MainLayouts>} />
      </Routes>
    </Router>
  );
};

export default App;
