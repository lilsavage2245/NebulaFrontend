// src/Pages/apply/pre-academy/AdvancedCategories.jsx

import React from 'react';
import CategoriesCard from './CategoriesCard';
import image1 from '../../assets/Category1.png';

export default function AdvancedCategories() {
  const categories = [
    {
      title: 'Programming and Algorithms',
      duration: '6 Months',
      image: image1,
    },
    {
      title: 'Creative Computing',
      duration: '4 Months',
      image: image1,
    },
    {
      title: 'Intro to Robotics',
      duration: '5 Months',
      image: image1,
    },
    {
      title: 'Digital Literacy',
      duration: '3 Months',
      image: image1,
    },
    {
      title: 'Game Development',
      duration: '6 Months',
      image: image1,
    },
    {
      title: 'Tech for Good Projects',
      duration: '4 Months',
      image: image1,
    }
  ];

  return (
    <section className="w-full py-10 bg-white px-6 md:px-24">
      <h2 className="text-[32px] md:text-[48px] font-bold text-black font-inter text-left mb-8">
        Categories
      </h2>

      <div className="flex flex-col gap-8">
        {categories.map((cat, index) => (
          <CategoriesCard
            key={index}
            title={cat.title}
            duration={cat.duration}
            image={cat.image}
          />
        ))}
      </div>
    </section>
  );
}
