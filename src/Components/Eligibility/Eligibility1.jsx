// src/Components/EligibilityComponent.jsx
import React, { useState } from 'react';
import Quest1 from '../../assets/Hero.png.png'; // make sure the path is correct
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';





const questions = [
  {
    category: 'Age Information',
    prompt: 'How old is the student?',
    options: [
      { label: 'Students Under 10', value: 'under_10', message: 'Sorry, this program is only for students aged 10 and above.', proceed: false },
      { label: 'Students between 10-11', value: '10_11', message: '', proceed: true },
      { label: 'Students between 12-13', value: '12_13', message: '', proceed: true },
      { label: 'Students over 13', value: 'over_13', message: '', proceed: true },
    ],
  },
  {
    category: 'Learning Style',
    prompt: 'Which best describes the student?',
    options: [
      { label: 'Curious and creative.', value: 'visual', message: '', proceed: true },
      { label: 'Enjoys games and puzzles.  ', value: 'auditory', message: '', proceed: true },
      { label: 'Likes to build or design.  ', value: 'reading', message: '', proceed: true },
      { label: 'New to tech but excited to learn. ', value: 'kinesthetic', message: '', proceed: true },
    ],
  },
  {
    category: 'Language Understanding ',
    prompt: 'Can the student read and understand basic English instructions?',
    options: [
      { label: 'Yes', value: 'yes', message: '', proceed: true },
      { label: 'No', value: 'no', message: 'Sorry, this program requires basic English understanding.', proceed: false },
      { label: 'Not sure', value: 'no', message: 'Sorry, this program requires basic English understanding.', proceed: false },
    ],
  },
  {
    category: 'Device Access ',
    prompt: 'Does the student has access to a laptop, tablet or desktop computer with internet?',
    options: [
      { label: 'Yes', value: 'yes', message: '', proceed: true },
      { label: 'Sometimes', value: 'no', message: 'Sorry, this program requires access to a device with internet.', proceed: false },
      { label: 'Not ', value: 'no', message: 'Sorry, this program requires access to a device with internet.', proceed: false },
    ],
  },
  {
    category: 'Focus Ability ',
    prompt: 'Can the student stay focused for 20-30 minutes at a time with light support ?',
    options: [
      { label: 'Yes', value: 'yes', message: '', proceed: true },
      { label: 'Not sure', value: 'no', message: 'Sorry, this program requires the student to stay focused for 20-30 minutes at a time.', proceed: false },
      { label: 'No ', value: 'no', message: 'Sorry, this program requires the student to stay focused for 20-30 minutes at a time.', proceed: false },
    ],
  },
  {
    category: 'Parent/Guardian consent  ',
    prompt: 'Do you (or your guardian) consent to participation and data privacy under the academy\'s terms?',
    options: [
      { label: 'Yes', value: 'yes', message: '', proceed: true },
      { label: 'No ', value: 'no', message: 'Sorry, this program requires consent.', proceed: false },
    ],
  },//// Add additional categories following the same structure
];

const EligibilityComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [modal, setModal] = useState({ open: false, message: '' });
  const [successModal, setSuccessModal] = useState(false);
    const navigate = useNavigate();


  const current = questions[currentStep];

  const handleSelect = (value, option) => {
    setAnswers(prev => ({ ...prev, [current.category]: value }));
    if (option.message) {
      setModal({ open: true, message: option.message });
    } else {
      setModal({ open: false, message: '' });
    }
  };

  const handleNext = () => {
  if (currentStep < questions.length - 1) {
    setCurrentStep(prev => prev + 1);
  } else {
    setSuccessModal(true); // Show final success modal
  }
};


  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="w-full min-h-screen pt-20 flex flex-col items-center bg-white">
      {/* Header */}
      <div className="w-full py-6 bg-[#008080] flex justify-center items-center text-white text-[28px] md:text-[40px] font-semibold font-poppins">
        Level 1 Eligibility & Readiness Check
      </div>

      {/* Content Frame */}
      <div className="w-[90%] max-w-[1483px] mt-6 bg-white rounded-xl p-6 flex flex-col md:flex-col gap-6 shadow-md">

        {/* Step Categories */}
        <div className="flex gap-20 justify-between flex-row w-full mb-4">
          {questions.map((q, index) => (
            <div key={q.category} className="flex flex-col items-center">
              <span className={`text-sm font-medium ${currentStep === index ? 'text-black' : 'text-gray-400'}`}>{q.category}</span>
              <div className={`h-[5px] w-[80%] mt-1 rounded-full ${currentStep === index ? 'bg-[#008080]' : 'bg-gray-200'}`} />
            </div>
          ))}
        </div>

        {/* Main Section */}
        <div className="flex flex-row gap-8">
          {/* Question Card */}
          <div className="bg-[#EFFAF9] p-6 rounded-lg flex flex-col w-[713px] gap-4">
            <h3 className="text-[26px] font-semibold text-black">{current.category}</h3>
            <p className="text-md">{current.prompt}</p>

            <div className="flex flex-col gap-3 mt-2">
              {current.options.map(option => (
                <label key={option.value} className="flex items-center gap-3 bg-white px-3 py-2 rounded border border-[#008080] cursor-pointer">
                  <input
                    type="radio"
                    name={current.category}
                    checked={answers[current.category] === option.value}
                    onChange={() => handleSelect(option.value, option)}
                    className="accent-[#008080]"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              {currentStep > 0 ? (
                <button onClick={handleBack} className="px-4 py-2 bg-gray-300 text-black rounded-lg font-medium hover:bg-gray-400">Back</button>
              ) : <div />}

              <button onClick={handleNext} className="px-4 py-2 bg-[#008080] text-white rounded-lg font-medium hover:bg-teal-700">Next</button>
            </div>
          </div>

          {/* Side Image */}
          <div className="hidden md:block w-[550px] flex-shrink-0 mt-[40px]">
            <img src={Quest1} alt="Eligibility visual" className="w-full h-auto rounded-xl" />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={modal.open} onClose={() => setModal({ open: false, message: '' })} className="relative z-50">
  <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />

  <div className="fixed inset-0 flex items-center justify-center p-4">
    <Dialog.Panel className="bg-white p-6 rounded shadow-xl max-w-md w-full">
      <Dialog.Title className="text-lg font-bold mb-4">Notice</Dialog.Title>
      <Dialog.Description className="text-md mb-4">
        {modal.message}
      </Dialog.Description>
      <button
        onClick={() => setModal({ open: false, message: '' })}
        className="bg-[#008080] text-white px-4 py-2 rounded"
      >
        OK
      </button>
    </Dialog.Panel>
  </div>
</Dialog>

<Transition show={successModal} as={Fragment}>
  <Dialog as="div" className="relative z-50" onClose={() => setSuccessModal(false)}>
    {/* Backdrop */}
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-black bg-opacity-30" />
    </Transition.Child>

    {/* Modal Panel */}
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Dialog.Panel className="bg-white p-8 rounded shadow-xl max-w-md w-full text-center">
          <Dialog.Title className="text-xl font-bold text-[#008080] mb-4">
            🎉 Congratulations!
          </Dialog.Title>
          <Dialog.Description className="text-md text-gray-700 mb-6">
            You meet the requirements. Click the button below to proceed to your application.
          </Dialog.Description>
          <button
             onClick={() => navigate('/pre-academy/application-form')}
            className="bg-[#008080] hover:bg-teal-700 text-white px-6 py-2 rounded-full font-semibold"
          >
            Proceed to Application
          </button>
        </Dialog.Panel>
      </Transition.Child>
    </div>
  </Dialog>
</Transition>




    </div>
  );
};

export default EligibilityComponent;
