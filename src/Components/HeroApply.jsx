// HeroApply.jsx
import React from "react";
import heroImage from "../assets/HeroApply.png"; // replace with actual path

const steps = [
  { title: "STEP 1", desc: "Decide on your program" },
  { title: "STEP 2", desc: "Check program eligibility" },
  { title: "STEP 3", desc: "Check available scholarships" },
];

const HeroApply = () => {
  return ( 
    <section className="w-full max-w-[1400px] mx-auto mt-12 mb-48 px-4">
      {/* Background Section */}
      <div
        className="w-full h-[700px] bg-cover bg-center rounded-[64px] relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Text Block */}
        <div className="absolute left-6 sm:left-10 top-1/2 transform -translate-y-1/2 w-[90%] max-w-[580px] flex flex-col gap-8 px-4 sm:px-6">
          <h1 className="text-black font-inter font-bold text-[32px] sm:text-[40px] leading-[48px]">
            APPLY TO NEBULA ACADEMY
          </h1>
          <div className="w-[200px] sm:w-[300px] md:w-[352px] border-t-[10px] border-[#FFC925]" />
          <p className="text-[18px] sm:text-[22px] md:text-[24px] font-inter leading-[29px] text-black">
            Ready to launch your tech journey? Apply now to become part of our
            vibrant community and start learning from industry-leading
            instructors. Your future in tech begins here!
          </p>
        </div>

        {/* Step Cards */}
        <div className="absolute bottom-[-125px] left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row gap-6 md:gap-8 z-10 w-full justify-center px-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-85 backdrop-blur-sm shadow-lg rounded-[56px] w-full max-w-[400px] h-[250px] flex items-center justify-center px-4 text-center"
            >
              <div>
                <h3 className="text-[28px] sm:text-[32px] md:text-[36px] font-inter font-semibold leading-[35px] text-black">
                  {step.title}
                </h3>
                <p className="text-[20px] sm:text-[24px] mt-2">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroApply;
