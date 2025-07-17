import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { desc } from 'framer-motion/client';

const OtherForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    description: '',
    country: 'Nigeria',
    
    
    expectations: '',
    additionalInfo: '',
    referralSource: ''
  });

  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.startPeriod) newErrors.startPeriod = 'Start period is required';
    if (!formData.educationLevel) newErrors.educationLevel = 'Education level is required';
    if (!formData.preferredProgram) newErrors.preferredProgram = 'Preferred program is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsOpen(true);
  };

  const proceed = () => {
    setIsOpen(false);
    navigate('/pre-academy-application-form');
  };

  

  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-8 py-10">
      <h2 className="text-lg sm:text-4xl font-semibold mb-6">Other\Tech Enthusiast Form</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl flex flex-col gap-6 sm:flex-row"
      >
        <div className="flex flex-col gap-4 w-full sm:w-1/2">
          <div>
            <label className="text-sm text-gray-600">Full name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-black/50 rounded-lg px-4 py-2 mt-1"
            />
            {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
            
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-black/50 rounded-lg px-4 py-2 mt-2"
            />
            {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
          </div>
          <div>
            <label className="text-sm text-gray-600">Email address</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-black/50 rounded-lg px-4 py-2"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="text-sm text-gray-600">Phone number (optional)</label>
            <input
              type="tel"
              name="phone"
              placeholder="Tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-black/50 rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Date of birth</label>
            <input
              type="text"
              name="dob"
              placeholder="DD/MM/YYYY"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-black/50 rounded-lg px-4 py-2"
            />
            {errors.dob && <p className="text-red-600 text-sm">{errors.dob}</p>}
          </div>
          
          <div>
            <label className="text-sm text-gray-600">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-black/50 rounded-lg px-4 py-2 bg-white"
            >
              <option value="">Select your country</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="Kenya">Kenya</option>
              <option value="South Africa">South Africa</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Other">Other</option>
            </select>
            {errors.country && <p className="text-red-600 text-sm">{errors.country}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600">What best describes you?</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              placeholder="Tell us more about you..."
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          
        </div>

        <div className="flex flex-col gap-4 w-full sm:w-1/2">
          
          

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600">What are you hoping to gain from Nebula Academy</label>
            <textarea
              name="expectations"
              value={formData.expectations}
              onChange={handleChange}
              rows="3"
              placeholder="Tell us more about your interest..."
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600">Additional Information/questions</label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us more about your interest..."
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600">How did you hear about us</label>
            <textarea
              name="referralSource"
              value={formData.referralSource}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us how you heard about us..."
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <button
            type="submit"
            className="mt-4 self-end bg-yellow-300/80 rounded-full px-6 py-2 text-sm font-medium flex items-center gap-2"
          >
            Submit →
          </button>
        </div>
      </form>

      {/* MODAL IMPLEMENTATION BASED ON FIGMA DESIGN */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-[#DBF1F1] p-6 text-center shadow-xl transition-all flex flex-col items-center gap-4">
                  {/* Group 32 - Icon */}
                  <div className="relative w-[100px] h-[100px]">
                    <div className="absolute w-[100px] h-[100px] bg-yellow-300/70 rounded-full left-0 top-0"></div>
                    <div className="absolute w-[80px] h-[80px] bg-yellow-300/70 rounded-full left-[10px] top-[10px]"></div>
                    <Check className="absolute left-[20px] top-[20px] w-[60px] h-[60px] text-white bg-green-600 rounded-full p-2" />
                  </div>

                  {/* Thank You Message */}
                  <h3 className="text-xl font-semibold text-black">Thank you for registering your interest</h3>

                  <p className="text-sm text-black max-w-md">
                    We’ll reach out soon with updates, helpful resources, and upcoming Pre-Academy opportunities
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col items-center gap-2 w-full">
                    <p className="text-sm text-black">In the meantime, why not:</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                      <button className="bg-[#FFC925] border border-black rounded-full px-4 py-2 text-sm hover:bg-black hover:text-white transition">
                        Join a Free Class
                      </button>
                      <button className="bg-[#FFC925] border border-black rounded-full px-4 py-2 text-sm hover:bg-black hover:text-white transition">
                        Explore the Curriculum
                      </button>
                      <button className="bg-[#FFC925] border border-black rounded-full px-4 py-2 text-sm hover:bg-black hover:text-white transition">
                        Book a 1-on-1 Call
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default OtherForm;
