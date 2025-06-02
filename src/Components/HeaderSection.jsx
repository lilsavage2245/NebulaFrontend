// src/components/HeaderSection.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import logo from '../assets/logo.png.png';   // Update the path to your actual logo
import { Menu, X, Search } from 'lucide-react';   // Optional: You can also use any icon set or plain SVG

const HeaderSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#008080] text-white w-full shadow-md px-4 sm:px-6 lg:px-12 py-4">
      <div className="flex justify-between item-centre">
        {/* Logo */}
        <div className="flex items-center">
            <img
          src={logo} 
          alt="Logo" 
          className="w-24 sm:w-28 object-contain" 
          />
        </div>

        {/* Desktop Nav + Search */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-6">
          {/* Search Bar */}
          <div className="flex items-center bg-black bg-opacity-20 rounded-lg px-3 py-1 w-52 1g:w-64">
            <Search size={18} className="text-white" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 bg-transparent text-sm text-white placeholder-white focus:outline-none w-full"
            />
          </div>

          {/* Nav Links */}
          <nav className="flex gap-4 text-sm font-poppins">
            <Link to="/login" className="hover:underline">Student/Staff Login</Link>
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/courses" className="hover:underline">Courses</Link>
            <Link to="/apply" className="hover:underline">Apply</Link>
            <Link to="/collaborate" className="hover:underline">Collaborate</Link>
            <Link to="/about" className="hover:underline">About</Link>
          </nav>
        </div>

        {/* Hamburger - Mobile Only */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#008080] p-6 flex flex-col gap-6 transition-all">
          <div className="flex justify-between items-center mb-4">
            <img
              src={logo}
              alt="Logo"
              className="w-20 object-contain"
            />
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={28} className="text-white" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-black bg-opacity-20 rounded-lg px-3 py-2 w-full">
            <Search size={18} className="text-white" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 bg-transparent text-sm text-white placeholder-white focus:outline-none w-full"
            />
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col gap-4 text-base font-poppins">
            <Link to="/login" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Student/Staff Login</Link>
            <Link to="/" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/courses" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Courses</Link>
            <Link to="/apply" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Apply</Link>
            <Link to="/collaborate" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Collaborate</Link>
            <Link to="/about" className="hover:underline" onClick={() => setIsMenuOpen(false)}>About</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderSection;
