// src/components/SoftwarePageContentNav.jsx
import React from 'react';

const sections = [
  { label: 'Overview', id: 'overview' },
  { label: 'Career Roles', id: 'roles' },
  { label: 'Salary & Demand Insight', id: 'salary' },
  { label: 'How Nebula Code Academy Prepares You', id: 'preparation' },
  { label: 'Student Success Stories', id: 'stories' },
  { label: 'Career Opportunities', id: 'opportunities' }
];

const SoftwarePageContentNav = () => {
  return (
    <div className="w-full bg-gray-100 p-4 rounded-lg shadow-sm mb-10 mt-10">
      <h3 className="text-xl font-semibold mb-4 text-black">On This Page</h3>
      <ul className="space-y-3">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-sm text-gray-800 hover:text-teal-600 transition duration-200 block"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoftwarePageContentNav;
