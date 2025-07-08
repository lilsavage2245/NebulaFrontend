// src/components/SearchResult.jsx
import React from "react";
import { X } from "lucide-react"; // Replace with your custom icon if needed
import ResultCard from "./ResultCard"; // Assuming you have a ResultCard component for displaying individual results
import ResultImage from "../assets/Hero.png.png"; // Replace with your actual image path


const resultsData = [
  {
    programTitle: "Pre - Academy Program",
    category: "Frontend",
    topic: "Development",
    sourceLink: "https://www.figma.com/community/design-templates?editor_type=figma",
    introText: "Depending on your interest, you can select a course in",
    highlight: "Frontend",
    continuation: "development or software engineering or artificial intelligence",
    image: ResultImage,
  },
  {
    programTitle: "Beginner Bootcamp",
    category: "Backend",
    topic: "Engineering",
    sourceLink: "https://example.com/backend-bootcamp",
    introText: "Begin your journey with hands-on coding in",
    highlight: "Backend",
    continuation: "engineering or",
    description: "cloud infrastructure and DevOps",
    image: ResultImage,
  },
  {
    programTitle: "AI Specialist Pathway",
    category: "AI",
    topic: "Research",
    sourceLink: "https://example.com/ai-specialist",
    introText: "Explore deep learning through our",
    highlight: "AI",
    continuation: "program or dive into",
    description: "machine learning and robotics",
    image: ResultImage,
  },
];


const SearchResult = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-center items-start px-4 lg:px-12 py-4 gap-8 bg-white mt-10">
      {/* Left Filter Column */}
      <aside className="w-full max-w-md bg-[rgba(119,119,119,0.02)] flex flex-col gap-4 p-2">
        <h2 className="text-[16px] font-bold text-black">Narrow Your Results</h2>

        {/* Sort Section */}
        <div className="border-t border-black pt-2">
          <div className="bg-[rgba(119,119,119,0.2)] px-3 py-2 font-bold text-black text-[16px]">Sort</div>
          {[
            { label: "Relevance", active: true },
            { label: "Date (Newest)" },
            { label: "Date (Oldest)" },
            { label: "Title (A-Z)" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1 text-sm"
            >
              <div
                className={`w-3 h-3 rounded-full border ${
                  item.active ? "bg-teal-600 border-teal-600" : "border-black bg-white"
                }`}
              ></div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Date Filter */}
        <div className="border-t border-black pt-2">
          <div className="bg-[rgba(119,119,119,0.2)] px-3 py-2 font-bold text-black text-[16px]">Date</div>
          {[
            { label: "Yesterday", count: 4 },
            { label: "Past week", count: 72 },
             { label: "Past fortnight", count: 72 },
              { label: "Past month", count: 72 },
               { label: "Past 3 months", count: 72 },
            { label: "Past 6 months", count: 72 },
            { label: "Past year", count: 72 },
            { label: "Uncertain", count: 72 },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1 text-sm text-[#1D15B1]"
            >
              <div className="w-3 h-3 border border-black bg-white"></div>
              <span>{item.label}</span>
              <span className="text-black">({item.count})</span>
            </div>
          ))}
        </div>

        {/* More Filter */}
        <div className="flex items-center gap-2 px-2 text-sm">
          <X size={14} className="text-black" />
          <span>More (25)</span>
        </div>
      </aside>

      {/* Right Result Section */}
      <div className="w-full max-w-4xl flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <p className="text-[13px] text-black">
            Showing 1 - 10 of 3286 results for “frontend”
          </p>
          <div className="border-b border-black text-[12px] text-teal-600 font-bold cursor-pointer">
            Help with search
          </div>
        </div>

        {/* Placeholder for actual result list */}
       <div className="flex flex-col gap-6">
      {resultsData.map((item, index) => (
        <ResultCard key={index} {...item} />
      ))}
    </div>

        
      </div>
    </section>
  );
};

export default SearchResult;
