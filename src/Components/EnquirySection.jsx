import React from "react";
import { FiPhone, FiMail, FiMessageCircle } from "react-icons/fi";

const EnquirySection = () => {
  return (
    <section className="flex flex-col items-center gap-[59px] w-full px-4 py-20 bg-white">
      {/* Heading */}
      <h2 className="text-[48px] font-bold text-black text-center">
        Need Urgent Enquiries?
      </h2>

      {/* 3 Contact Options */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-[1272px] justify-center">
        {/* Phone */}
        <div className="flex flex-col items-center gap-[56px] w-full max-w-[408px] h-[380px] shadow-md bg-white p-4 rounded-md">
          <div className="flex flex-col items-center gap-4">
            <div className="w-[139px] h-[139px] border-[6px] border-[#0076CE] flex items-center justify-center rounded-full">
              <FiPhone className="text-[48px] text-[#0076CE]" />
            </div>
            <h3 className="text-[36px] font-medium text-black">Phone</h3>
          </div>
          <p className="text-[24px] text-center font-medium text-black leading-[29px]">
            Mon - Fri from 8am - 5pm <br />
            +44 123 456 7890
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center gap-[56px] w-full max-w-[408px] h-[380px] shadow-md bg-white p-4 rounded-md">
          <div className="flex flex-col items-center gap-4">
            <div className="w-[139px] h-[101px] border-[3px] border-[#EA4335] flex items-center justify-center rounded">
              <FiMail className="text-[42px] text-[#EA4335]" />
            </div>
            <h3 className="text-[36px] font-medium text-black">E-mail</h3>
          </div>
          <p className="text-[24px] text-center font-medium text-black leading-[29px]">
            Our friendly team is here to help: <br />
            info@nebulacodeacademy.com
          </p>
        </div>

        {/* Live Chat */}
        <div className="flex flex-col items-center gap-[48px] w-full max-w-[408px] h-[380px] shadow-md bg-white p-4 rounded-md">
          <div className="flex flex-col items-center gap-4">
            <div className="w-[137px] h-[137px] flex items-center justify-center">
              <FiMessageCircle className="text-[48px] text-[#000000]" />
            </div>
            <h3 className="text-[36px] font-medium text-black">Live chat</h3>
          </div>
          <p className="text-[24px] text-center font-medium text-black leading-[29px]">
            Start a friendly live chat
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
