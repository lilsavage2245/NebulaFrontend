// src/components/Footer.jsx
import React from 'react';
import logo from '../assets/logo.png.png'; // adjust if needed

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-0 w-full">
      
      {/* Top Grid */}
      <div className="max-w-[1466px] mx-auto flex flex-wrap justify-between gap-8 px-6 lg:px-0"> 

        {/* Study and Courses */}
        <div className="w-full sm:w-[45%] md:w-[22%] flex flex-col gap-6">
          <div className="border-t-4 border-[#FFC925] w-[42.5px]" />
          <h4 className="text-[20px] font-semibold font-inter">Study and Courses</h4>
          <ul className="text-[16px] space-y-2 font-inter">
            <li>Beginner’s program</li>
            <li>Intermediate program</li>
            <li>Advanced program</li>
            <li>Pre-academy program</li>
            <li>Free introductory class</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="w-full sm:w-[45%] md:w-[22%] flex flex-col gap-6">
          <div className="border-t-4 border-[#FFC925] w-[42.5px]" />
          <h4 className="text-[20px] font-semibold font-inter">Resources</h4>
          <ul className="text-[16px] space-y-2 font-inter">
            <li>Student policies and protection plan</li>
            <li>Staff hub</li>
            <li>Student union</li>
          </ul>
        </div>

        {/* Quick Links and Contacts */}
        <div className="w-full sm:w-[45%] md:w-[22%] flex flex-col gap-6">
          <div className="border-t-4 border-[#FFC925] w-[42.5px]" />
          <h4 className="text-[20px] font-semibold font-inter">Quick Links and Contacts</h4>
          <ul className="text-[16px] space-y-2 font-inter">
            <li>Make online payment</li>
            <li>Support us</li>
            <li>Contact us</li>
            <li>Jobs</li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="w-full sm:w-[45%] md:w-[22%] flex flex-col gap-6">
          <div className="border-t-4 border-[#FFC925] w-[42.5px]" />
          <h4 className="text-[20px] font-semibold font-inter">Connect with us</h4>
          <div className="flex gap-6 text-white">
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white mt-12 pt-6">
        <div className="max-w-[1466px] mx-auto px-6 lg:px-0 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Row */}
          <div className="flex flex-wrap items-center gap-6 text-[16px] font-inter">
            <span>© 2025 The Nebula Academy</span>
            <span className="hover:underline cursor-pointer">Legal</span>
            <span className="hover:underline cursor-pointer">Feedback</span>
            <span className="hover:underline cursor-pointer">Privacy</span>
            <span className="hover:underline cursor-pointer">Accessibility</span>
          </div>

          {/* Logo */}
          <img src={logo} alt="Nebula Logo" className="w-20 h-auto object-contain" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
