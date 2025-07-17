import React from 'react';
import PreparationCard from './PreparationCard';
import { Link } from 'react-router-dom';

import imgFrontend from '../../assets/Study1.png';
import imgBackend from '../../assets/Study1.png';
import imgFullstack from '../../assets/Study1.png';
import imgMobile from '../../assets/Study1.png';
import imgDevops from '../../assets/Study1.png';

const rolesData = [
  {
    title: 'Pre-Academy',
    description:
      'HTML, CSS, Computer Logic, Scratch.',
    
    image: imgFrontend,
  },
  {
    title: 'Beginners',
    description:
      'JavaScript, Basic Python, Web Design',
    
    image: imgBackend,
  },
  {
    title: 'Intermediate',
    description:
      'APIs, Databases, Full-Stack Projects',
    
    image: imgFullstack,
  },
  {
    title: 'Advanced',
    description:
      'Scalable Systems, DevOps, Security',
    
    image: imgMobile,
  },
  {
    title: 'Expert',
    description:
      'Capstone Projects, Freelance & Startup Guidance',
    
    image: imgDevops,
  },
  
];

const Preparations = () => {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-20 bg-white flex flex-col gap-12 border-b-[5px] border-black-200">
      <div className="flex flex-col items-start gap-3">
        <div className="w-[85px] border-t-[5px] border-[#FFC925]" />
        <h2 className="text-[32px] font-bold font-poppins text-black">
          Career Roles in Software Development
        </h2>
        <p className="text-[20px] leading-[45px] text-black font-normal font-poppins">
          Our programs, from Pre-Academy to Experts, equip you with hands-on skills through real-world projects like building apps, robotic systems, websites, APIs, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {rolesData.map((role, index) => (
          <PreparationCard
            key={index}
            title={role.title}
            description={role.description}
            image={role.image}
          />
        ))}
      </div>

      {/* Link to Eligibility page */}
  <Link to="/programs">
    <button className="flex items-center gap-2 bg-[#FFC925] px-6 py-2 rounded-full w-fit hover:bg-yellow-400 transition mt-8">
      <span className="text-[16px] font-semibold text-black font-poppins">Explore programs</span>
      {/*<ArrowRight size={18} className="text-black" />*/}
    </button>
  </Link>
    </section>
  );
};

export default Preparations;
