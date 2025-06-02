// HotSection.jsx
import React from 'react';
import HotCard from './HotCard';
import Hot1 from '../../assets/Hot1.png';
import Hot2 from '../../assets/Hot2.png';
import Hot3 from '../../assets/Hot3.png';

const hotCourses = [
  {
    image: Hot1,
    title: 'Expert Instruction',
    description:
      'Learn from industry leaders. These are diverse, high value courses that showcase the range of your offerings.',
  },
  {
    image: Hot2,
    title: 'Hands-On Projects',
    description:
      'Engage in real-world tasks. These courses offer practical experience to boost your skills and portfolio.',
  },
  {
    image: Hot3,
    title: 'Top Rated Content',
    description:
      'Explore our most loved content. These courses have high ratings and positive reviews from students.',
  },
];

const HotSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 flex flex-col gap-10">
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        Featured Courses
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {hotCourses.map((course, index) => (
          <HotCard
            key={index}
            image={course.image}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HotSection;
