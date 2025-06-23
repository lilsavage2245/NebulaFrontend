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
import MainLayouts from './layouts/MainLayouts';
import CommunityOrganization from './Pages/collaborate/CommunityOrganization';

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
      </Routes>
    </Router>
  );
};

export default App;
