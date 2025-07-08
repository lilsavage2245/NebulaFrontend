// src/components/AcademyFeature.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import featureImg from '../assets/Course4.png'; // Replace with your actual image path

const features = [
  {
    image: featureImg,
    text: 'Structured year-year program',
  },
  {
    image: featureImg,
    text: 'Specialized tech mentoring',
  },
  {
    image: featureImg,
    text: 'Global certification path',
  },
  {
    image: featureImg,
    text: 'Global certification path',
  },
];

const AcademyFeature = () => {
  return (
    <section className="w-full px-4 md:px-20 py-16 relative border-b-[5px] border-black-200">
      {/* Header */}
      <div className="mb-10">
        <div className="w-[85px] border-t-[12px] border-[#FFC925] mb-4"></div>
        <h2 className="text-3xl md:text-4xl font-extrabold font-poppins text-black">
          Our Academic Features:
        </h2>
      </div>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation
        modules={[Navigation]}
        className="relative"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-[300px] h-[306px] rounded-[25px] overflow-hidden shadow-xl">
              <img
                src={feature.image}
                alt={feature.text}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1F61]/20 to-[#0D1F61]/90"></div>
              <p className="absolute bottom-6 w-full text-white text-center text-lg font-poppins font-medium px-4">
                {feature.text}
              </p>
            </div>
            {index < features.length - 1 && (
              <div className="hidden lg:block absolute right-[-20px] top-0 h-full w-[2px] bg-[#A4A6A6]" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Icon (Optional Chevron if you want it) */}
      {/* <div className="absolute right-0 top-[50%] transform -translate-y-1/2 bg-[#D9D9D9] p-2 rounded-full cursor-pointer z-10">*/}
       {/*<ChevronRight size={28} className="text-black" />*/}
      {/* </div>*/}
    </section>
  );
};

export default AcademyFeature;
