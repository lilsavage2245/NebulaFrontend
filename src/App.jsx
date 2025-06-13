// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Apply from './Pages/Apply';
import Collaborate from './Pages/collaborate/Collaborate';
import About from './Pages/About';
import IndustryPartnership from './Pages/collaborate/IndustryPartnership';
import MainLayouts from './layouts/MainLayouts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayouts><Home /></MainLayouts>} />
        <Route path="/courses" element={<MainLayouts><Courses /></MainLayouts>} />
        <Route path="/Apply" element={<MainLayouts><Apply /></MainLayouts>} />
        <Route path="/Collaborate" element={<MainLayouts><Collaborate /></MainLayouts>} />
        <Route path="/About" element={<MainLayouts><About /></MainLayouts>} />
        <Route path="/IndustryPartnership" element={<MainLayouts><IndustryPartnership /></MainLayouts>} />
      </Routes>
    </Router>
  );
};

export default App;