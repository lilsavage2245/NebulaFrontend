// MiniNavbar.jsx
import React from 'react';

const MiniNavbar = () => {
  const links = [
    'Beginner courses',
    'Advanced courses',
    'Intermediate courses',
    'Expert courses',
    'Pre - Academy courses',
    'Assistances',
    'FAQs'
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 w-full px-4 md:px-8 lg:px-16 py-4">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <span className="text-lg md:text-xl font-normal text-black whitespace-nowrap">
            {link}
          </span>
          {index !== links.length - 1 && (
            <span className="h-6 border-l-2 border-black mx-1"></span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MiniNavbar;
