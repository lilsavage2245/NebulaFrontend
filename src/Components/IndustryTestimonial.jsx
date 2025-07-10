// src/Pages/collaborate/components/Testimonials.jsx

import React from "react";

import Team1 from "../assets/Team1.png";
import Team2 from "../assets/Team2.png";
import Team3 from "../assets/Team3.png";

const testimonials = [
  {
    name: "Ada Johnson",
    company: "Google",
    quote:
      "Partnering with Nebula has given us access to enthusiastic tech talent and co-creation opportunities.",
    image: Team1,
  },
  {
    name: "Emeka Okwuosa",
    company: "Dell Technologies",
    quote:
      "Their students come with real-world readiness. We’ve hired interns who turned into full-time stars.",
    image: Team2,
  },
  {
    name: "Linda Mensah",
    company: "Amazon",
    quote:
      "Nebula's team is professional, and collaborating on tech events has been a delight!",
    image: Team3,
  },
];

export default function IndustryTestimonial() {
  return (
    <section className="w-full max-w-[1272px] mx-auto px-4 py-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <div className="w-[250px] border-t-[6px] border-yellow-400"></div>
        <h2 className="text-[32px] sm:text-[36px] md:text-4xl font-bold text-center text-black font-poppins">
          What Our Partners Say
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col items-center text-center gap-4"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 object-cover rounded-full"
            />
            <p className="text-[16px] font-medium text-gray-700 leading-relaxed">
              “{testimonial.quote}”
            </p>
            <div className="mt-4">
              <p className="text-[16px] font-semibold text-black">
                {testimonial.name}
              </p>
              <p className="text-[14px] text-gray-500">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
