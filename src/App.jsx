// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Apply from './Pages/Apply';
import Collaborate from './Pages/Collaborate';
import MainLayouts from './layouts/MainLayouts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayouts><Home /></MainLayouts>} />
        <Route path="/courses" element={<MainLayouts><Courses /></MainLayouts>} />
        <Route path="/Apply" element={<MainLayouts><Apply /></MainLayouts>} />
        <Route path="/Collaborate" element={<MainLayouts><Collaborate /></MainLayouts>} />
      </Routes>
    </Router>
  );
};

export default App;