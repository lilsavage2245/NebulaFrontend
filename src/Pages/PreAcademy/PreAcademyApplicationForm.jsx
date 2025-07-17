// src/Pages/collaborate/FindCourses.jsx
// src/pages/PreAcademyApplication.jsx
import React, { useState } from 'react';
import ApplicantDetailsForm from '../../Components/ApplicationForms/ApplicantDetailsForm';
import LearningEnvironmentForm from '../../Components/ApplicationForms/LearningEnvironmentForm';
import ParentGuardianForm from '../../Components/ApplicationForms/ParentGuardianForm';
import ConsentForm from '../../Components/ApplicationForms/ConsentForm';

const PreAcademyApplicationForm = () => {


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    preferredName: '',
    dob: '',
    gender: '',
    age: '',
    school: '',
    country: '',
    learningMode: '',
    experience: '',
  });

  const handleSectionChange = (section, data) => {
    setFormData((prev) => ({ ...prev, [section]: data }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Final submitted form data:', formData);
    // TODO: Send formData to backend or next step
  };

  return (
    <div className="w-full min-h-screen bg-[#F8F8F8] px-4 sm:px-8 md:px-16 py-12">
      <h1 className="text-[28px] md:text-[36px] font-bold text-black mb-10">
        Pre-Academy Year 1 Application
      </h1>

      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Step 1 */}
        <ApplicantDetailsForm formData={formData} handleChange={handleSectionChange} />

        {/* Step 2 */}
        <ParentGuardianForm formData={formData} handleChange={handleSectionChange} /> 

        {/* Future Step 3 */}
        <LearningEnvironmentForm formData={formData} handleChange={handleSectionChange} /> 

        {/* Future Step 3 */}
        <ConsentForm formData={formData} handleChange={handleSectionChange} /> 

        {/* Submit Button */}
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-3 rounded-full font-semibold text-lg shadow-md"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreAcademyApplicationForm;
