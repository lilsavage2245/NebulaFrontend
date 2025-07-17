import React from 'react';
import CareerRolesCard from './CareerRolesCard';

import imgFrontend from '../../assets/Study1.png';
import imgBackend from '../../assets/Study1.png';
import imgFullstack from '../../assets/Study1.png';
import imgMobile from '../../assets/Study1.png';
import imgDevops from '../../assets/Study1.png';
import imgTesting from '../../assets/Study1.png';

const rolesData = [
  {
    title: 'Frontend Developer',
    description:
      'Designs interactive UIs using HTML, CSS, React or Vue.',
    description2:
      'Programs taught: Beginners, intermediate, level 5 Pre-Academy.',
    description3:
      'Vacancies: 15.',
    image: imgFrontend,
  },
  {
    title: 'Backend Developer',
    description:
      'Builds APIs, databases, and server logic with python, Java, or Node.js..',
    description2:
      'Programs taught: Beginners, intermediate, level 5 Pre-Academy.',
    description3:
      'Vacancies: 10.',
    image: imgBackend,
  },
  {
    title: 'Full Stack Developer',
    description:
      'Combines frontend and backend for complete solutions..',
    description2:
      'Works on both client-side and server-side development, ensuring seamless integration.',
    description3:
      'Vacancies: 5.',
    image: imgFullstack,
  },
  {
    title: 'Mobile App Developer',
    description:
      'Creates apps for IOS(swift) or Android(Kotlin, Flutter).',
    description2:
      'Creates responsive and user-friendly mobile applications for iOS and Android.',
    description3:
      'Vacancies: 8.',
    image: imgMobile,
  },
  {
    title: 'QA Engineer',
    description:
      'Tests software to ensure functionality and performance.',
    description2:
      'Ensures smooth deployment and operation of applications in production environments.',
    description3:
      'Vacancies: 6.',
    image: imgDevops,
  },
  {
    title: 'DevOps Engineer',
    description:
      'Automates deployment and manages cloud infrastructure (AWS, Docker)..',
    description2:
      'Identifies bugs and issues before the software goes live.',
    description3:
      'Vacancies: 4.',
    image: imgTesting,
  },
];

const CareerRoles = () => {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-20 bg-white flex flex-col gap-12">
      <div className="flex flex-col items-start gap-3">
        <div className="w-[85px] border-t-[5px] border-[#FFC925]" />
        <h2 className="text-[32px] font-bold font-poppins text-black">
          Career Roles in Software Development
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {rolesData.map((role, index) => (
          <CareerRolesCard
            key={index}
            title={role.title}
            description={role.description}
            description2={role.description2}
            description3={role.description3}
            image={role.image}
          />
        ))}
      </div>
    </section>
  );
};

export default CareerRoles;
