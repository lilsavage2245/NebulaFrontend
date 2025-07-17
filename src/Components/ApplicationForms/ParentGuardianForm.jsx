// src/components/forms/ApplicantDetailsForm.jsx
import React from 'react';

const ParentGuardianForm = ({ formData = {}, handleChange = () => {} }) => {
  return (
    <div className="bg-[#EFFAF9] rounded-[40px] p-8 mb-12">
      <h2 className="text-[24px] md:text-[32px] font-semibold mb-6">Parent/Guardian Information</h2>

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
          <label className="text-sm font-medium text-gray-700">Relationship to Applicant (Optional)</label>
           <select
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          >
            <option value="">Select</option>
            <option value="parent">Parent</option>
            <option value="guardian">Guardian</option>
            <option value="sibling">Sibling</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          />

        </div>

        {/* Gender */}
        <div>
          <label className="text-sm font-medium text-gray-700">Preferred Contact Method</label>
          <select
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          >
            <option value="">Select</option>
            <option value="phone">Phone</option>
            <option value="whatsapp">Whatsapp</option>
            <option value="email">Email</option>
            <option value="sms">SMS</option>
          </select>

        </div>

        {/* Current Age */}
        <div>
          <label className="text-sm font-medium text-gray-700">Secondary Contact (optional)</label>
          <input
            type="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          />

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

export default ParentGuardianForm;
