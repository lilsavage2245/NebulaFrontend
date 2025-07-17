// src/components/InterestForm1.jsx
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import StudentForm from '../../Components/StudentForm';
import ParentForm from '../../Components/ParentForm';
import OtherForm from '../../Components/OtherForm';

const InterestForm1 = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [step, setStep] = useState(1);
  const [isNotRobot, setIsNotRobot] = useState(false);
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};

    if (!selectedRole) {
      newErrors.role = 'Please select your role.';
    }
    if (!isNotRobot) {
      newErrors.robot = 'You must confirm you are not a robot.';
    }

    if (Object.keys(newErrors).length === 0) {
      setStep(2);
    } else {
      setErrors(newErrors);
    }
  };

  if (step === 2) {
    if (selectedRole === 'student') return <StudentForm />;
    if (selectedRole === 'parent') return <ParentForm />;
    if (selectedRole === 'other') return <OtherForm />;
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-6 bg-white rounded-lg shadow-md mb-8">
      <h1 className="text-3xl font-semibold text-black mb-4">Register your interest in Tech with Nebula Code Academy</h1>
      <p className="text-base text-black mb-8">If you’re interested in coding, programming, and technology, register with Nebula Code Academy. Please complete the details below.</p>

      <p className="text-black font-medium mb-2">I am a/the...</p>
      <div className="flex gap-10 mb-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="role"
            value="student"
            checked={selectedRole === 'student'}
            onChange={() => setSelectedRole('student')}
            className="accent-[#3E50F8]"
          />
          <span className="text-black">Student</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="role"
            value="parent"
            checked={selectedRole === 'parent'}
            onChange={() => setSelectedRole('parent')}
            className="accent-[#3E50F8]"
          />
          <span className="text-black">Parent/Guardian</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="role"
            value="other"
            checked={selectedRole === 'other'}
            onChange={() => setSelectedRole('other')}
            className="accent-[#3E50F8]"
          />
          <span className="text-black">Other/Tech Enthusiast</span>
        </label>
      </div>
      {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}

      <label className="flex items-center gap-2 mt-4 mb-1 cursor-pointer">
        <input
          type="checkbox"
          checked={isNotRobot}
          onChange={(e) => setIsNotRobot(e.target.checked)}
          className="accent-[#3E50F8]"
        />
        <span className="text-black">I am not a robot</span>
      </label>
      {errors.robot && <p className="text-red-500 text-sm mb-2">{errors.robot}</p>}

      <p className="text-sm text-gray-500 mb-6">Page 1/2</p>

      <button
        onClick={handleNext}
        className="bg-yellow-300/70 rounded-full px-6 py-2 flex items-center gap-2 text-black hover:bg-yellow-300"
      >
        Next <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default InterestForm1;
