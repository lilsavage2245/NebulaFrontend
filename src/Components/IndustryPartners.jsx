// src/Pages/collaborate/components/IndustryPartners.jsx

import React from "react";

// Import your partner logo images
import GoogleLogo from "../assets/google.png";
import MetaLogo from "../assets/meta.png";
import AppleLogo from "../assets/apple.png";
import MicrosoftLogo from "../assets/microsoft.png";
import AmazonLogo from "../assets/amazon.png";

export default function IndustryPartners() {
  const partners = [
    { name: "Google", logo: GoogleLogo },
    { name: "Meta", logo: MetaLogo },
    { name: "Apple", logo: AppleLogo },
    { name: "Microsoft", logo: MicrosoftLogo },
    { name: "Amazon", logo: AmazonLogo },
  ];

  return (
    <section className="w-full max-w-[1272px] mx-auto px-4 py-20 flex flex-col items-center gap-6">
      {/* Yellow vector line */}
      <div className="w-[250px] border-t-[6px] border-yellow-400"></div>

      {/* Heading */}
      <h2 className="text-[36px] sm:text-[40px] md:text-4x1 font-bold text-center text-black font-inter leading-[1.2]">
        Current Industry Partners
      </h2>

      {/* Logo Grid */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-[72px] w-full max-w-[1272px] mt-16">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className="w-[150px] h-[72px] flex items-center justify-center"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Caption */}
      <p className="text-center text-[20px] sm:text-[24px] md:text-[24px] font-medium leading-[39px] text-black max-w-[823px] font-inter">
        Partnership with some of the most reliable companies
      </p>
    </section>
  );
}
