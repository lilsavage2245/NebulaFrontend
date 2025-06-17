import React from 'react';
import { NavLink } from 'react-router-dom';

const collabLinks = [
  { name: 'Industry Partnership', path: '/collaborate/industry' },
  { name: 'Educational Institution', path: '/collaborate/education' },
  { name: 'Corporate Sponsorship', path: '/collaborate/corporate' },
  { name: 'Community Organisation', path: '/collaborate/community' },
  { name: 'Mentors & Volunteers', path: '/collaborate/mentors' },
];


const MiniHeaderCollab = () => {
  return (
    <nav className="w-full bg-[#F8F8F8] border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-4 justify-center text-sm md:text-base">
        {collabLinks.map(link => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-full transition duration-200 ${
                isActive ? 'bg-[#1D15B1] text-white' : 'text-[#1D15B1] hover:bg-[#E5E5FF]'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default MiniHeaderCollab;
