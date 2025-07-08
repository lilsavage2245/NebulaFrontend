// src/components/SearchBar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full gap-2">
      <input
        type="text"
        placeholder="Course title or Keyword"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow p-2 rounded bg-white text-sm text-black placeholder:text-black/60"
      />
      <button
        type="submit"
        className="bg-[#FFC925] px-4 py-2 rounded-lg text-black font-medium text-sm flex items-center justify-center gap-1">

         <Search className="w-4 h-4" /> Search
      </button>
    </form>
  );
};

export default SearchBar;
