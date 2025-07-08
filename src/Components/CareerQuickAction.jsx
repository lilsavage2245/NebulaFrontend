// src/components/CareerQuickAction.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const quickActions = [
  {
    text: 'Want to post a job/internship opportunity?',
    buttonText: 'Post Job',
    bg: 'bg-[#CFE6EC]',
  },
  {
    text: 'Find out more about our partnership and collaboration',
    buttonText: 'Partnership',
    bg: 'bg-[#FDF1DC]',
  },
  {
    text: 'Need help or want to contact',
    buttonText: 'Schedule a discovery call',
    bg: 'bg-[#E8F3D6]',
  },
  {
    text: 'Interested in partnering, fill our short interest form and our collaboration team will contact you with-in 2 to 3 working days.',
    buttonText: 'Post Job',
    bg: 'bg-[#F4E1E1]',
  },
];

const CareerQuickAction = () => {
  return (
    <section className="w-full max-w-[650px] mx-auto mt-20 border-t border-black flex flex-col gap-6 px-4">
      <h2 className="text-[36px] font-bold text-black font-poppins pt-6">Quick Actions</h2>

      {quickActions.map((action, index) => (
        <div
          key={index}
          className={`w-full p-4 sm:p-6 flex flex-col gap-4 rounded-lg ${action.bg}`}
        >
          <p className="text-base sm:text-lg text-black font-poppins">
            {action.text}
          </p>
          <button className="flex items-center gap-2 px-6 py-2 bg-[#FFC925] rounded-full shadow-md w-fit">
            <span className="text-sm font-poppins font-medium text-[#4A2B29]">
              {action.buttonText}
            </span>
            <ArrowRight size={18} />
          </button>
        </div>
      ))}
    </section>
  );
};

export default CareerQuickAction;
