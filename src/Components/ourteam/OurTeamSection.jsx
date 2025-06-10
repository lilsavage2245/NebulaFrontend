// OurTeamSection.jsx
import React from 'react';
import OurTeamCard from './OurTeamCard';
import Team1 from '../../assets/Team1.png';
import Team2 from '../../assets/Team2.png';
import Team3 from '../../assets/Team3.png';

const teamMembers = [
  {
    name: 'Oluchi Lilsavage',
    title: 'Founder and Thinker',
    image: Team1,
    socials: {
      instagram: '#',
      linkedin: '#',
      facebook: '#',
      tiktok: '#',
    },
  },
  {
    name: 'Tina Codewell',
    title: 'Curriculum Lead',
    image: Team2,
    socials: {
      instagram: '#',
      linkedin: '#',
      facebook: '#',
      tiktok: '#',
    },
  },
  {
    name: 'Kenechukwu Okoye',
    title: 'Frontend Instructor',
    image: Team3,
    socials: {
      instagram: '#',
      linkedin: '#',
      facebook: '#',
      tiktok: '#',
    },
  },
  //{
    //name: 'Kenechukwu Okoye',
    //title: 'Frontend Instructor',
    //image: Team3,
    //socials: {
     // instagram: '#',
      //linkedin: '#',
      //facebook: '#',
     // tiktok: '#',
    //},
 // }, 
];

const OurTeamSection = () => {
  return (
    <section className="w-full max-w-[1270px] mx-auto px-4 py-12 flex flex-col items-center gap-12">
      {/* Header */}
      <div className="text-center flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <div className="w-[60px] border-t-[8px] border-[#FFC925]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-black font-poppins">Our Team</h2>
        </div>
        <p className="text-xl sm:text-3xl font-normal text-black text-center max-w-[700px] font-poppins">
          Meet with Nebula Code Academy Team Members
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <OurTeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default OurTeamSection;