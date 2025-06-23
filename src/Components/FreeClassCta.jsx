// src/Components/FreeClassCta.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const FreeClassCta = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#008080] text-white py-12 px-4 flex flex-col items-center text-center gap-6">
      {/* Headline */}
      <h2 className="text-[32px] sm:text-[40px] font-bold leading-tight max-w-3xl">
        Want to Start Application Into Nebula Code Academy?
      </h2>

      {/* Subtext */}
      <p className="text-[16px] sm:text-[18px] max-w-xl leading-relaxed">
        Whether you're joining our free class or applying to the academy, take your first step today.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button
          onClick={() => navigate("/Apply")}
          className="bg-white text-[#4A2B29] px-6 py-3 font-medium text-[16px] shadow-md hover:scale-105 transition rounded"
        >
          Apply Now
        </button>
        <button
          onClick={() => navigate("/FreeClass")}
          className="bg-[#FFC925] text-[#4A2B29] px-6 py-3 font-medium text-[16px] shadow-md hover:scale-105 transition rounded"
        >
          Join Free Class
        </button>
      </div>
    </section>
  );
};

export default FreeClassCta;
