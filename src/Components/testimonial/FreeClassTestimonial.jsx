// src/Components/FreeClassTestimonials.jsx

import React from "react";
import TestimonialCard from "./TestimonialCard";
import teamImage from "../../assets/Team1.png"; // adjust path as needed

const testimonials = [
  {
    name: "Martin Okoye",
    date: "26th June, 2025",
    image: teamImage,
    message: "I began my application after attending some free class. It was incredibly helpful!"
  },
  {
    name: "Ada Nwachukwu",
    date: "15th May, 2025",
    image: teamImage,
    message: "The class gave me the confidence to pursue my tech career."
  },
  {
    name: "John Musa",
    date: "10th April, 2025",
    image: teamImage,
    message: "I learned so much in a short time. Highly recommend the free class!"
  },
  {
    name: "Blessing Ade",
    date: "5th March, 2025",
    image: teamImage,
    message: "As a beginner, this class broke down the basics in a simple way."
  },
  {
    name: "Chinedu Bello",
    date: "20th Feb, 2025",
    image: teamImage,
    message: "Great instructors and very interactive sessions!"
  },
  {
    name: "Amaka Eze",
    date: "1st Jan, 2025",
    image: teamImage,
    message: "Joining this free class was the best decision I made this year."
  },
];



const FreeClassTestimonial = () => {
  return (
    <section className="w-full max-w-[1272px] mx-auto flex flex-col gap-[56px] px-4 mt-20">
      {/* Header Section (Frame 444) */}
      <div className="flex justify-between items-end">
        <h2 className="text-[45px] font-bold leading-[54px] text-black font-['Inter']">
          Reviews/ Testimonials/ Articles
        </h2>

        <button className="flex items-center justify-center px-6 py-2 gap-2 bg-[#008080] shadow-[0px_16px_24px_2px_rgba(0,0,0,0.25)]">
          <span className="text-[14px] font-normal leading-[20px] text-[#4A2B29] font-['Poppins']">
            Load More
          </span>
        </button>
      </div>

      {/* Grid of Cards (Frame 443) */}
      <div className="grid grid-cols-3 gap-y-[56px] gap-x-[20px]">
        {testimonials.slice(0, 6).map((item, idx) => (
          <TestimonialCard
            key={idx}
            name={item.name}
            date={item.date}
            image={item.image}
            message={item.message}
          />
        ))}
      </div>
    </section>
  );
};

export default FreeClassTestimonial;