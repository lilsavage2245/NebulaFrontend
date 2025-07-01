import React from 'react';

const requirements = [
  {
    title: 'Age Requirements:',
    description: 'Applicants must be age 10 and above',
  },
  {
    title: 'Language Requirements:',
    description:
      'Applicants must be able to understand and communicate with basic English',
  },
  {
    title: 'Basic Literacy:',
    description:
      'Have basic reading, writing, and comprehension skills.',
  },
  {
    title: 'Interests:',
    description:
      'Applicants are curious about how technology, games, or stories work.',
  },
  {
    title: 'Computer Literacy:',
    description:
      'Applicants must be able to use a device (e.g. Laptop) with little to moderate assistance',
  },
];

const EntryCard = () => {
  return (
    <section className="flex flex-col items-center py-4 gap-6 w-full max-w-4xl border-y border-black/30 mx-auto">
      {/* Section Title */}
      <h2 className="text-[24px] font-bold text-center text-black">
        Who Can Enroll?
      </h2>

      {/* Requirements List */}
      <div className="flex flex-col gap-4 px-6 w-full">
        {requirements.map((req, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8"
          >
            <p className="text-[20px] font-semibold text-black w-full md:w-[300px]">
              {req.title}
            </p>
            <p className="text-[16px] text-black leading-6 w-full md:w-[436px]">
              {req.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EntryCard;
