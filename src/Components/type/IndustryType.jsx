// src/Pages/collaborate/components/IndustryAvailableSection.jsx

import React from "react";
import TypeCard from "./TypeCard";

import Type from "../../assets/Type.png";
//import Type2 from "../../../assets/Type2.png";
//import Type3 from "../../../assets/Type3.png";
//import Type4 from "../../../assets/Type4.png";
//import Type5 from "../../../assets/Type5.png";

export default function IndustryType() {
  const partnerships = [
    {
      image: Type,
      title: "Curriculum Development",
      description:
        "Contribute to curriculum development ensuring alignment with current industry standards.",
      buttonLabel: "Join partnership",
    },
    {
      image: Type,
      title: "Internship Placements",
      description:
        "Offer real-world internship and apprenticeship placements to emerging tech talents.",
      buttonLabel: "Join partnership",
    },
    {
      image: Type,
      title: "Project Collaboration",
      description:
        "Co-develop real projects and case studies to enhance practical student learning.",
      buttonLabel: "Join partnership",
    },
    {
      image: Type,
      title: "Tech Talks & Events",
      description:
        "Host or speak at events to connect directly with students and the academy.",
      buttonLabel: "Join partnership",
    },
    {
      image: Type,
      title: "Scholarship Funding",
      description:
        "Support diverse talent pipelines by funding scholarships and student development programs.",
      buttonLabel: "Join partnership",
    },
  ];

  return (
    <section className="w-full max-w-[1272px] mx-auto px-4 py-20 border-b-[5px] border-black-200">
      {/* Section Heading */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <div className="w-[200px] border-t-[6px] border-yellow-400"></div>
        <h2 className="text-4xl font-bold text-center text-black font-poppins">
          Types of Industry Partnerships Offered
        </h2>
      </div>

      {/* Responsive Grid of Cards */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {partnerships.map((item, index) => (
          <TypeCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            buttonLabel={item.buttonLabel}
          />
        ))}
      </div>
    </section>
  );
}
