import React, { useRef } from 'react';
import CurriculumCard from './CurriculumCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const curriculumList = [
  {
    title: 'Digital Literacy',
    description: `“Becoming confident users of technology”\n\nIn this foundational session, students gain hands-on experience with everyday computer tasks, helping them build comfort and confidence with digital tools. They learn how to operate a computer, use a mouse and keyboard, manage files, and understand how the internet works safely.\n\nA strong emphasis is placed on cyber-safety, ethical use of technology, and responsible digital behavior.`,
    core: [
      'Mastering basic computer operations',
      'Understanding internet safety, privacy, and screen time balance',
      'Navigating desktop, mobile, and OS (Windows, ChromeOS, etc.)',
      'A quiet workspace for focus',
    ],
    project: 'My digital world poster',
    badge: '“Cyber Explorer”',
  },
  {
    title: 'Coding Fundamentals',
    description: `“Learn to think like a computer - without typing code.”\n\nThis session introduces children to the logic of programming through visual, drag-and-drop languages. Uses tools like scratch and blockly, students create fun projects like interactive stories and animations while unknowingly learning key programming concepts like sequencing, loop, events, and conditions. It's playful yet intellectually rich.`,
    core: [
      'Creating simple programs in Scratch and Blockly',
      'Developing computational thinking through games and puzzles',
      'Building foundational logic skills without syntax barriers',
    ],
    project: 'My first animated story/game',
    badge: '“Logic Builder”',
  },
  {
    title: 'STEM Discovery',
    description: `“Explore how technology and science shape the world around us”\n\nIn this hands-on session, students explore basic robotics using LEGO Education kits and engage in science experiments that demonstrate real world technology principles. They begin to understand how sensors, motors, and simple mechanics work while building logical reasoning and teamwork skills. ....................................................                         .`,
    core: [
      'Intoduction to robotics through LEGO Education kits',
      'Hands-on mini experiments with cause effect logic',
      'Problem solving through challenges and STEM games',
    ],
    project: 'LEGO Robot and Mini Machine Build',
    badge: '“STEM Inventor”',
  },
 
];


const CurriculumSection = () => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="w-full px-6 py-10 bg-[#F8F8F8]">
      <h2 className="text-3xl font-bold text-[#333] mb-6">Curriculum Overview</h2>

      {/* Scrollable Row */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {curriculumList.map((item, index) => (
            <CurriculumCard
              key={index}
              title={item.title}
              description={item.description}
              core={item.core}
              project={item.project}
              badge={item.badge}
            />
          ))}
        </div>

        {/* Chevron Controls */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-[8px] bg-white shadow hover:bg-gray-100"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollRight}
            className="p-2 rounded-[8px] bg-white shadow hover:bg-gray-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
