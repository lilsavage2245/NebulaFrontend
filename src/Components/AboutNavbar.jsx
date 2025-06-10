import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AboutNavbar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'Meet Our Team',
      links: ['Members', 'Communities', 'Showcases'],
    },
    {
      title: 'Studying at Nebula',
      links: ['Guide to Nebula', 'Course', 'Fees'],
    },
    {
      title: 'About the Academy',
      links: ['News', 'Our mission & vision', 'Our story', 'Ranking', 'Events'],
    },
  ];

  return (
    <div className="w-full max-w-[1275px] mx-auto mt-10 bg-[#FFC925]/50 rounded-2xl flex flex-col sm:flex-row justify-between items-start px-6 py-8 gap-8">
      {sections.map((section, index) => (
        <div
          key={index}
          className="w-full sm:w-[32%] flex flex-col items-center text-center gap-4 cursor-pointer"
          onClick={() => toggleDropdown(index)}
        >
          {/* Title and Icon */}
          <div className="flex items-center justify-center gap-2 text-xl font-medium text-black hover:underline transition duration-200">
            {section.title}
            <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
          </div>

          {/* Dropdown links */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="flex flex-col items-center gap-2 text-[18px] font-poppins text-black">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="hover:text-blue-700 hover:underline transition duration-200"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutNavbar;
