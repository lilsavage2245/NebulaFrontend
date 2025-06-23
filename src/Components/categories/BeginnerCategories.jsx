// src/Pages/apply/pre-academy/BeginnerCategory.jsx

import React from 'react';
import CategoriesCard from './CategoriesCard';
import image1 from '../../assets/Category1.png';

export default function BeginnerCategories() {
  const categories = [
    {
      title: 'Programming and Algorithms',
      duration: '6 Months',
      image: image1,
    },
    {
      title: 'Web Development Basics',
      duration: '3 Months',
      image: image1,
    },
    {
      title: 'Data Bases, Data Analysis, & Intro to AI',
      duration: '3 Months',
      image: image1,
    },
    {
      title: 'Cloud Computing & Networking Fundamentals',
      duration: '3 Months',
      image: image1,
    },
    {
      title: 'Cyber Security and Digital Awareness',
      duration: '3 Months',
      image: image1,
    },
    {
      title: 'Mobile Application Development Basics',
      duration: '3 Months',
      image: image1,
    },
    {
      title: 'Version Control & Collaboration',
      duration: '3 Months',
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
