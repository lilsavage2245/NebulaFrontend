// src/Components/StudentsStories.jsx
import React, { useRef } from 'react';
import StoriesCard from './StoriesCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StudentImg from '../../assets/Team1.png';
import StoryImg from '../../assets/Study2.png';

const storiesData = [
  {
    title: "Autonomous Robot",
    student: "Martin Okoye",
    storyImageSrc: StoryImg,
    userImageSrc: StudentImg,
    description: "At 14, I built a game that won a local hackathon, thanks to Nebula Code Academy!"
  },
  {
    title: "AI-Powered Chatbot",
    student: "Kaycee Okoye",
    storyImageSrc: StoryImg,
    userImageSrc: StudentImg,
    description: "My portfolio landed me a freelance gig before I finished the intermediate program."
  },
  {
    title: "Web App for Farmers",
    student: "Kofi Mensah",
    storyImageSrc: StoryImg,
    userImageSrc: StudentImg,
    description: "Kofi created a crop tracking system that helps rural farmers monitor yield and weather trends."
  },
  {
    title: "AR Flashcards",
    student: "Zainab Aliyu",
    storyImageSrc: StoryImg,
    userImageSrc: StudentImg,
    description: "Zainab designed augmented reality flashcards for teaching kids math in low-resource areas."
  },
  {
    title: "Clean Water AI",
    student: "Joshua Eke",
    storyImageSrc: StoryImg,
    userImageSrc: StudentImg,
    description: "Joshua built an AI system that detects unsafe drinking water through smartphone sensors."
  }
];

const StudentsStories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -360 : 360,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-20 bg-white flex flex-col gap-12 border-b-[5px] border-black-200">
      {/* Heading */}
      <div className="flex flex-col items-start gap-3">
        <div className="w-[85px] border-t-[5px] border-[#FFC925]" />
        <h2 className="text-[32px] font-bold font-poppins text-black">
          Student Stories
        </h2>
      </div>

      

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-[112px] overflow-x-auto scrollbar-hide scroll-smooth pb-4"
      >
        {storiesData.map((story, index) => (
          <div key={index} className="flex-shrink-0 w-[320px] sm:w-[340px]">
            <StoriesCard {...story} />
          </div>
        ))}
      </div>
      {/* Chevron Controls */}
      <div className="flex gap-2 self-end">
        <button onClick={() => scroll('left')} className="p-2 bg-gray-200 rounded-full">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => scroll('right')} className="p-2 bg-gray-200 rounded-full">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <button className="px-4 py-2 bg-teal-600 text-white rounded-md">
          View All Stories
        </button>
      </div>
    </section>
  );
};

export default StudentsStories;
