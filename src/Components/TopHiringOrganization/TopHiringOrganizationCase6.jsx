// src/components/TopHiringOrganizations.jsx
import React from 'react';

const hiringData = [
  ["Google", "Microsoft", "Meta", "Amazon", "Apple", "Netflix", "Banks"],
  ["IBM", "Oracle", "SAP", "Stripe", "Black", "GitHub", "Andela"],
  ["Flutterwave", "Education", "Hospital", "Open-Source Projects"]
];

const TopHiringOrganizationsCase6 = () => {
  return (
    <div className="flex flex-col gap-[5.26px] w-[436.36px] h-auto text-white">
      {/* Title */}
      <h3 className="text-[9.2px] font-semibold leading-[14px]">
        Top Organizations Hiring
      </h3>

      {/* Organization rows */}
      {hiringData.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-row items-center gap-[5.26px] w-full"
        >
          {row.map((org, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center px-[5.25px] py-[5.25px] gap-[6.57px] w-[123.83px] h-[24.51px] bg-white rounded-[5.25px]"
            >
              <span className="text-black text-[9.2px] font-light leading-[14px] tracking-[0.0025em]">
                {org}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TopHiringOrganizationsCase6;
