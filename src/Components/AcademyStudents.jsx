import React from 'react';
import BenefitCard from '../Components/benefit/BenefitCard2';
import Benefit1 from '../assets/Benefit1.png';
import Benefit2 from '../assets/Benefit2.png';
import Benefit3 from '../assets/Benefit3.png';
import Benefit4 from '../assets/Benefit4.png';
import Benefit5 from '../assets/Benefit2.png';
import Benefit6 from '../assets/Benefit3.png';

const benefits = [
  {
    image: Benefit1,
    title: 'Expert Instructors',
    description: 'Learn from industry leaders with years of experience.',
  },
  {
    image: Benefit2,
    title: 'Hands-On Projects',
    description: 'Engage in practical activities that simulate real-world scenarios.',
  },
  {
    image: Benefit3,
    title: 'Flexible Learning',
    description: 'Join live or on-demand sessions at your convenience.',
  },
  {
    image: Benefit4,
    title: 'Community Support',
    description: 'Access a vibrant network of learners and mentors.',
  },
  {
    image: Benefit5,
    title: 'Tech Exploration',
    description: 'Dive into coding, robotics, and digital creativity.',
  },
  {
    image: Benefit6,
    title: 'No Commitment',
    description: 'Experience our teaching style with no payment required.',
  },
];

export default function AcademyStudents() {
  return (
    <section className="w-[1512px] bg-white item-center py-8 px-2 md:px-24 border-b-[5px] border-black-200">
      <div className="flex flex-col justify-center item-center lg:flex-row gap-16">
        <div className="lg:w-[300px] mt-[274px]">
          <h2 className="text-[32px] md:text-[40px] font-bold text-black">
            Who is this for?
          </h2>
        </div>

        <div className="lg:w-[1100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              image={benefit.image}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
