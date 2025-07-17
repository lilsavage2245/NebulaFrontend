// src/components/SalaryDemand.jsx
import React from 'react';
import { ChevronDown } from 'lucide-react';

const salaryData = [
  {
    region: 'UK',
    entry: '£30K - £50K',
    mid: '£30K - £50K',
    senior: '£30K - £50K',
  },
  {
    region: 'US',
    entry: '£50K - £70K',
    mid: '£70K - £90K',
    senior: '£90K - £110K',
  },
  {
    region: 'Canada',
    entry: '£40K - £60K',
    mid: '£60K - £80K',
    senior: '£80K - £100K',
  },
  {
    region: 'Remote',
    entry: '£30K - £60K',
    mid: '£60K - £80K',
    senior: '£80K - £100K',
  },
];

const SalaryDemand = () => {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-20 flex flex-col gap-12">
      {/* Heading */}
      <div className="flex flex-col gap-3">
        <div className="w-[85px] border-t-[12px] border-[#FFC925]" />
        <h2 className="text-[40px] font-bold font-poppins text-black leading-[50px]">
          Salary and Demand Insight
        </h2>
      </div>

      {/* Table Box */}
      <div className="bg-white border border-black rounded-lg p-10 overflow-x-auto">
        <h3 className="text-[18px] font-bold mb-6 font-poppins">Salary Table</h3>

        {/* Table Head */}
        <div className="flex border-b border-black">
          <div className="w-[270px] p-4 text-[18px] font-bold border-r border-black">Region</div>
          <div className="w-[270px] p-4 text-[18px] font-bold border-r border-black">Entry-Level</div>
          <div className="w-[270px] p-4 text-[18px] font-bold border-r border-black">Mid-Level</div>
          <div className="w-[270px] p-4 text-[18px] font-bold">Senior-Level</div>
        </div>

        {/* Table Rows */}
        {salaryData.map((item, index) => (
          <div
            key={index}
            className="flex border-b border-black items-center hover:bg-gray-50"
          >
            <div className="w-[270px] p-4 flex items-center justify-between border-r border-black">
              <span className="font-poppins text-[18px] text-black">{item.region}</span>
              <ChevronDown size={20} />
            </div>
            <div className="w-[270px] p-4 font-poppins text-[18px] text-black border-r border-black">
              {item.entry}
            </div>
            <div className="w-[270px] p-4 font-poppins text-[18px] text-black border-r border-black">
              {item.mid}
            </div>
            <div className="w-[270px] p-4 font-poppins text-[18px] text-black">
              {item.senior}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SalaryDemand;
