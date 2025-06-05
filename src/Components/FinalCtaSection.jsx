// FinalCTASection.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#FFC925]/50 py-16 px-4 text-center mt-24 mb-24">
      <h2 className="text-[40px] md:text-[56px] font-bold text-black mb-4 font-poppins">
        Ready to Build Your Future in Tech?
      </h2>
      <p className="max-w-3xl text-lg md:text-xl text-black font-light mb-8 font-poppins">
        Join Nebula Code Academy and become part of a global community of future tech leaders.
      </p>
      <a
        href="/apply"
        className="inline-flex items-center gap-2 bg-black text-white text-lg font-medium py-3 px-6 rounded-full hover:bg-gray-800 transition-all font-poppins"
      >
        Apply Now <ArrowRight className="w-5 h-5" />
      </a>
    </section>
  );
};

export default FinalCTASection;
