// components/AboutNavbar.jsx
import { ChevronDown } from 'lucide-react';

const AboutNavbar = () => {
  return (
    <section className="w-full flex justify-center mb-24">
  <div className="w-[1275px] bg-[#FFC925]/50 rounded-[24px] py-6 px-4 flex flex-col lg:flex-row justify-center gap-8 lg:gap-[28px] items-start">
      {/* Section 1 */}
      <div className="flex flex-col items-center px-2 gap-4 w-full max-w-[403px]">
        <h3 className="text-[24px] leading-[36px] font-poppins font-medium text-center text-black">
          Meet Our Team
        </h3>
        <ChevronDown className="w-6 h-6 text-black" />
        <p className="text-[20px] leading-[30px] font-poppins text-center text-black">
          Members <br />
          Communities <br />
          Showcases
        </p>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col items-center gap-4 w-full max-w-[408px]">
        <h3 className="text-[24px] leading-[36px] font-poppins font-medium text-center text-black">
          Studying at Nebula
        </h3>
        <ChevronDown className="w-6 h-6 text-black" />
        <p className="text-[20px] leading-[30px] font-poppins text-center text-black">
          Guide to Nebula <br />
          Course <br />
          Fees
        </p>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col items-center gap-4 w-full max-w-[408px]">
        <h3 className="text-[24px] leading-[36px] font-poppins font-medium text-center text-black">
          About the Academy
        </h3>
        <ChevronDown className="w-6 h-6 text-black" />
        <p className="text-[20px] leading-[30px] font-poppins text-center text-black">
          News <br />
          Our mission & vision <br />
          Our story <br />
          Ranking <br />
          Events
        </p>
        </div>
      </div>
    </section>
  );
};

export default AboutNavbar;
