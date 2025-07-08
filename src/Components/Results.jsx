// src/components/Results.jsx
import React, { useState } from "react";
import { Globe, BookOpen, Newspaper } from "lucide-react"; // Or replace with your custom icons

const tabOptions = [
  {
    id: "global",
    label: "All results",
    count: 678,
    icon: <Globe size={12} />,
  },
  {
    id: "courses",
    label: "Courses",
    count: 678,
    icon: <BookOpen size={12} />,
  },
  {
    id: "news",
    label: "News",
    count: 678,
    icon: <Newspaper size={12} />,
  },
];

const Results = () => {
  const [activeTab, setActiveTab] = useState("global");

  return (
    <div className="absolute left-[36.04%] right-[36.11%] top-0 flex w-[450px] gap-2 z-10 mb-10">
      {tabOptions.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-center gap-4 px-3 py-2 w-[150px] h-[31px] border ${
              isActive
                ? "bg-white border-teal-600 text-teal-600"
                : "bg-teal-600 border-teal-600 text-white"
            }`}
          >
            <span className="w-[12px] h-[12px] flex items-center justify-center">
              {tab.icon}
            </span>
            <span className="text-[12px] font-medium">
              {tab.label} ({tab.count})
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Results;
