// FaqsApply.jsx
import React, { useState } from 'react';

const faqs = [
  {
    question: 'How long does the application process take?',
    answer: '..........'
  },
  {
    question: 'Is financial assistance or scholarship available?',
    answer: '..........'
  },
  {
    question: 'Are there any prerequisites to join?',
    answer: 'Some advanced courses may require prior knowledge or experience. Pre-Academy and Beginner courses do not.'
  },
  {
    question: 'How do I know my course category?',
    answer: '..........'
  },
  {
    question: 'Is Nebula Academy suitable for kids?',
    answer: 'Yes! Our Pre-Academy program is designed for students aged 10 and above.'
  },
  {
    question: 'Can I switch between course levels later?',
    answer: 'Yes, students can switch levels upon evaluation and recommendation by instructors.'
  }
];

const FaqsApply = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1296px] mx-auto px-4 py-10">
      <h2 className="text-[36px] font-semibold text-center mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 font-medium text-lg"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqsApply;
