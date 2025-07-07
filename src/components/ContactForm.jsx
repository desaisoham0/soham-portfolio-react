import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Update form data
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    axios
      .post('/api/send_email', formData)
      .then(response => {
        if (response.data.success) {
          setSuccess(true);
          setError(false);
          setFormData({ email: '', message: '' });
        }
      })
      .catch(() => {
        setSuccess(false);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-br from-lime-500 via-sky-400 to-violet-500 bg-clip-text text-transparent mb-4 flex items-center">
          <i className="fa-solid fa-envelope mr-2 bg-gradient-to-br from-lime-500 via-sky-400 to-violet-500 bg-clip-text text-transparent"></i>
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          Ready to start your next project? Let's discuss how I can help bring
          your ideas to life.
        </p>
      </div>

      {/* Success/Error Messages */}
      {success && (
        <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4">
          <div className="flex items-center">
            <i className="fas fa-check-circle text-green-400 mr-2"></i>
            <p className="text-green-400 font-medium">
              Message sent successfully!
            </p>
          </div>
        </div>
      )}
      {error && (
        <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4">
          <div className="flex items-center">
            <i className="fas fa-exclamation-circle text-red-400 mr-2"></i>
            <p className="text-red-400 font-medium">
              Something went wrong. Please try again!
            </p>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
            value={formData.email}
            onChange={handleChange}
            className="
              w-full p-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl
              text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition-all duration-300
            "
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project or just say hello..."
            required
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="
              w-full p-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl
              text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 resize-none
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition-all duration-300
            "
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="
            group w-full inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4
            bg-sky-500 hover:bg-sky-400 text-white rounded-xl font-semibold
            transition-all duration-150 hover:translate-y-0 active:translate-y-1
            shadow-lg hover:shadow-md active:shadow-sm text-sm sm:text-base
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
            border-b-4 border-sky-700 active:border-b-2
          "
        >
          {loading ? (
            <>
              <i className="fas fa-spinner fa-spin mr-2"></i>
              Sending...
            </>
          ) : (
            <>
              <i className="fa-regular fa-paper-plane mr-2 transition-transform duration-300 group-hover:translate-x-1"></i>
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
