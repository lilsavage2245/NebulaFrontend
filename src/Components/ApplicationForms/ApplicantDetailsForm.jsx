// src/components/forms/ApplicantDetailsForm.jsx
import React from 'react';

const ApplicantDetailsForm = ({ formData = {}, handleChange = () => {} }) => {
  return (
    <div className="bg-[#EFFAF9] rounded-[40px] p-8 mb-12">
      <h2 className="text-[24px] md:text-[32px] font-semibold mb-6">Applicant Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Name */}
        <div>
          <label className="text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName || ''}
            onChange={handleChange}
            placeholder="Enter first name"
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName || ''}
            onChange={handleChange}
            placeholder="Enter last name"
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          />
        </div>

        {/* Preferred Name */}
        <div>
          <label className="text-sm font-medium text-gray-700">Preferred Name (Optional)</label>
          <input
            type="text"
            name="preferredName"
            value={formData.preferredName || ''}
            onChange={handleChange}
            placeholder="Optional"
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="text-sm font-medium text-gray-700">Date of Birth (Optional)</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          />

        </div>

        {/* Gender */}
        <div>
          <label className="text-sm font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          >
            <option value="">Select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="non_binary">Non-Binary</option>
            <option value="prefer_not">Prefer not to say</option>
          </select>

        </div>

        {/* Current Age */}
        <div>
          <label className="text-sm font-medium text-gray-700">Current Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          />

        </div>

        {/* Current School */}
        <div>
          <label className="text-sm font-medium text-gray-700">Current School (Optional)</label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          />

        </div>

        {/* Country of Residence */}
        <div>
          <label className="text-sm font-medium text-gray-700">Country of Residence</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          />

        </div>

        {/* Preferred Learning Mode */}
        <div>
         <label className="text-sm font-medium text-gray-700">Preferred Learning Mode</label>
         <select
            name="learningMode"
            value={formData.learningMode}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          >
            <option value="">Select</option>
            <option value="none">None</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
 
        </div>

        {/* Experience with Tech */}
        <div>
          <label className="text-sm font-medium text-gray-700">Any previous experience with tech or coding?</label>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
             className="w-full border rounded-2xl px-4 py-2 mt-1"
          >
            <option value="">Select</option>
            <option value="none">None</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
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

export default ApplicantDetailsForm;
