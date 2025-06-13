// components/Newsletter.jsx

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    // TODO: Hook into backend / API endpoint
    console.log('Subscribed with:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Read and share new perspective on just about any topic. Everyone is welcome.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full sm:w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <p className="mt-6 text-green-600 dark:text-green-400 font-medium">
            ✅ Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  );
}
