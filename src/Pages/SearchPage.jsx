// src/pages/SearchPage.jsx
import React, { useState,  } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Results from "../Components/Results"; // Adjust the import path as necessary
import SearchResult from "../Components/SearchResult";

const categories = [
  "All",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "AI & Robotics",
  "Game Design",
  "Creative Tech Arts",
];

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const keyword = queryParams.get("q") || "";
  const initialCategory = queryParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    queryParams.set("category", newCategory);
    navigate(`/search?${queryParams.toString()}`);
  };

  // Mock Data (Replace with real API results)
  const allResults = [
    { title: "Build a Responsive Frontend", category: "Frontend Developer" },
    { title: "Train an AI Model", category: "AI & Robotics" },
    { title: "Game Animation Basics", category: "Game Design" },
    { title: "Full Stack Job Opportunities", category: "Full Stack Developer" },
  ];

  const filteredResults = allResults.filter((result) => {
    const matchKeyword = result.title.toLowerCase().includes(keyword.toLowerCase());
    const matchCategory = selectedCategory === "All" || result.category === selectedCategory;
    return matchKeyword && matchCategory;
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
      <p className="text-sm text-gray-600">
        Showing results for: <strong>{keyword}</strong>
      </p>

      {/* Filters */}
      <div className="mt-4 flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-1 rounded-full border text-sm ${
              selectedCategory === cat
                ? "bg-teal-600 text-white"
                : "border-gray-300 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="mt-6 space-y-4">
        {filteredResults.length > 0 ? (
          filteredResults.map((item, idx) => (
            <div
              key={idx}
              className="p-4 border rounded-md bg-white shadow-sm flex justify-between items-center"
            >
              <div>
                <h4 className="text-lg font-medium">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-6">No results found.</p>
        )}
      </div>
      <div className="relative min-h-screen bg-white rounded-md shadow-lg p-6">
      <Results />

      <SearchResult />
      {/* Rest of your search results content */}
    </div>
    </div>
  );
};

export default SearchPage;
