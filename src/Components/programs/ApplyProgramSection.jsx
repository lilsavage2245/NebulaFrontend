import React from "react";
import ApplyProgramCard from "./ApplyProgramCard";
import Program2 from '../../assets/Program2.png';
import Program3 from '../../assets/Program3.png';
import Program4 from '../../assets/Program4.png';
import Program5 from '../../assets/Program5.png';

const ApplyProgramSection = () => {
  const programs = [
    {
      title: "Pre-Academy",
      subtitle: "Program",
      description: "Come learn, play, and invent your future—one fun project at a time.",
      image: Program2,
    },
    {
      title: "Beginner",
      subtitle: "Program",
      description: "Start your tech journey with simple concepts and fun practice tasks.",
      image: Program3,
    },
    {
      title: "Intermediate",
      subtitle: "Program",
      description: "Level up with deeper knowledge and real-world tech project skills.",
      image: Program4,
    },
    {
      title: "Advanced",
      subtitle: "Program",
      description: "Master your craft, build a portfolio, and prepare for job placement.",
      image: Program5,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10 w-full px-4 py-20">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
        <div className="flex flex-col items-center gap-4">
          <div className="border-t-[7px] border-[#FFC925] w-[250px]" />
          <h2 className="text-4xl md:text-4x1 font-bold text-black">
            Explore Programs and Eligibility
          </h2>
        </div>
        <p className="text-xl md:text-[16px] font-normal text-black">
          Each of our programs have a range of requirements and eligibility
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {programs.map((program, index) => (
          <ApplyProgramCard
            key={index}
            title={program.title}
            subtitle={program.subtitle}
            description={program.description}
            image={program.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ApplyProgramSection;
