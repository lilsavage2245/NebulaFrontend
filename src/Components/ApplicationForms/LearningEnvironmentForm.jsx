// src/components/forms/ApplicantDetailsForm.jsx
import React from 'react';

const LearningEnvironmentForm = ({ formData = {}, handleChange = () => {} }) => {
  return (
    <div className="bg-[#EFFAF9] rounded-[40px] p-8 mb-12">
      <h2 className="text-[24px] md:text-[32px] font-semibold mb-6">Learning Environment & Support Needs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        

        {/* Gender */}
        <div>
          <label className="text-sm font-medium text-gray-700">Does the Applicant Have a Regular Device?</label>
          <select
            name="device"
            value={formData.device}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          >
            <option value="">Select</option>
            <option value="female">Yes</option>
            <option value="male">No</option>            
          </select>

        </div>

        

        

        {/* Preferred Learning Mode */}
        <div>
         <label className="text-sm font-medium text-gray-700">What Type of Device Will They be Using</label>
         <select
            name="devicetype"
            value={formData.devicetype}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          >
            <option value="">Select</option>
            <option value="none">Tablet</option>
            <option value="beginner">Laptop</option>
            <option value="intermediate">Desktop</option>
            <option value="advanced">Chromebook</option>
          </select>
 
        </div>

        {/* Experience with Tech */}
        <div>
          <label className="text-sm font-medium text-gray-700">Do They Have Reliable Internet Access</label>
          <select
            name="internet"
            value={formData.internet}
            onChange={handleChange}
             className="w-full border rounded-2xl px-4 py-2 mt-1"
          >
            <option value="">Select</option>
            <option value="none">Yes</option>
            <option value="beginner">Sometimes</option>
            <option value="intermediate">No</option>            
          </select>

        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Can They Study Independently for 20-30 minutes?</label>
          <select
            name="internet"
            value={formData.internet}
            onChange={handleChange}
             className="w-full border rounded-2xl px-4 py-2 mt-1"
          >
            <option value="">Select</option>
            <option value="none">Yes</option>
            <option value="beginner">With Slight Help</option>
            <option value="intermediate">No</option>            
          </select>

        </div>


        <div>
          <label className="text-sm font-medium text-gray-700">Any Known Learning Difficulties or Support Needs?</label>
          <input
            type="text"
            name="difficulties"
            value={formData.difficulties}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          />

        </div>


        <div>
          <label className="text-sm font-medium text-gray-700">Would You Like To Request Learning Accomodations?</label>
          <select
            name="accomodation"
            value={formData.accomodation}
            onChange={handleChange}
             className="w-full border rounded-2xl px-4 py-2 mt-1"
          >
            <option value="">Select</option>
            <option value="none">Yes</option>
            <option value="beginner">With Slight Help</option>
            <option value="intermediate">No</option>            
          </select>

        </div>





        {/* Add more fields here like DOB, Gender, Country, etc. */}
      </div>

      {/* Save & Continue Later Button */}
      <div className="w-full flex justify-end mt-8">
        <button
          type="button"
          className="bg-[#008080] text-white px-6 py-2 rounded-full font-medium hover:bg-[#ffb800] transition"
          onClick={() => {
            // Future: Save to localStorage or trigger backend draft logic
            alert('Progress saved. You can return later to continue.');
          }}
        >
          Save & Continue Later
        </button>
      </div>
    </div>
  );
};

export default LearningEnvironmentForm;
