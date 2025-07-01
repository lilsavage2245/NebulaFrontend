// src/components/VideoSection.jsx
import React, { useState } from 'react';
//import logo from '../assets/logo.png.png';
import videoImage1 from '../assets/Video.png';
import videoImage2 from '../assets/apple.png';

const VideoSection = () => {
  const [currentContent, setCurrentContent] = useState({
    title: 'Our Vision at Nebula',
    description: 'Why We Built Nebula: Empowering tech-driven Futures',
    image: videoImage1,
  });

  const handleChange = (option) => {
    if (option === 'first') {
      setCurrentContent({
        title: 'Our Vision at Nebula',
        description: 'Why We Built Nebula: Empowering tech-driven Futures',
        image: videoImage1,
      });
    } else {
      setCurrentContent({
        title: 'Our Global Impact',
         description: 'The Nebula Journey: Real students real growth',
        image: videoImage2,
      });
    }
  };

  return (
    <section className="px-6 py-16 bg-white text-center">
      {/* Top Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-6">
        <div>
          <h2 className="text-[24px] sm:text-[45px] font-bold  text-black font-poppins">Who Are We ?</h2>
        </div>
      </div>


      <h2 className="text-3xl font-bold mb-4">{currentContent.title}</h2>

      <div className="w-full max-w-4xl mx-auto">
        <img
          src={currentContent.image}
          alt="Video Thumbnail"
          className="rounded-lg shadow-md w-full h-[450px] mb-6"
        />
         <h3 className="text-1xl font-normal mb-4">{currentContent.description}</h3>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleChange('first')}
            className="px-6 py-2 bg-yellow-400 text-black rounded-full shadow-md hover:bg-yellow-300 transition"
          >
            See Vision
          </button>
          <button
            onClick={() => handleChange('second')}
            className="px-6 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-400 transition"
          >
            See Impact
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;