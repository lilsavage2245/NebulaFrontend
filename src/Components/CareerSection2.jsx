// src/components/CareerSection.jsx
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import SalaryBreakdown from "./SalaryBreakdown/SalaryBreakdown";
import TopHiringOrganizations from "./TopHiringOrganization/TopHiringOrganizations";
import TypicalRoles from "./TypicalRoles/TypicalRoles";
import SalaryBreakdownCase2 from "./SalaryBreakdown/SalaryBreakdownCase2";
import TopHiringOrganizationsCase2 from "./TopHiringOrganization/TopHiringOrganizationCase2";
import TypicalRolesCase2 from "./TypicalRoles/TypicalRolesCase2";
import SalaryBreakdownCase3 from "./SalaryBreakdown/SalaryBreakdownCase3";
import TopHiringOrganizationsCase3 from "./TopHiringOrganization/TopHiringOrganizationCase3";
import TypicalRolesCase3 from "./TypicalRoles/TypicalRolesCase3";
import SalaryBreakdownCase4 from "./SalaryBreakdown/SalaryBreakdownCase4";
import TopHiringOrganizationsCase4 from "./TopHiringOrganization/TopHiringOrganizationsCase4";
import TypicalRolesCase4 from "./TypicalRoles/TypicalRolesCase4";
import SalaryBreakdownCase5 from "./SalaryBreakdown/SalaryBreakdownCase5";
import TopHiringOrganizationsCase5 from "./TopHiringOrganization/TopHiringOrganizationCase5";
import TypicalRolesCase5 from "./TypicalRoles/TypicalRolesCase5";
import SalaryBreakdownCase6 from "./SalaryBreakdown/SalaryBreakdownCase6";
import TopHiringOrganizationsCase6 from "./TopHiringOrganization/TopHiringOrganizationCase6";
import TypicalRolesCase6 from "./TypicalRoles/TypicalRolesCase6";

const careerOptions = [
  { id: 1, percentage: "42%", title: "Software Developers" },
  { id: 2, percentage: "25%", title: "Game Designer & Animators" },
  { id: 3, percentage: "18%", title: "AI & Robotics" },
  { id: 4, percentage: "10%", title: "Web & App Developers" },
  { id: 5, percentage: "3%", title: "Creative Tech Arts" },
  { id: 6, percentage: "2%", title: "STEM Research & Innovators" },
];

const CareerSection2 = () => {
  const [selectedId, setSelectedId] = useState(1);

  const renderCareerContent = () => {
    switch (selectedId) {
      case 1:
        return (
          <>
            <SalaryBreakdown />
            <TopHiringOrganizations />
            <TypicalRoles />
          </>
        );
      case 2:
        return (
          <>
            <SalaryBreakdownCase2 />
            <TopHiringOrganizationsCase2 />
            <TypicalRolesCase2 />
          </>
        );
      case 3:
        return (
          <>
          <SalaryBreakdownCase3 />
          <TopHiringOrganizationsCase3 />
          <TypicalRolesCase3 />
          </>
        );
      case 4:
        return (
          <>
          <SalaryBreakdownCase4 />
          <TopHiringOrganizationsCase4 />
          <TypicalRolesCase4 />
          </>
        );
      case 5:
        return (
          <>
          <SalaryBreakdownCase5 />
          <TopHiringOrganizationsCase5 />
          <TypicalRolesCase5 />
          </>
        );
      case 6:
        return (
          <>
          <SalaryBreakdownCase6 />
          <TopHiringOrganizationsCase6 />
          <TypicalRolesCase6 />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex w-full max-w-[1272px] h-[650px] shadow-md bg-white">
      {/* Left Column */}
      <div className="w-[420px] flex flex-col justify-between p-4 gap-2 bg-white border-r">
        <div className="space-y-2">
          <div className="text-sm font-medium text-black mb-1">
            Our graduates are...
          </div>

          {careerOptions.map((career) => (
            <button
              key={career.id}
              onClick={() => setSelectedId(career.id)}
              className={`flex items-center justify-between w-full px-2 py-1 ${
                selectedId === career.id ? "bg-teal-600 text-white" : "border-b"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs ${
                    selectedId === career.id ? "text-white" : "text-black"
                  }`}
                >
                  {career.percentage}
                </span>
                <span
                  className={`text-xs font-medium ${
                    selectedId === career.id ? "text-white" : "text-black"
                  }`}
                >
                  {career.title}
                </span>
              </div>
              <ChevronRight
                size={16}
                className={`${
                  selectedId === career.id ? "text-white" : "text-black"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="p-2 bg-gray-200 w-full text-xs space-y-1">
          <p className="font-medium">Did you know...</p>
          <p className="text-[10px]">
            Our graduates from this course typically earn
          </p>
          <p className="font-medium">£45,000</p>
          <p className="text-[10px]">After 5 years</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-start bg-[#008080] text-white p-4 gap-[7px] w-full max-w-[852px] overflow-y-auto">
        {renderCareerContent()}
      </div>
    </div>
  );
};

export default CareerSection2;
