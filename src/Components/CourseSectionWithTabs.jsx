import React, { useEffect, useState } from 'react';
import { Home, ArrowRight } from 'lucide-react';
import levelContent from '../data/levelContent';

const courseTabs = ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6'];
const quickLinks = ['Overview', 'Entry Requirements', 'Curriculum', 'Free Classes', 'Fees', 'Career Prospects', 'Apply', 'FAQs'];

const CourseSectionWithTabs = () => {
  const [activeTab, setActiveTab] = useState('Level 1');
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeLink, setActiveLink] = useState('Overview');

  const content = levelContent[activeTab];

  const handleScrollTo = (id) => {
    const target = document.getElementById(id.toLowerCase());
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      for (let link of quickLinks) {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 120 && top >= -200) {
            setActiveLink(link);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full bg-[#F8F8F8] px-6 md:px-16 py-10 flex flex-col gap-6">
      <div>
        <h2 className="text-[24px] sm:text-[45px] font-bold text-black font-poppins">
          Explore Pre-Academy Programs
        </h2>
      </div>

      <div className="flex flex-wrap gap-4 border-b border-gray-300 pb-4">
        {courseTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md font-medium flex items-center gap-2 ${
              activeTab === tab ? 'bg-[#FFC925] text-[#4A2B29]' : 'text-gray-800 hover:text-[#4A2B29]'
            }`}
          >
            {activeTab === tab && <Home size={16} />} {tab}
          </button>
        ))}
      </div>

      <div className="lg:hidden flex justify-end mb-4">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-gray-800 border border-gray-400 px-4 py-2 rounded-md"
        >
          {showSidebar ? 'Close Quick Links' : 'Open Quick Links'}
        </button>
      </div>

      <div className="relative h-[90vh] overflow-hidden bg-[#F8F8F8] rounded-md shadow">
        <div className="flex h-full">
          <div className="flex-1 overflow-y-auto pr-4 space-y-10 px-6 py-8">
            {content?.map(({ id, title, component }) => (
              
  <section key={id} id={id.toLowerCase()} className="scroll-mt-28">
    <h1 className="text-[56px] font-bold mb-2">{title}</h1>
    {component}
  </section>
))}

          </div>

          <aside className="hidden lg:flex w-[250px] sticky top-8 self-start h-fit bg-white border-l border-gray-200 p-4 mr-4 gap-[32px]">
            <div className="w-full space-y-4">
              <h3 className="text-[#333] font-semibold text-lg">In This Page</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollTo(link);
                      }}
                      className={`flex items-center gap-2 text-sm ${
                        activeLink === link
                          ? 'text-[#4A2B29] font-semibold'
                          : 'text-[#333] hover:text-[#4A2B29]'
                      }`}
                    >
                      {activeLink === link && <ArrowRight size={16} />} {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CourseSectionWithTabs;
