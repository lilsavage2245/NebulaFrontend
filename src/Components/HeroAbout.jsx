import React from 'react';
import HeroAboutImg from '../assets/HeroAbout.png';
import { ArrowRight } from 'lucide-react';

const HeroAbout = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row h-[800px] bg-white mt-24">
      {/* Left Content */}
      <div className="w-full lg:w-[709px] bg-[#FFF2F2] p-4 lg:p-8 flex flex-col gap-8">
        {/* Title */}
        <div className="flex flex-col gap-4 max-w-[677px]">
          <h2 className="text-[40px] font-semibold text-black leading-[60px]">
            THE NEBULA ACADEMY
          </h2>
          <div className="w-[280px] border-b-[10px] border-[#FFC925]"></div>
        </div>

        {/* Description */}
        <p className="text-[24px] leading-[36px] text-black max-w-[677px]">
          At Nebula Academy, we are more than just a coding school. We are a community committed to excellence,
          innovation and collaboration. Discover our story, connect with the inspiring team driving our mission,
          and explore what studying at Nebula Academy can do for your future in tech.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 items-center">
          <button className="bg-[#FFC925] text-[#4A2B29] px-6 py-2 rounded-full shadow-md text-sm font-medium">
            Apply now
          </button>
          <button className="flex items-center gap-2 text-[#4A2B29] px-4 py-2 rounded-full border border-[#4A2B29] text-base">
            Watch video <ArrowRight size={18} />
          </button>
        </div>

        {/* Rankings */}
        <div className="mt-6 w-[500px] h-[250px] bg-white/80 shadow-md rounded-[32px] flex justify-center items-center gap-6 px-6">
          {[
            { stat: 'No 1', label: 'Ranking' },
            { stat: '10 +', label: 'Projects' },
            { stat: '100%', label: 'Impact' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-start gap-2">
              <p className="text-[48px] font-semibold text-[#1D15B1]">{item.stat}</p>
              <p className="text-[24px] text-black">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full lg:w-[700px] h-[800px]">
        <img
          src={HeroAboutImg}
          alt="Hero About"
          className="w-full h-full object-cover"
        />

        {/* Quote Box 1 */}
        <div className="absolute left-[50px] bottom-[80px] w-[300px] bg-white/70 p-4 rounded-[32px]">
          <p className="text-[16px] text-black mb-2 leading-[24px]">
            “This is my story after I became part of the Nebula code Academy my life took another form and I had a lot of improvement in my tech journey.”
          </p>
          <p className="text-[14px] text-[#1D15B1]">Oluchi Okoye</p>
        </div>

        {/* Quote Box 2 */}
        <div className="absolute right-[50px] bottom-[280px] w-[300px] bg-white/70 p-4 rounded-[32px]">
          <p className="text-[16px] text-black mb-2 leading-[24px]">
            “This is my story after I became part of the Nebula code Academy my life took another form and I had a lot of improvement in my tech journey.”
          </p>
          <p className="text-[14px] text-[#1D15B1]">Kaycee Okoye</p>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
