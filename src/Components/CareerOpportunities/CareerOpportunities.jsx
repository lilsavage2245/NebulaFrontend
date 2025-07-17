import React from "react";
import OpportunityCard from "./OpportunityCard";
import CompanyLogo from "../../assets/Team1.png"; // replace with actual logos

const opportunitiesData = [
  {
    logo: CompanyLogo,
    company: "Jack and Bros",
    location: "DC Washington",
    description:
      "Lorem ipsum purus adipiscing faucibus id vitae sit pulvinar maecenas sollicitudin sit nunc in mauris donec diam massa.",
    salary: "NRs. 25000",
  },
  {
    logo: CompanyLogo,
    company: "Codecraft Inc",
    location: "London, UK",
    description:
      "Join our dev team building AI apps for smart cities. Interns & grads welcome!",
    salary: "£18/hr",
  },
  {
    logo: CompanyLogo,
    company: "Nebula Partners",
    location: "Remote",
    description:
      "Remote opportunity for junior front-end devs. 20 hours/week with mentorship.",
    salary: "$1500/mo",
  },
  {
    logo: CompanyLogo,
    company: "TechHive Labs",
    location: "Lagos, Nigeria",
    description:
      "Build mobile apps for health and education. Work with a dynamic local team.",
    salary: "₦200,000",
  },
  {
    logo: CompanyLogo,
    company: "StartUp Nova",
    location: "Berlin, Germany",
    description:
      "Get hands-on with real-time systems and IoT development projects.",
    salary: "€2000/mo",
  },
  {
    logo: CompanyLogo,
    company: "AlphaGrowth",
    location: "San Francisco, USA",
    description:
      "Tech internship program for students passionate about fintech and data science.",
    salary: "$2500 stipend",
  },
];

const CareerOpportunities = () => {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-20 bg-white border-b-[5px] border-black-200 flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col items-start gap-4">
        <div className="w-[85px] border-t-[5px] border-[#FFC925]" />
        <h2 className="text-[32px] font-bold font-poppins text-black">
          Career Opportunities You Can Apply To
        </h2>
        
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {opportunitiesData.map((item, index) => (
          <OpportunityCard key={index} {...item} />
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className="px-6 py-3 bg-[#FFC925] text-black font-poppins text-lg rounded-full hover:bg-[#139bd8] transition">
          Show More Opportunities
        </button>
      </div>
    </section>
  );
};

export default CareerOpportunities;
