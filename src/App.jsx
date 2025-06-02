// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Apply from './Pages/Apply';
import MainLayouts from './layouts/MainLayouts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayouts><Home /></MainLayouts>} />
        <Route path="/courses" element={<MainLayouts><Courses /></MainLayouts>} />
      </Routes>
    </Router>
  );
};

export default App;