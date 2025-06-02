// src/components/NewsSection.jsx
import React from 'react';
import NewsCard from './NewsCard';
import News1 from '../../assets/News1.png';
import News2 from '../../assets/News2.png';
import News3 from '../../assets/News3.png';
const NewsSection = () => {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-16 flex flex-col items-center gap-[70px] bg-white">
      
      {/* Frame 7 – Heading with Vector underline */}
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-[48px] sm:text-[64px] font-semibold text-black font-poppins leading-[20px]">
          News
        </h2>
        <div className="w-[145px] border-t-[8px] border-[#FFC925]" />
      </div>

      {/* Frame 216 – News Cards */}
      <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-[21px] w-full max-w-[1273px]">
        {dummyNews.map(( item, index) => (
          <NewsCard key={index} {...item}/>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;

const dummyNews = [
  {
    image: News1,
    date: 'May 25, 2025',
    tittle: 'Industry and Tech News',
    category: 'News',
    summary: 'Tech trends',
    summary2: 'Job market insight',
    summary3: 'Security alert',
  },
  {
    image: News2,
    date: 'June 25, 2025',
    tittle: 'AI in Education',
    category: 'News',
    summary: 'Student impact',
    summary2: 'Teacher tools',
    summary3: 'Future outlook',
  },
  {
    image: News3,
    date: 'June 30, 2025',
    tittle: 'Nebula Events Update',
    category: 'News',
    summary: 'Hackathon launch', 
    summary2: 'Networking night',
    summary3: 'Future outlook.',
  },
]