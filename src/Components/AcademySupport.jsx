import React from 'react';
import CardImg from '../assets/Study1.png'; // Replace with your actual image path

// Support card content (you can later replace image paths)
const supportData = [
  { title: 'Dedicated men', image: CardImg },
  { title: 'Career coaching', image: CardImg },
  { title: 'Soft skill training', image: CardImg },
  { title: 'Community forum', image: CardImg },
  { title: 'Certificate of completion', image: CardImg },
  { title: 'Internship and free (one project prep)', image: CardImg },
];

const AcademySupport = () => {
  return (
    <section className="w-full px-4 sm:px-10 lg:px-20 py-20 bg-white border-b-[5px] border-black-200">
      {/* Top section with vector and heading */}
      <div className="flex flex-col items-start gap-3">
        <div className="w-[85px] h-0 border-t-[12px] border-yellow-400" />
        <h2 className="text-[32px] sm:text-[40px] font-extrabold text-black font-poppins">
          Support Along the Way
        </h2>
      </div>

      {/* Card Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10">
        {supportData.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[300px] mx-auto flex flex-col items-center shadow-lg hover:scale-[1.03] transition-transform duration-300"
          >
            <div
              className="w-full h-[200px] bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            />
            <div className="w-full bg-white px-4 py-3 rounded-b-lg">
              <h3 className="text-[20px] font-semibold text-center text-black">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademySupport;
