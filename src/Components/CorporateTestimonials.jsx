// src/Pages/collaborate/components/Testimonials.jsx

import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "TechCorp Inc.",
    role: "Gold Sponsor",
    quote:
      "Partnering with Nebula Academy has given us access to top tech talent and meaningful brand exposure.",
  },
  {
    name: "FutureMinds Foundation",
    role: "Platinum Sponsor",
    quote:
      "We’re proud to support the next generation of innovators through this impactful sponsorship.",
  },
  {
    name: "DevBoost",
    role: "Silver Sponsor",
    quote:
      "The collaboration opportunities and community engagement were far beyond our expectations.",
  },
];

export default function CorporateTestimonials() {
  return (
    <section className="w-full max-w-[1272px] mx-auto px-4 py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold font-poppins text-black mb-4">
          Current Corporate Sponsors
        </h2>
        <p className="text-[20px] font-light text-gray-700 font-poppins max-w-2xl mx-auto">
          Hear directly from our sponsors about their experience and impact partnering with us.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between h-full"
          >
            <Quote className="text-yellow-400 w-10 h-10 mb-4" />
            <p className="text-[18px] text-gray-800 mb-6 font-poppins leading-relaxed">
              “{item.quote}”
            </p>
            <div>
              <h4 className="text-[20px] font-semibold text-black font-poppins">
                {item.name}
              </h4>
              <p className="text-gray-600 text-sm font-poppins">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
