// src/layouts/MainLayout.jsx
import React from 'react';
import HeaderSection from '../Components/HeaderSection';
import Footer from '../Components/Footer';
import Breadcrumbs from '../Components/BreadCrumb'; // ← You’ll create this component

const MainLayouts = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <HeaderSection />
      <Breadcrumbs /> {/* 👈 Insert here */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayouts;