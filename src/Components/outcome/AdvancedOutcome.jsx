// src/Pages/apply/pre-academy/AdvancedOutcome.jsx

import React from 'react';
import OutcomeCard from './OutcomeCard';
import Outcome1 from '../../assets/Outcome1.png';
//import Outcome2 from '../../../assets/images/Outcome2.png';
//import Outcome3 from '../../../assets/images/Outcome3.png';

export default function AdvancedOutcome() {
  const outcomes = [
    {
      image: Outcome1,
      text: 'Build and publish their own apps, games or websites.',
    },
    {
      image: Outcome1,
      text: 'Learn how to solve real-world problems using technology.',
    },
    {
      image: Outcome1,
      text: 'Collaborate, share ideas, and present creative solutions.',
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-24">
      <h2 className="text-[36px] md:text-4xl font-bold text-black text-center mb-6">
        Advanced Program Outcome
      </h2>
      <p className="text-center max-w-4xl mx-auto text-[16px] md:text-[16px] leading-7 text-black mb-16">
        The six years foundational program introduce students to the real world of technology through hands-on projects.
        <br className="hidden md:block" />
        Every student will:
      </p>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {outcomes.map((item, index) => (
          <OutcomeCard key={index} image={item.image} text={item.text} />
        ))}
      </div>
    </section>
  );
}
