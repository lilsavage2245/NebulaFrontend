import React from 'react';

const SalaryCard = ({ level, uk, us, ng }) => (
  <div className="flex flex-col item-start bg-white rounded-md p-2 gap-[5px] w-[148px] h-[95px]">
    <p className="text-center font-medium text-sm text-black">{level}</p>
    <p className="text-xs font-medium text-black">UK: {uk}</p>
    <p className="text-xs font-medium text-black">US: {us}</p>
    <p className="text-xs font-medium text-black">Nigeria: {ng}</p>
  </div>
);

const SalaryBreakdown = ({ title }) => {
  return (
    <div className="flex flex-col bg-[#008080] text-white p-4 gap-3 rounded-md w-full max-w-[525px]">
      <h3 className="text-[14px] font-bold">Software Developers</h3>

      <div className="flex flex-col gap-2">
        <p className="text-[10px] font-medium">Typical Salary Rate</p>

        <div className="flex gap-4">
          <SalaryCard
            level="Entry"
            uk="£28,000"
            us="$60,000"
            ng="N 5M"
          />
          <SalaryCard
            level="Mid"
            uk="£50,000"
            us="$100,000"
            ng="N 11M"
          />
          <SalaryCard
            level="Senior"
            uk="£80,000"
            us="$150,000"
            ng="N 25M"
          />
        </div>
      </div>
    </div>
  );
};

export default SalaryBreakdown;
