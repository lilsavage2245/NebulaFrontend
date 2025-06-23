import React, { useState } from 'react';

const EducationFaqs = () => {
  const faqs = [
    {
      question: "Is there any cost involved for our school?",
      answer: "..........................",
    },
    {
      question: "Can we customize a partnership to match our curriculum needs?",
      answer: "..............................",
    },
    {
      question: " What resources are provided for teachers?",
      answer: "...........................",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6 flex flex-col md:flex-row gap-10 md:gap-20">
      
      {/* Left: FAQs */}
      <div className="w-full md:w-2/3">
        <h2 className="text-4xl font-bold mb-6 text-black">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl p-4 bg-white shadow-sm"
            >
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-black">{faq.question}</span>
                <span className="text-yellow-400 text-2xl font-bold">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Ask a Question Form */}
      <div className="w-full md:w-1/3 bg-white shadow-md rounded-xl p-6">
        <h3 className="text-2xl font-bold text-black mb-4">Ask a Specific Question</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Question"
            rows="4"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-500 transition"
          >
            Submit Question
          </button>
        </form>
      </div>
    </section>
  );
};

export default EducationFaqs;
