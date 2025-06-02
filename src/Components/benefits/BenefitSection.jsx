// BenefitSection.jsx
import React from 'react';
import BenefitCard from './BenefitCard';
import Benefit1 from '../../assets/Benefit1.png';
import Benefit2 from '../../assets/Benefit2.png';
import Benefit3 from '../../assets/Benefit3.png';
import Benefit4 from '../../assets/Benefit4.png';

const benefitData = [
  {
    image: Benefit1,
    title: 'Expert Instruction',
    description: 'Learn from industry leaders.',
  },
  {
    image: Benefit2,
    title: 'Hands-on Projects',
    description: 'Build real-world experience.',
  },
  {
    image: Benefit3,
    title: 'Flexible Learning',
    description: 'Learn at your own pace.',
  },
  {
    image: Benefit4,
    title: 'Career Support',
    description: 'Get help landing your dream job.',
  },
];

const BenefitSection = () => {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <h2 className="text-4xl font-bold mb-10 text-black text-center">
        Why Learn With Nebula Code Academy
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefitData.map((item, index) => (
          <BenefitCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BenefitSection;
