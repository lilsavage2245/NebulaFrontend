import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const FindCoursesButtonWithModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={toggleModal}
        className="px-6 py-2 border border-black text-[#4A2B29] rounded-full text-sm font-poppins"
      >
        Find course
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center px-4">
          <div className="bg-white w-full max-w-md rounded-lg p-6 relative">
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={toggleModal}
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-semibold mb-6 text-center">
              Choose a Course Category
            </h2>

            <div className="flex flex-col gap-4">
              <Link to="/academy/find-courses/advanced">
                <button className="w-full py-2 rounded-full bg-[#1ABCFE] text-white font-medium hover:bg-[#179dd6] transition">
                  Advanced Courses
                </button>
              </Link>
              <Link to="/academy/find-courses/beginner">
                <button className="w-full py-2 rounded-full bg-[#1ABCFE] text-white font-medium hover:bg-[#179dd6] transition">
                  Beginner Courses
                </button>
              </Link>
              <Link to="/academy/find-courses/intermediate">
                <button className="w-full py-2 rounded-full bg-[#1ABCFE] text-white font-medium hover:bg-[#179dd6] transition">
                  Intermediate Courses
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindCoursesButtonWithModal;
