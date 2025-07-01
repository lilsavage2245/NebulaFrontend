import React from 'react';

import FreeClassSection from './FreeClass/FreeClassSection';


const FreeClassesComponent = () => {
  return (
    <section className="flex flex-col items-start px-2 md:px-4 py-8 gap-10 border-y-[5px] border-[#77777733] w-full max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-[40px] font-bold text-black">Free Introductory Classes</h2>

       {/* Learning Outcome */}
      <div className="flex flex-col bg-[#77777733] px-6 py-4 w-full gap-[24px]">
       <h2 className= "text-black font-bold text-lg leading-9">
            Description
        </h2>
        <p>We offer a selection of Free Introductory Classes designed to help learners and parents explore our teaching style, platform and learning outcome before commiting to a full program. These classes are open to anyone aged 10+ and require a quick sign up to access the content. Each free class is aligned with our curriculum levels and includes:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Engaging videos and live sessions</li>
          <li>Although no projects, but worksheet are available</li>
          <li>Access to personal dashboards to track progress.</li>
          <li>A supportive community where learners can comment, ask questions and share ideas.</li>
        </ul>
         <p>Try a class before applying and see what makes Nebula experience special</p>
      </div>

      {/* Learning Outcome */}
      <div className="bg-[#77777733] px-6 py-4 w-full text-black font-semibold text-lg leading-9">
        <FreeClassSection />
        <p>Further information about the free classes can be found here, ..........</p>
      </div>

      
     
    </section>
  );
};

export default FreeClassesComponent;
