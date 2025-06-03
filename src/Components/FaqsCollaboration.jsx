// FaqsCollaboration.jsx
import React, { useState } from 'react';

const faqs = [
  {
    question: 'How can my company partner with Nebula Academy?',
    answer: 'You can partner with us by providing internships, sponsoring events, or offering mentorship. Reach out via our contact form.'
  },
  {
    question: 'Do you collaborate with international institutions?',
    answer: 'Yes, we welcome partnerships with institutions worldwide to expand opportunities and exchange knowledge.'
  },
  {
    question: 'Are there any prerequisites to join?',
    answer: 'Some advanced courses may require prior knowledge or experience. Pre-Academy and Beginner courses do not.'
  },
  {
    question: 'Who do I contact for partnership inquiries',
    answer: '..........'
  },
  {
    question: 'Is collaboration limited to the tech industry?',
    answer: '..........'
  },
];

const FaqsCollaboration = () => {
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
export default FaqsCollaboration;
