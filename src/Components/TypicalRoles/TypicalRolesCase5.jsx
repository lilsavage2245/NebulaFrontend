// src/components/TypicalRoles.jsx
import React from 'react';
import { ChevronDown } from 'lucide-react';
import careerImage from '../../assets/Course1.png'; // Replace with actual image path

const roles = [
  {
    title: 'Frontend Developer',
    salary: '£28,000 to £35,000',
    image: careerImage,
  },
  {
    title: 'Backend Developer',
    salary: '£30,000 to £40,000',
    image: careerImage,
  },
  {
    title: 'Full Stack Developer',
    salary: '£35,000 to £50,000',
    image: careerImage,
  },
];

const TypicalRolesCase5 = () => {
  return (
    <div className="flex flex-col gap-[10.51px] w-[494.19px] h-[299px] text-white mt-6">
      {/* Heading */}
      <h3 className="text-[7.88px] font-semibold leading-[12px]">
        Typical Roles
      </h3>

      {/* Role cards */}
      {roles.map((role, index) => (
        <div
          key={index}
          className="flex flex-row items-center gap-[10.51px] bg-[#CFE6EC] rounded-[5.25px] w-full h-[85.43px] overflow-hidden"
        >
          {/* Image Section */}
          <div className="w-[131.43px] h-[85.43px] bg-white flex items-center justify-center">
            <img src={role.image} alt={role.title} className="object-contain w-full h-[85px]" />
          </div>

          {/* Info Section */}
          <div className="flex flex-row justify-between items-center px-[15.77px] w-full">
            <div className="flex flex-col gap-[5.26px]">
              <p className="text-black text-[10.51px] font-medium leading-[16px]">
                {role.title}
              </p>
              <p className="text-black text-[7.88px] font-normal leading-[12px]">
                Salary: {role.salary}
              </p>
            </div>

            {/* Chevron Icon */}
            <ChevronDown size={15.77} className="text-black" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TypicalRolesCase5;
