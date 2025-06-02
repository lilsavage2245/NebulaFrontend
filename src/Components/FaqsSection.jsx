import React, { useState } from 'react';

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer: ".......",
  },
  {
    question: "Are there prerequisites?",
    answer: ".........",
  },
  {
    question: "Is financial aid available?",
    answer: ".........",
  },
  {
    question: "Do I get a certificate after completion?",
    answer: "Absolutely! All graduates receive a digital certificate and portfolio to showcase their learning.",
  },
  {
    question: "What if I miss a class?",
    answer: ".........",
  },
];

const FaqsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center bg-[#F9F9F9] hover:bg-[#f1f1f1]"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <span>{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-700 bg-white">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqsSection;
