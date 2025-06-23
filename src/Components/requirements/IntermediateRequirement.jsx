// src/Pages/apply/components/preacademy/IntermediateRequirement.jsx

import React from 'react';
import RequirementCard from './RequirementCard';

export default function IntermediateRequirement() {
  return (
    <section className="flex flex-col items-start w-full bg-[#FFC925] py-10 gap-10 mt-[90px]">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center w-full h-[150px] px-[120px] gap-4 ">
        <h2 className="text-[48px] leading-[58px] font-bold text-black font-poppins max-w-[1272px]">
          Requirements & Eligibility
        </h2>
        <p className="text-[20px] leading-[24px] font-medium text-black text-start font-inter max-w-[1272px]">
          You do not need prior tech knowledge to apply for our Pre-academy Program. The following are the necessary requirements and eligibility criteria:
        </p>
      </div>

      {/* Row 1 Cards */}
      <div className="flex flex-wrap justify-center items-center px-6 gap-10 w-full bg-white h-[250px]">
        <RequirementCard
          title="Prior Knowledge"
          description=". Basic understanding of programming."
          description2=". Experience with any block-based......."
          description3=". Basic computer literacy."
        />
        <RequirementCard
          title="Educational Background"
          description=". Completion of beginner program."
          description2=". Prior technical training(Certificate & portfolio)."
          description3=". Completion of intermediate entrance exams."
        />
        <RequirementCard
          title="Technical Readiness"
          description=". Access to a laptop or a desktop computer(window)."
          description2=". Comfortable with online learning tools like zoom,Google etc."
        />
        <RequirementCard
          title="Device Access"
          description="Access to a tablet or computer with internet is recommended for full participation."
        />
      </div>

      {/* Row 2 Cards */}
            <div className="flex flex-wrap justify-left items-center px-16 gap-10 w-full bg-white h-[250px]">
              <RequirementCard
                title="Study Mode"
                description=". Full time study."
                description2=". Part time study "
                description3=". Flexible/Self paced study. "
              />
              <RequirementCard
                title="How To Apply"
                description="Complete eligibility form."
                description2="Complete application form."
                description3="Submit application"
                description4="Application review"
              />
              <RequirementCard
                title="After You Apply"
                description=" . Application review ."
                description2=" . Acceptance review"
                description3=" . Instructions of starting date, course materials and next steps"
              />
            </div>
          </section>
  );
}
