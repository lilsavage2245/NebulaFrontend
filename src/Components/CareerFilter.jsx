import React, { useState } from 'react';
import { careerRoles } from '../data/careerRolesData'; // Adjust path as needed
import { HomeIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const CareerFilter = () => {
  const [keyword, setKeyword] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [filters, setFilters] = useState({
    travel: false,
    remoteFriendly: false,
    nearMe: false,
    field: '',
    level: '',
    salary: '',
  });

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type] === value ? '' : value,
    }));
  };

  const toggleBoolFilter = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredRoles = careerRoles.filter((role) => {
    const keywordMatch = keyword === '' ||
      role.role.toLowerCase().includes(keyword.toLowerCase()) ||
      role.description.toLowerCase().includes(keyword.toLowerCase());

    const tabMatch = activeTab === 'All' || role.category === activeTab;
    const fieldMatch = !filters.field || role.field === filters.field;
    const levelMatch = !filters.level || role.level === filters.level;
    const salaryMatch = !filters.salary || role.price === filters.salary;
    const travelMatch = !filters.travel || role.travel;
    const remoteMatch = !filters.remoteFriendly || role.remoteFriendly;
    const nearMatch = !filters.nearMe || role.nearMe;

    return (
      keywordMatch &&
      tabMatch &&
      fieldMatch &&
      levelMatch &&
      salaryMatch &&
      travelMatch &&
      remoteMatch &&
      nearMatch
    );
  });

  return (
    <div className="flex flex-col items-center px-4 gap-8 w-full bg-[rgba(119,119,119,0.2)] py-12">
      <div className="text-3xl font-bold text-center">Career Finder</div>

      {/* Search bar */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Type a keyword"
          className="border border-black rounded px-4 py-3 w-80"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="bg-teal-700 text-white px-6 py-3 rounded">Search</button>
      </div>

      <div className="flex gap-10 w-full max-w-[1200px]">
        {/* Filter Panel and Results */}
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-[1268px]">
        {/* Sidebar Filters */}
        <div className="bg-white w-full max-w-xs p-4 flex flex-col gap-4">
          <h3 className="text-xl font-bold font-inter">Filter By</h3>

         

          <div className="border-t border-black pt-4 mb-6">
            <h4 className="text-lg font-bold font-inter mb-2">Field</h4>
            {['A.I', 'Software', 'Design'].map((item) => (
              <button key={item} onClick={() => handleFilterChange('field', item)}
                className={`block mb-2 ${filters.field === item ? 'text-teal-700 font-bold' : ''}`}>{item}</button>
            ))}
          </div>

          <div className="border-t border-black pt-4 mb-6">
            <h4 className="text-lg font-bold font-inter mb-2">Level</h4>
            {['Beginner', 'Intermediate', 'Advanced'].map((item) => (
              <button key={item} onClick={() => handleFilterChange('level', item)}
                className={`block mb-2 ${filters.level === item ? 'text-teal-700 font-bold' : ''}`}>{item}</button>
            ))}
          </div>

          <div className="border-t border-black pt-4 mb-6">
            <h4 className="text-lg font-bold font-inter mb-2">Salary Range (/hr)</h4>
            {['Beginner', 'Intermediate', 'Advanced'].map((item) => (
              <button key={item} onClick={() => handleFilterChange('salary', item)}
                className={`block mb-2 ${filters.salary === item ? 'text-teal-700 font-bold' : ''}`}>{item}</button>
            ))}
          </div>

          <div className="border-t border-black pt-4 mb-6">
            <h4 className="text-lg font-bold font-inter mb-2">Location</h4>
            <div className="space-y-2">
              <label><input type="checkbox" checked={filters.travel} onChange={() => toggleBoolFilter('travel')} /> Can Travel</label><br/>
              <label><input type="checkbox" checked={filters.remoteFriendly} onChange={() => toggleBoolFilter('remoteFriendly')} /> Remote Friendly</label><br/>
              <label><input type="checkbox" checked={filters.nearMe} onChange={() => toggleBoolFilter('nearMe')} /> Near Me</label>
              <button className="mt-4 bg-[#FFC925] rounded-full px-4 py-2 flex items-center gap-2 text-sm text-[#4A2B29]">
              Collapse <ArrowRight size={16} />
            </button>
            </div>
          </div>
        </div>

        {/* Right side content */}
<div className="flex-1 space-y-6">
  {/* Tabs */}
  <div className="flex gap-6 border-b pb-2">
    {['All', 'Student/Alumni', 'Freebie'].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`flex items-center gap-2 text-lg ${
          activeTab === tab ? 'border-b-2 border-black font-semibold' : ''
        }`}
      >
        {tab === 'All' && activeTab === 'All' && <HomeIcon className="w-5 h-5" />}
        {tab}
      </button>
    ))}
  </div>

          {/* Dynamic Job Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoles.length === 0 && <div>No roles match your filters.</div>}

            {filteredRoles.map((role) => (
              <div key={role.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-sm font-medium">{role.company}</div>
                <div className="text-sm text-gray-500">{role.location}</div>
                <div className="text-lg font-semibold">{role.role}</div>
                <p className="text-sm mt-2">{role.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <button className="bg-yellow-400 px-4 py-2 rounded-full text-xs">{role.price}</button>
                  <button className="border border-black px-4 py-2 rounded-full text-xs">Apply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CareerFilter;
