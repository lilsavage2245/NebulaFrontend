import React from "react";
import BenefitCard from "./BenefitCard";
import benefit1 from "../../assets/Benefit1.png";
import benefit2 from "../../assets/Benefit2.png";
import benefit3 from "../../assets/Benefit3.png";
import benefit4 from "../../assets/Benefit4.png";
import testimonialBg from "../../assets/Video.png";

const BenefitSection = () => {
  return (
    <section className="flex flex-col items-center gap-12 px-4 sm:px-6 md:px-10 py-10 max-w-[1272px] mx-auto">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-6 text-center w-full max-w-[760px]">
        <div className="w-[180px] sm:w-[220px] md:w-[260px] border-t-[6px] sm:border-t-[7px] border-[#FFC925]" />
        <h2 className="font-inter font-bold text-[28px] sm:text-[36px] md:text-4x1 leading-tight text-black">
          Why learn with Nebula Academy
        </h2>
        <p className="font-poppins text-[16px] sm:text-[20px] md:text-[16px] leading-[28px] sm:leading-[32px] text-black">
          Reinforcing your value proposition
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-6 bg-white rounded-[32px] lg:rounded-[56px] p-4 sm:p-6 w-full">
        {/* Left: Testimonial Block */}
        <div className="flex flex-col gap-6 w-full lg:w-[600px]">
          <div
            className="w-full h-[250px] sm:h-[400px] lg:h-[550px] rounded-[32px] lg:rounded-[56px] bg-cover bg-center"
            style={{ backgroundImage: `url(${testimonialBg})` }}
          ></div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-0 h-[40px] sm:h-[60px] lg:h-[77px] border-l-[6px] sm:border-l-[7px] border-[#FFC925]" />
            <p className="text-[18px] sm:text-[24px] lg:text-[18px] leading-snug sm:leading-[36px] lg:leading-[48px] font-poppins text-black">
              Top 10 life changing testimonials from students
            </p>
          </div>
        </div>

        {/* Right: Benefit Cards */}
        <div className="flex flex-col justify-center items-center gap-6 w-full lg:w-[600px] bg-white shadow-md rounded-[32px] lg:rounded-[56px] p-4 sm:p-6">
          <BenefitCard
            title="Expert Instruction"
            description="Learn from industry leaders"
            image={benefit1}
          />
          <BenefitCard
            title="Flexible Learning"
            description="Study at your own pace"
            image={benefit2}
          />
          <BenefitCard
            title="Real Projects"
            description="Build hands-on skills"
            image={benefit3}
          />
          <BenefitCard
            title="Career Support"
            description="Get job-ready support"
            image={benefit4}
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;

