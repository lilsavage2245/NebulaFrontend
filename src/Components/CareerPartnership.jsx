import React from 'react';
import { ArrowRight, Lightbulb, BriefcaseBusiness, FileText, Users2, GraduationCap, Atom } from "lucide-react";

const partnerships = [
  {
    icon: <BriefcaseBusiness className="w-16 h-16 text-teal-600" />, 
    label: "Internship Placements",
  },
  {
    icon: <Lightbulb className="w-16 h-16 text-teal-600" />,
    label: "Job Opportunities",
  },
  {
    icon: <FileText className="w-16 h-16 text-teal-600" />,
    label: "Real World Projects Brief",
  },
  {
    icon: <Users2 className="w-16 h-16 text-teal-600" />,
    label: "Guest Lectures & Mentorship",
  },
  {
    icon: <GraduationCap className="w-16 h-16 text-teal-600" />,
    label: "Certifications Partnership",
  },
  {
    icon: <Atom className="w-16 h-16 text-teal-600" />,
    label: "Tech Innovation Challenges",
  },
];

const CareerPartnership = () => {
  return (
    <section className="w-full px-4 md:px-12 lg:px-20 py-20 flex flex-col items-center gap-12">
      {/* Header */}
      <div className="text-center max-w-4xl">
        <div className="w-[223px] h-0 border-t-[5px] border-yellow-400 mx-auto mb-3" />
        <h2 className="text-[32px] font-bold text-black">Partner With Nebula (Build the future with us)</h2>
        <p className="text-base md:text-lg text-black mt-4">
          At Nebula Code Academy, we are not just training learners, we are preparing tomorrow’s innovators.
          We invite companies, start-ups, and organizations to collaborate with us through:
          <br />
          <span className="font-medium">More information on available collaboration partnership found here.</span>
        </p>
      </div>

      <div className="bg-[#FFC925] rounded-2xl p-6 lg:p-10 flex flex-col gap-6">
        <div className="flex flex-wrap justify-center gap-6">
          {partnerships.map((item, index) => (
            <div
              key={index}
              className="w-[300px] h-[200px] bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-md hover:scale-[1.02] transition-all"
            >
              <div className="mb-3">{item.icon}</div>
              <div className="flex items-center gap-2 text-center text-sm font-medium">
                <span>{item.label}</span>
                <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <p className="text-center italic text-[17px] font-medium text-black mt-10">
          “Together, we can bridge the gap between Education and Industry.”
        </p>
      </div>
    </section>
  );
};

export default CareerPartnership;
