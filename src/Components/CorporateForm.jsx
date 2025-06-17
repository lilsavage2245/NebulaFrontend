// src/Pages/collaborate/components/CorporateForm.jsx

import React, { useState } from "react";

export default function CorporateForm() {
  const [formData, setFormData] = useState({
    companyname: "",
    industrysector: "",
    name: "",
    email: "",
    phone: "",
    companysite: "",
    area: "",
    budget: "",
    message: "",
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
          Easy-To-Fill Sponsorship Interest Form
        </h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            name="companyname"
            value={formData.companyname}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter your comapany name"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Industry Sector</label>
          <input
            type="text"
            name="industrysector"
            value={formData.industrysector}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter your industry sector"
          />
        </div>

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
          <label className="text-sm font-medium text-gray-700">Company Website</label>
          <input
            type="email"
            name="companysite"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter your company website"
          />
          </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Preferred Sponsorship Area</label>
          <select
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select a type</option>
            <option value="event">Event Sponsorship</option>
            <option value="scholarship">Scholarship Program</option>
            <option value="students">Students Projects & Bootcamp</option>
            <option value="faculty">Faculty & Equipment Sponsorship</option>
            <option value="Exclusive">Exclusive corporate partner Status</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Sponsorship Budget</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select a type</option>
            <option value="platinum">Platinum Sponsorship</option>
            <option value="gold">Gold Sponsorship</option>
            <option value="silver">Silver Sponsorship</option>
            <option value="bronze">Bronze Sponsorship</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us more about your interest..."
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
