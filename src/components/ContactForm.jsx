import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Update form data
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post('/api/send_email', formData)
      .then(response => {
        if (response.data.success) {
          setSuccess(true);
          setError(false);
          setFormData({ email: '', message: '' });
        }
      })
      .catch(err => {
        console.error('Error:', err);
        setSuccess(false);
        setError(true);
      });
  };

  return (
    <div>
      <h2 className="text-md sm:text-lg text-black mb-4 flex items-center gap-2">
        <i className="fa-solid fa-message"></i> Send Me a Message
      </h2>

      {/* Success/Error Messages */}
      {success && (
        <p className="text-green-600 mb-2">Message sent successfully!</p>
      )}
      {error && (
        <p className="text-red-600 mb-2">Something went wrong. Try again!</p>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email address"
          required
          value={formData.email}
          onChange={handleChange}
          className="
            w-full p-2 border border-white/85 rounded-md
            outline-none placeholder-gray-400
            focus:ring-2 focus:ring-yellow-500/10 focus:border-yellow-500 focus:outline-none
            transition-colors duration-600
          "
          aria-label="Email address"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message"
          required
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="
            w-full p-2 border border-white-85 rounded-md
            outline-none placeholder-gray-400
            focus:ring-2 focus:ring-yellow-500/10 focus:border-yellow-500
            transition-colors duration-300
          "
          aria-label="Message"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="
            group inline-flex items-center px-4 py-2
            bg-zinc-800 text-white rounded-3xl
            text-sm font-medium shadow-md
            transition-all duration-300
            hover:bg-black hover:shadow-lg hover:text-yellow-500
          "
        >
          <i
            className="
              fa-regular fa-paper-plane
              mr-2 
              transition-transform duration-300
              group-hover:translate-x-1
            "
          ></i>
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
