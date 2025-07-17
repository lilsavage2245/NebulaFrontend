// src/layouts/MainLayouts.jsx
import React from 'react';
import HeaderSection from '../Components/HeaderSection';
import Footer from '../Components/Footer';
import Breadcrumbs from '../Components/BreadCrumb'; // optional

const MainLayouts = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#DDDDDD] text-gray-900">
      <HeaderSection />
      <Breadcrumbs />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayouts;