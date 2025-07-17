// src/components/OverviewSoftware.jsx
import React from 'react';
import { Globe } from 'lucide-react';

const specializations = [
  'Front End',
  'Back End',
  'Full Stack',
  'Mobile Development',
  'DevOps',
  'Cloud Engineering'
];

const OverviewSoftware = () => {
  return (
    <section id="overview" className="w-full px-6 sm:px-12 lg:px-20 py-20 bg-white flex flex-col items-start gap-12">
      {/* Heading and Description */}
      <div className="flex flex-col gap-6 max-w-7xl w-full">
        <div className="w-[85px] border-t-[12px] border-[#FFC925]" />
        <h2 className="text-[40px] font-bold font-poppins text-black">Overview</h2>
        <p className="text-[20px] leading-[45px] text-black font-normal font-poppins">
          <strong>Who is a Software Developer?</strong><br />
          Software developers are the architects of the digital world, creating everything from mobile apps to enterprise systems. They combine creativity, problem-solving, and technical skills to build tools that make life easier—from e-commerce platforms to AI-driven healthcare solutions. At Nebula Code Academy, our hands-on projects ensure you’re ready to tackle real-world challenges from day one.
        </p>
        <p className="text-[20px] leading-[50px] text-black font-medium font-poppins">
          Specialization include:
        </p>
      </div>

      {/* Specialization Cards */}
      <div className="flex flex-wrap gap-6 max-w-7xl w-full">
        {specializations.map((spec, idx) => (
          <div
            key={idx}
            className="relative w-[300px] h-[235px] flex flex-col items-center"
          >
            
            {/* Bottom White Card */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[185px] bg-white border border-teal-600 flex items-center justify-center">
              <span className="text-[24px] sm:text-[28px] lg:text-[35px] font-poppins text-black">
                {spec}
              </span>
            </div>

            {/* Polygon Background */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-teal-600 bg-opacity-50 w-[100px] h-[100px] rounded-[18px]" />

            {/* Globe Icon */}
            <Globe className="absolute top-[15px] left-1/2 transform -translate-x-1/2 text-white w-[70px] h-[70px] z-10" />

          </div>
        ))}
      </div>
    </section>
  );
};

export default OverviewSoftware;
