// src/components/EventsSection.jsx
import React from 'react';
import EventsCard from './EventsCard';
import Event1 from '../../assets/Event1.png';
import Event2 from '../../assets/Event2.png';
import Event3 from '../../assets/Event3.png';

const EventsSection = () => {
  return (
    <section className="w-full  px-6 sm:px-12 lg:px-20 py-16 flex flex-col items-center gap-[70px]">
      
      {/* Frame 6 - Title and Yellow Underline */}
      <div className="relative w-fit h-[67px] text-center">
        <h2 className="text-[48px] font-semibold text-black font-poppins z-10 relative">
          Events
        </h2>
        <div className="absolute left-2 right-0 top-[64px] h-0 border-t-[8px] border-[#FFC925]" />
      </div>

      {/* Frame 215 - Event Cards Row */}
      <div className="w-full max-w-[1270px] flex flex-col lg:flex-row justify-center items-center lg:items-end gap-[31px]">
        {dummyEvents.map((item, index) => (
          <EventsCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;

const dummyEvents = [
  {
    image: Event1,
    date: 'June 25, 2025',
    category: 'Event',
    tittle: 'Semester 1 - Welcome Week',
    summary: 'Joing and participate in our coding challenge and win prizes',
    buttonText: 'Join event',
  },
  {
    image: Event2,
    date: 'July 25, 2025',
    category: 'Event',
    tittle: 'Semester 2 - Welcome Week',
    summary: 'Join our Q and A webinar together with other tech professionals',
    buttonText: 'Enroll',
  },
  {
    image: Event3,
    date: 'July 31, 2025',
    category: 'Event',
    tittle: 'Semester 3 - Graduation',
    summary: 'Join our Q and A webinar together with other tech professionals',
    buttonText: 'Join event',
  },
]