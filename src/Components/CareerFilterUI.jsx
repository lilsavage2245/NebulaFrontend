import React, { useState } from 'react';
import { Search, ArrowRight, Home } from 'lucide-react';

const CareerFilterUI = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <section className="w-full bg-[rgba(119,119,119,0.2)] px-4 md:px-12 py-12 flex flex-col gap-10 items-center">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 w-full max-w-lg">
        <h2 className="text-2xl md:text-[32px] font-bold text-center text-black font-inter">
          Career Finder
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex items-center border border-black rounded-lg px-4 py-2 flex-1">
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full outline-none text-sm font-inter placeholder:text-black"
              placeholder="Type a keyword"
            />
          </div>
          <button className="bg-[#008080] text-white px-6 py-3 rounded-lg flex items-center gap-2">
            <Search size={16} /> Search
          </button>
        </div>
      </div>

      {/* Filter Panel and Results */}
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-[1268px]">
        {/* Sidebar Filters */}
        <aside className="bg-white w-full max-w-xs p-4 flex flex-col gap-6">
          <h3 className="text-xl font-bold font-inter">Filter By</h3>

          

          {/* Repeat for Field, Level, Salary */}
          {['Field', 'Level', 'Salary Range (/hr)'].map((section, idx) => (
            <div key={idx} className="border-t border-black pt-4">
              <h4 className="text-lg font-bold font-inter mb-2">{section}</h4>
              {['A.I', 'Software', 'Design'].map((opt, i) => (
                <div key={i} className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 border border-black rounded-full" />
                  <span className="text-sm font-inter">{opt}</span>
                </div>
              ))}


            </div>



          ))}

          {/* Filter Group Example: Location */}
          <div className="border-t border-black pt-4">
            <h4 className="text-lg font-bold font-inter mb-2">Location</h4>
            {['Can Travel', 'Remote Friendly', 'Near me'].map((option, i) => (
              <div key={i} className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 border border-black rounded-full" />
                <span className="text-sm font-inter">{option}</span>
              </div>
            ))}
            <button className="mt-4 bg-[#FFC925] rounded-full px-4 py-2 flex items-center gap-2 text-sm text-[#4A2B29]">
              Collapse <ArrowRight size={16} />
            </button>
          </div>
        </aside>

        {/* Results Area */}
        <main className="flex-1 flex flex-col gap-6">
          {/* Category Filter Tabs */}
          <div className="flex gap-6 border-b border-black pb-2">
            {['All', 'Student/Alumni', 'Freebie'].map((tab, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 border-r border-black">
                {tab === 'All' && <Home size={20} />}<span className="font-bold text-lg font-inter">{tab}</span>
              </div>
            ))}
          </div>

          {/* Example Result Card */}
          <div className="flex gap-6 flex-wrap">
            {[1, 2, 3].map((card) => (
              <div key={card} className="bg-white p-4 rounded-lg w-full max-w-xs flex flex-col gap-4">
                <div className="flex flex-col gap-1 text-sm font-inter">
                  <p className="font-medium">AdvancedCompany name</p>
                  <p>Location/Remote</p>
                  <p>Role name</p>
                  <p>Description</p>
                </div>
                <div className="flex justify-between items-center">
                  <button className="bg-[#FFC925] text-[#4A2B29] text-sm rounded-full px-4 py-2">
                    Price
                  </button>
                  <button className="border border-black text-[#4A2B29] text-sm rounded-full px-4 py-2">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default CareerFilterUI;
