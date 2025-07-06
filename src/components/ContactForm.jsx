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
        <h2 className="text-2xl font-semibold text-[#1899d6] mb-4 flex items-center">
          <i className="fa-solid fa-envelope mr-2"></i>
          Get In Touch
        </h2>
        <p className="text-[#000437] dark:text-[#dce6ec] text-sm">
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
            className="block text-[#000437] dark:text-[#dce6ec] text-sm font-medium mb-2"
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
              w-full p-4 bg-[#b5d2e6]/40 dark:bg-[#37464f]/40 border-2 border-[#b5d2e6] dark:border-[#37464f] rounded-xl
              text-[#000437] dark:text-[#dce6ec] placeholder-[#000437]/50 dark:placeholder-[#dce6ec]/50
              focus:outline-none focus:ring-2 focus:ring-[#1899d6]/50 focus:border-[#1899d6]/50
              transition-all duration-300
            "
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-[#000437] dark:text-[#dce6ec] text-sm font-medium mb-2"
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
              w-full p-4 bg-[#b5d2e6]/40 dark:bg-[#37464f]/40 border-2 border-[#b5d2e6] dark:border-[#37464f] rounded-xl
              text-[#000437] dark:text-[#dce6ec] placeholder-[#000437]/50 dark:placeholder-[#dce6ec]/50 resize-none
              focus:outline-none focus:ring-2 focus:ring-[#1899d6]/50 focus:border-[#1899d6]/50
              transition-all duration-300
            "
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="
            group w-full inline-flex items-center justify-center px-6 py-4
            bg-[#3c4dff] text-[#dce6ec] rounded-xl font-semibold border-1 border-b-4 border-[#3f22ec]
            transition-all duration-300 hover:bg-[#4353fa] hover:scale-105
            shadow-lg hover:shadow-xl
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
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
