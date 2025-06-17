// src/Pages/collaborate/components/MentorForm.jsx

import React, { useState } from "react";

export default function MentorForm() {
  const [formData, setFormData] = useState({
    
    name: "",
    email: "",
    phone: "",
    website: "",
    area: "",
    roles: "",
    availability: "",
    briefly: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // TODO: Connect to backend or email handler
  };

  return (
    <section className="w-full max-w-[768px] mx-auto px-4 py-20">
      {/* Heading */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <div className="w-[350px] border-t-[6px] border-yellow-400"></div>
        <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-center text-black font-poppins">
          Application Form For Mentors and Volunteers
        </h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter your full name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter your phone number"
          />
        </div>


         <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Personal Website</label>
          <input
            type="email"
            name="website"
            value={formData.website}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter your personal website"
          />
          </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Areas Of Expertise</label>
          <select
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select a type</option>
            <option value="event">Coding/Programming</option>
            <option value="scholarship">Data science & Analytics</option>
            <option value="students">Web/Mobile Developments</option>
            <option value="faculty">Cyber Security</option>
            <option value="Exclusive">UI/UX Design</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Preferred Roles</label>
          <select
            name="roles"
            value={formData.roles}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select a type</option>
            <option value="platinum">Mentor</option>
            <option value="gold">Guest Speaker</option>
            <option value="silver">Technical Tutor</option>
            <option value="bronze">Event Volunteer</option>
            <option value="bronze">Content Contributor</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Availability(hours per week/month)</label>
          <textarea
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            rows="2"
            placeholder="Tell us more about your availability..."
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Briefly why would you like to mentor/volunteer?</label>
          <textarea
            name="briefly"
            value={formData.briefly}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us more about your availability..."
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="mt-6 self-center px-6 py-3 w-full sm:w-auto bg-yellow-400 text-[#4A2B29] rounded-full shadow-md font-semibold hover:brightness-105 transition"
        >
          Submit Partnership Request
        </button>
      </form>
    </section>
  );
}
