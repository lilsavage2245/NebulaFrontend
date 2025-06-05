// PartnershipStories.jsx
import React from 'react';
import PartnershipStoriesCards from './PartnershipStoriesCards';
import PartnershipStoriesimg from '../../assets/PartnershipStories.png';

const stories = [
  {
    title: 'Google for Education',
    summary:
      'Partnered with Nebula Academy to deliver cloud-based learning environments for all coding bootcamps.',
    image: PartnershipStoriesimg,
  },
  {
    title: 'Meta Developer Circles',
    summary:
      'Hosted community events and hackathons with Nebula to promote social impact through tech.',
    image: PartnershipStoriesimg,
  },
  {
    title: 'UNESCO Youth Innovation',
    summary:
      'Collaborated on youth empowerment projects using open-source tools and peer learning.',
    image: PartnershipStoriesimg,
  },
];

const PartnershipStories = () => {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-20 py-16 bg-gray-50">
      <h2 className="text-4xl font-semibold font-poppins text-center mb-10 text-black">
        Partnership Highlights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {stories.map((story, index) => (
          <PartnershipStoriesCards key={index} {...story} />
        ))}
      </div>
    </section>
  );
};

export default PartnershipStories;
