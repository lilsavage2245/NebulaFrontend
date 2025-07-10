// src/Pages/collaborate/components/IndustryBenefitSection.jsx

import React from "react";
import BenefitCard from "./BenefitCard";

// Sample images (replace with your actual paths)
import Benefit1 from "../../assets/Benefit1.png";
import Benefit2 from "../../assets/Benefit2.png";
import Benefit3 from "../../assets/Benefit3.png";
import Benefit4 from "../../assets/Benefit4.png";

export default function IndustryBenefit() {
  const benefits = [
    {
      image: Benefit1,
      title: "Talent Pipeline:",
      description:
        "Access skilled, trained students ready for internships, apprenticeships and job placements.",
    },
    {
      image: Benefit2,
      title: "Innovation Collaborations:",
      description:
        "Co-develop real-world solutions and engage in practical industry-focused projects with rising tech talents.",
    },
    {
      image: Benefit3,
      title: "Brand Visibility:",
      description:
        "Showcase your brand to a community of future tech leaders through events, sponsorships, and campaigns.",
    },
    {
      image: Benefit4,
      title: "Curriculum Alignment:",
      description:
        "Ensure graduates are job-ready by influencing course content to reflect current industry needs.",
    },
  ];

  return (
    <section className="w-full max-w-[1272px] mx-auto px-4 py-20 border-b-[5px] border-black-200">
      {/* Section Heading */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <div className="w-[250px] border-t-[6px] border-yellow-400"></div>
        <h2 className="text-4xl font-bold text-center text-black font-poppins">
          Why Partner With Nebula Code Academy
        </h2>
      </div>

      {/* Responsive Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            image={benefit.image}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </section>
  );
}
