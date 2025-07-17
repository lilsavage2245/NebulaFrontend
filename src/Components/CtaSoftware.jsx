// src/components/CtaSoftware.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // optional, if using React Router

const CTA_ITEMS = [
  {
    text: 'Visit our support page for all relevant support.',
    button: 'Support',
    link: '/support', // update as needed
  },
  {
    text: 'Check out our programs page.',
    button: 'Programs',
    link: '/programs', // update as needed
  },
  {
    text: 'Register your interest here',
    button: 'Register',
    link: '/apply', // update as needed
  },
];

const CtaSoftware = () => {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-16 bg-[#FFC925]/30 flex flex-col items-center gap-10">
      <h2 className="text-[28px] sm:text-[35px] font-bold font-poppins text-black text-center max-w-4xl">
        Ready to begin your journey and curious on how to start?
      </h2>

      <div className="flex flex-col gap-4 items-center">
        {CTA_ITEMS.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-4"
          >
            <p className="text-[16px] font-medium text-black font-poppins text-center">
              {item.text}
            </p>
            <Link
              to={item.link}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#FFC925] hover:bg-[#008080] hover:text-white transition text-black font-poppins text-sm font-medium"
            >
              {item.button}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CtaSoftware;
