// src/components/CourseSection.jsx
import React from 'react';
import CourseCard from './CourseCard';
import Course1 from '../../assets/Course1.png';
import Course2 from '../../assets/Course2.png';
import Course3 from '../../assets/Course3.png';
import Course4 from '../../assets/Course4.png';

const CourseSection = () => {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-16 flex flex-col items-start gap-10 bg-white">
      
      {/* Frame 9 - Title */}
      <div className="flex flex-col items-center gap-2 px-4">
        <h2 className="text-[45px] font-bold text-black font-poppins leading-[68px]">
          COURSES
        </h2>
        <div className="w-[165px] border-t-[8px] border-[#FFC925]" />
      </div>

      {/* Frame 217 - Course Cards Row */}
      <div className="flex flex-wrap justify-start items-center gap-6 w-full max-w-[1268px]">
        {dummyCourses.map((item, index) => (
          <CourseCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CourseSection;

const dummyCourses= [
{
  image: Course1,
  tittle: 'Intermediate Level',
  category: 'Programming and algorithms',
  summary: 'Intermediate python and OOP',
  summary2: 'Java OOP concept',
  summary3: 'C++ intermediate',
},
{
  image: Course2,
  tittle: 'Pre-Academy (Age 10-16)',
  category: 'Programming Basics',
  summary: 'Scratch programming',
  summary2: 'Blocky coding',
  summary3: 'introduction to python',
},
{
  image: Course3,
  tittle: 'Beginners level',
  category: 'Programming Fundamental',
  summary: 'Python for beginners',
  summary2: 'C programming basics',
  summary3: 'Javascript fundamental',
},
{
  image: Course4,
  tittle: 'Advanced Level',
  category: 'Advanced Programming & Software Engineering',
  summary: 'Advanced java(spring & hibernate)',
  summary2: 'C++ advanced concept',
  summary3: 'Advanced python for developers',
},
]