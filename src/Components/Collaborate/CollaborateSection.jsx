// src/components/CollaborateSection.jsx
import React from 'react';
import CollaborateCard from '../Collaborate/CollaborateCard';
import Collaborate1 from '../../assets/Collaborate1.png';
import Collaborate2 from '../../assets/Collaborate2.png';
import Collaborate3 from '../../assets/Collaborate3.png';
import Collaborate4 from '../../assets/Collaborate4.png';
import Collaborate5 from '../../assets/Collaborate5.png';
import Collaborate6 from '../../assets/Collaborate6.png';

const CollaborateSection = () => {
  return (
    <section className="w-full  px-6 sm:px-12 lg:px-20 py-16 flex flex-col items-center gap-[70px]">
      {/* Frame 6 - Title and Yellow Underline */}
      <div className="relative w-fit h-[67px] text-center">
        <h2 className="text-[48px] font-semibold text-black font-poppins z-10 relative">
          Ways To Collaborate
        </h2>
        <div className="absolute left-2 right-0 top-[64px] h-0 border-t-[8px] border-[#FFC925]" />
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-[1270px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyEvents.map((item, index) => (
          <CollaborateCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CollaborateSection;

const dummyEvents = [
  {
    image: Collaborate1,
    tittle: 'Industry Partnership',
    summary: 'Partner with us to provide internships, real world projects and mentorship to our talented students.',
    buttonText: 'Become a Partner',
  },
  {
    image: Collaborate2,
    tittle: 'Educational Institutions',
    summary: 'Collaborate on educational programs, coding boot camps and skill building workshop .',
    buttonText: 'Partner with us',
  },
  {
    image: Collaborate3,
    tittle: 'Corporate Sponsorship',
    summary: 'Sponsor events, hackathons or courses to boost your brand visibility and contribute to community education.',
    buttonText: 'Become a sponsor',
  },
  {
    image: Collaborate4,
    tittle: 'Community Organizations',
    summary: 'Work better on community driven projects supporting diversity, inclusion and local innovation.',
    buttonText: 'Join as a community partner',
  },
  {
    image: Collaborate5,
    tittle: 'Individual Mentors & Volunteers',
    summary: 'Share your expertise by mentoring students, hosting workshops or speaking at events.',
    buttonText: 'Become a mentor'
  },
  {
    image: Collaborate6,
    tittle: 'Contact Us',
    summary: 'Get in touch with our team of expects for more information',
    buttonText: 'Get in touch',
  },
]