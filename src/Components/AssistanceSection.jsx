// AssistanceSection.jsx
import React from 'react';

const AssistanceCard = ({ title, description1, button1, description2, button2 }) => (
  <div className="flex flex-col p-6 gap-8 w-full md:w-[624px] bg-[rgba(56,35,33,0.5)] rounded-lg">
    <h3 className="text-[20px] font-bold text-black">{title}</h3>

    <div className="flex flex-col gap-4">
      <div>
        <p className="text-[16px] text-black mb-2">{description1}</p>
        <button className="px-6 py-2 bg-[#FFC925] text-[#4A2B29] text-[14px] rounded-full shadow-md">
          {button1}
        </button>
      </div>
      <div>
        <p className="text-[16px] text-black mb-2">{description2}</p>
        <button className="px-6 py-2 bg-[#FFC925] text-[#4A2B29] text-[14px] rounded-full shadow-md">
          {button2}
        </button>
      </div>
    </div>
  </div>
);

const AssistanceSection = () => {
  return (
    <section className="max-w-[1272px] mx-auto px-4 py-10 flex flex-col lg:flex-row gap-6">
      <AssistanceCard
        title="NEED HELP APPLYING?"
        description1="Contact admissions (direct email or phone)"
        button1="Contact now"
        description2="Chat with an advisor (live chat option)"
        button2="Chat now"
      />

      <AssistanceCard
        title="NEED HELP DECIDING WHICH COURSE?"
        description1="Talk directly to our friendly advisors"
        button1="Chat now"
        description2="Take a quick placement assessment"
        button2="Take assessment"
      />
    </section>
  );
};

export default AssistanceSection;
