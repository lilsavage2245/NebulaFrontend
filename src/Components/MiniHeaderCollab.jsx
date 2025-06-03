// MiniHeaderCollab.jsx
import React from 'react';

const navItems = [
  { label: 'Industry Partnership', color: '#FE2C55' },
  { label: 'Educational Institution', color: '#F24E1E' },
  { label: 'Corporate Sponsorship', color: '#FE2C55' },
  { label: 'Community Organization', color: '#F24E1E' },
  { label: 'Individual Mentors and Volunteers', color: '#FE2C55' },
];

const MiniHeaderCollab = () => {
  return (
    <section className="bg-[rgba(0,0,0,0.06)] py-6 px-4 w-full">
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 max-w-screen-xl mx-auto">
        {navItems.map((item, index) => (
          <span
            key={index}
            className="text-[20px] leading-6 font-normal font-inter"
            style={{ color: item.color }}
          >
            {item.label}
          </span>
        ))}
      </div>
    </section>
  );
};

export default MiniHeaderCollab;
