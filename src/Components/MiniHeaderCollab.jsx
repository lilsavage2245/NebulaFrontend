// MiniHeaderCollab.jsx
import React from 'react';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Opportunities', href: '#collaboration' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'News', href: '#news' },
  { label: 'FAQs', href: '#faqs' },
];

const MiniHeaderCollab = () => {
  return (
    <section className="bg-[#008080] text-white py-4 px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">Collaboration</h2>
        <nav className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:underline hover:text-yellow-300 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default MiniHeaderCollab;
