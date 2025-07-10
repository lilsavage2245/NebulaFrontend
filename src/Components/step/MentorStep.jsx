// src/Pages/collaborate/components/MentorStep.jsx

import React from "react";
import StepCard from "./StepCard";

import Step from "../../assets/Step.png";
//import Step from "../assets/step2.png";
//import Step from "../assets/step3.png";
//import Step from "../assets/step4.png";

export default function MentorStep() {
  const steps = [
    {
      image: Step,
      title: "Step One:",
      description: "Fill out interest form.",
    },
    {
      image: Step,
      title: "Step Two:",
      description: "Get contacted by our partnership team.",
    },
    {
      image: Step,
      title: "Step Three:",
      description: "Define the terms and partnership model.",
    },
    {
      image: Step,
      title: "Step Four:",
      description: "Launch collaboration activities.",
    },
  ];

  return (
    <section className="w-full max-w-[1272px] mx-auto px-4 py-20 border-b-[5px] border-black-200">
      {/* Section Heading */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <div className="w-[250px] border-t-[6px] border-yellow-400"></div>
        <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-4xl font-bold text-center text-black font-poppins">
          How To Get Started
        </h2>
      </div>

      {/* Grid of StepCards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            image={step.image}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}
