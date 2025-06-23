// src/Components/FreeClassTabs.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const tabs = ['ALL', 'Upcoming', 'Past', 'Beginner', 'Pre-academy', 'Intermediate', 'Advanced'];

export default function FreeClassTabs() {
  const [activeTab, setActiveTab] = useState('ALL');

  return (
    <section className="w-full bg-[#CFE6EC] px-4 md:px-10 py-10 flex flex-col items-center gap-8 mt-12">
      {/* Top Section */}
      <div className="flex flex-col items-center gap-4">
        {/* Yellow Vector line */}
        <div className="border-t-[6px] border-[#FFC925] w-[200px] md:w-[270px]" />
        <h2 className="text-[32px] md:text-[48px] font-bold text-center text-black">
          What You Will Learn
        </h2>
        <p className="text-center text-[16px] font-medium max-w-[900px]">
          This place will contain a brief discussion / description of this topic before the tabs and the search bar will be displayed as seen below
        </p>
      </div>

      {/* Tab + Search Section */}
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-white px-6 py-4 rounded-xl w-full max-w-[1100px] shadow-md">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-md text-sm font-medium border ${
                activeTab === tab ? 'border-black bg-[#FFC925]' : 'border-gray-300 bg-white'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-3 bg-[#008080] px-4 py-2 rounded-lg w-full max-w-[260px]">
          <input
            type="text"
            placeholder="Search a specific topic"
            className="bg-transparent text-white placeholder-white w-full focus:outline-none"
          />
          <Search className="text-white w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
