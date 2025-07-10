import React from 'react';
import { Check } from 'lucide-react'; // Assuming you're using Lucide icons

const features = [
  "We ensured that the one-year syllabus is covered before proceeding to the next.",
  "You can be eligible for discounts and scholarships.",
  "You can pay in instalments – up to three times.",
  "We ensured that the one-year syllabus is covered before proceeding to the next.", // You can replace with another
];

const AcademyFees = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-20 bg-white border-b-[5px] border-black-200">
      {/* Top Vector and Title */}
      <div className="flex flex-col items-start gap-4">
        <div className="w-[85.5px] h-0 border-t-[12px] border-yellow-400" />
        <h2 className="text-[32px] sm:text-4xl font-extrabold text-black font-poppins">
          Fees and Funding
        </h2>
      </div>

      {/* Fee Display Box */}
      <div className="mt-10 bg-teal-600 text-white rounded-xl p-8 w-full max-w-4xl mx-auto shadow-lg">
        <p className="text-xl sm:text-2xl text-center mb-4 font-medium">
          Our fees for an Academic Section is:
        </p>
        <div className="text-center text-[48px] sm:text-[60px] md:text-[64px] font-extrabold leading-tight">
          £10,000
        </div>
      </div>

      {/* Features List */}
      <div className="mt-6 w-full max-w-4xl mx-auto">
        <p className="text-lg sm:text-xl text-black text-center mb-6">
          Here are some amazing features:
        </p>
        <div className="border-b border-black w-full mb-6" />

        <div className="space-y-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b pb-4 border-black"
            >
              <div className="border border-black rounded-md p-2 flex items-center justify-center w-[40px] h-[40px]">
                <Check className="text-black" />
              </div>
              <p className="text-base sm:text-[15px] font-medium text-black max-w-3xl">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademyFees;
