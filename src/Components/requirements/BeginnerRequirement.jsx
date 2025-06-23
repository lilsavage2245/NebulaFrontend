// src/Pages/apply/components/preacademy/BeginnerRequirement.jsx

import React from 'react';
import RequirementCard from './RequirementCard';

export default function BeginnerRequirement() {
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
          title="Parental Guidance"
          description=". Safety and online security. . Parental involvement . Communication. . Special needs and accessibility."
        />
        <RequirementCard
          title="Age Range"
          description="Applicants must be aged between 10 - 16 years old to participate."
        />
        <RequirementCard
          title="Basic Literacy"
          description="Students should be able to read and write in English to understand the course material."
        />
        <RequirementCard
          title="Device Access"
          description="Access to a tablet or computer with internet is recommended for full participation."
        />
      </div>

      {/* Row 2 Cards */}
            <div className="flex flex-wrap justify-left items-center px-[120px] gap-10 w-full bg-white h-[250px]">
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
