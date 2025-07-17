// src/components/IndustryImpact.jsx
import React from 'react';
import IndustryCard from './IndustryCard';
import IndustryImg from '../../assets/Event2.png'; // Replace with actual image path

const industryData = [
  {
    title: 'Space & AI',
    image: IndustryImg,
    description:
      'Yes, even space exploration and artificial intelligence rely on developers to create systems that analyze data or control spacecraft!',
  },
  {
    title: 'Healthcare & MedTech',
    image: IndustryImg,
    description:
      'Developers create diagnostic tools, patient monitoring systems, and health record platforms that save lives and improve care.',
  },
  {
    title: 'Finance & Banking',
    image: IndustryImg,
    description:
      'From online banking to fraud detection systems, developers build secure platforms that power the global economy.',
  },
  {
    title: 'Education Technology',
    image: IndustryImg,
    description:
      'Educational apps, remote learning platforms, and personalized teaching tools are all made possible by developers.',
  },
  {
    title: 'Agriculture & Environment',
    image: IndustryImg,
    description:
      'Code drives climate models, crop-monitoring systems, and sustainable farming innovations used around the world.',
  },
  {
    title: 'E-Commerce & Retail',
    image: IndustryImg,
    description:
      'Behind every smooth online shopping experience is a developer optimizing performance, security, and payment systems.',
  },
];

const IndustryImpact = () => {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-20 flex flex-col gap-10 bg-white border-b-[5px] border-black-200">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[35px] font-semibold underline font-poppins text-black">
          Industry Impact
        </h2>
        <h3 className="text-[30px] font-semibold font-poppins text-black max-w-4xl">
          Why Software Developers are in Demand Across every Industry
        </h3>
        <p className="text-[16px] leading-[40px] text-black max-w-6xl font-poppins">
          Imagine a world where your favorite apps, online stores, or even hospital systems didn’t exist.
          That’s a world without software developers! Today, software developers are the backbone of nearly every
          industry, from finance to education to healthcare and beyond. Whether it’s building apps that make
          learning fun, creating secure systems for banks, or designing tools that help doctors save lives,
          developers are the ones turning ideas into reality. <br /><br />
          At Nebula Code Academy, we train our students—starting as young as 10 in our Pre-Academy—to become
          the problem-solvers the world needs. Our real-world projects give students hands-on experience, so
          they’re ready to jump into industries like:
        </p>
      </div>

      {/* Industry Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {industryData.map((industry, index) => (
          <IndustryCard key={index} {...industry} />
        ))}
      </div>

      {/* Closing Paragraph */}
      <p className="text-[16px] leading-[40px] text-black max-w-6xl font-poppins mt-10">
        The demand for skilled developers is skyrocketing—experts predict a 25% growth in these roles by 2032
        (U.S. Bureau of Labor Statistics, 2024). That means no matter what industry excites you, your coding
        skills will open doors to a rewarding career. Whether you’re a 12-year-old coding your first game in
        our Pre-Academy or an Advanced student building a startup-ready app, Nebula Code Academy equips you
        to make a real impact in the world.
      </p>
    </section>
  );
};

export default IndustryImpact;
