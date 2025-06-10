import React from "react";
import ApplyOptionCard from "./ApplyOptionCard";

// import your images
import Option1 from "../../assets/Option1.png";
import Option2 from "../../assets/Option2.png";
import Option3 from "../../assets/Option3.png";
import Option4 from "../../assets/Option4.png";

const cardData = [
  {
    image: Option1,
    title: "Web Development",
    levels: "Beginners\nIntermediate\nAdvanced",
  },
  {
    image: Option2,
    title: "Mobile App Dev",
    levels: "Beginners\nIntermediate\nAdvanced",
  },
  {
    image: Option3,
    title: "UI/UX Design",
    levels: "Beginners\nIntermediate\nAdvanced",
  },
  {
    image: Option4,
    title: "Data Science",
    levels: "Beginners\nIntermediate\nAdvanced",
  },
];

const ApplyOptionSection = () => {
  return (
    <section className="flex flex-col items-center gap-12 px-4 py-20 bg-white">
      {/* Heading */}
      <div className="text-center max-w-3xl">
        <div className="w-[314px] mx-auto border-t-[7px] border-[#FFC925] mb-4" />
        <h2 className="text-[45px] font-bold text-black">
          Explore Course Options
        </h2>
        <p className="text-[24px] font-normal text-black mt-2">
          Each option offers flexible learning paths suited to your level.
        </p>
      </div>

      {/* Card Row */}
      <div className="flex flex-wrap justify-center gap-6 max-w-[1300px] w-full">
        {cardData.map((card, index) => (
          <ApplyOptionCard
            key={index}
            image={card.image}
            details={{
              title: card.title,
              levels: card.levels,
            }}
          />
        ))}
      </div>

      {/* See More Button */}
      <button className="mt-8 px-10 py-4 text-lg font-medium bg-[#FFC925] text-[#4A2B29] rounded-full shadow-lg hover:scale-105 transition">
        See More
      </button>
    </section>
  );
};

export default ApplyOptionSection;
