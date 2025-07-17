// src/components/forms/ApplicantDetailsForm.jsx
import React from 'react';

const ConsentForm = ({ formData = {}, handleChange = () => {} }) => {
  return (
    <div className="bg-[#EFFAF9] rounded-[40px] p-8 mb-12">
      <h2 className="text-[24px] md:text-[32px] font-semibold mb-6">Consent, Motivation & Submission</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Name */}
        <div>
          <label className="text-sm font-medium text-gray-700">Why are You Enrolling Your Child in This Program</label>
          <input
            type="text"
            name="whyenroll"
            value={formData.whyenroll}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us why you enrolled your child"
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          />
        </div>

        

        {/* Gender */}
        <div>
          <label className="text-sm font-medium text-gray-700">How Did You Hear About Us?</label>
          <select
            name="referral"
            value={formData.referral}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          >
            <option value="">Select</option>
            <option value="female">Instagram</option>
            <option value="male">Google</option>
            <option value="non_binary">School</option>
            <option value="prefer_not">Friend</option>
            <option value="prefer_not">Event</option>
            <option value="prefer_not">Other</option>
          </select>

        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Upload any Relevant Documents (optional)</label>
          <input
            type="document"
            name="whyenroll"
            value={formData.document}
            onChange={handleChange}
            placeholder="upload file"
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">I consent to The Terms and Privacy Policy</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          />

        </div>


        <div>
          <label className="text-sm font-medium text-gray-700">Parent/Guardian e-Signature (Full name)</label>
          <input
            type="text"
            name="signature"
            value={formData.signature}
            onChange={handleChange}
            rows="5"
            placeholder="Sign here"
            className="w-full border rounded-2xl px-4 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Date of Signature</label>
          <input
            type="date"
            name="dos"
            value={formData.dos}
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

export default ConsentForm;
