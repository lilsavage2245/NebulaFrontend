import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  return (
    <nav className="text-sm text-gray-700 font-poppins py-4 px-6 flex items-center gap-2">
      <Link to="/" className="hover:underline text-[#008080] font-semibold">Home</Link>

      {pathnames.map((name, index) => {
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        const isLast = index === pathnames.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight size={14} />
            {isLast ? (
              <span className="text-black font-medium capitalize">{decodeURIComponent(name)}</span>
            ) : (
              <Link to={routeTo} className="hover:underline text-[#008080] capitalize">{decodeURIComponent(name)}</Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;


