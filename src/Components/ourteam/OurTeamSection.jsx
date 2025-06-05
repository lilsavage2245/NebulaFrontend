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
];

const OurTeamSection = () => {
  return (
    <section className="flex flex-col items-center w-[1270px] mx-auto py-16 gap-10 mt-12">
      {/* Frame 40 - Heading Section */}
      <div className="flex flex-col items-center gap-4 w-[756px]">
        {/* Frame 10 - Title + Vector */}
        <div className="flex flex-col items-center gap-2 p-4">
          <div className="w-[60px] border-t-[8px] border-[#FFC925]" />
          <h2 className="text-[32px] leading-[20px] font-bold text-black font-poppins">
            Our Team
          </h2>
        </div>

        {/* Frame 11 - Subtitle */}
        <div className="flex justify-center items-center px-4 py-2 w-full">
          <p className="text-[45px] leading-[44px] text-center font-normal text-black font-poppins">
            Meet with Nebula Code Academy Team Members
          </p>
        </div>
      </div>

      {/* Frame 219 - Cards Section */}
      <div className="flex flex-row items-center gap-7 w-[1270px]">
        {teamMembers.map((member, idx) => (
          <OurTeamCard
            key={idx}
            name={member.name}
            title={member.title}
            image={member.image}
            socials={member.socials}
          />
        ))}
      </div>
    </section>
  );
};

export default OurTeamSection;
