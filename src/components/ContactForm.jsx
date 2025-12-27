import React, { useState } from 'react';
import axios from 'axios';
import { Transition } from '@headlessui/react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const emailHelpId = 'email-help';
  const messageHelpId = 'message-help';

  const inputBase =
    'w-full px-4 py-3 font-dinrounded bg-white dark:bg-gray-800 border-2 rounded-2xl text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all duration-200';
  const inputState = error
    ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-sky-500 focus:border-sky-500';

  return (
    <section className="space-y-6 w-full max-w-2xl mx-auto px-4 sm:px-6">
      <header className="space-y-2 sm:space-y-3">
        <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-br text-amber-500 flex items-center font-dinrounded">
          <i
            className="fa-solid fa-envelope mr-2 text-amber-500"
            aria-hidden="true"
          ></i>
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-dinrounded max-w-2xl">
          Let’s build something together! Whether you have a question about my projects or just want to say hi, 
          feel free to drop me a message.
        </p>
      </header>

      <div aria-live="polite" className="space-y-3">
        <Transition
          show={success}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <div
            role="status"
            className="bg-green-500/20 border border-green-500/30 rounded-2xl p-4"
          >
            <div className="flex items-center">
              <i
                className="fas fa-check-circle text-green-400 mr-2"
                aria-hidden="true"
              ></i>
              <p className="text-green-400 font-medium">
                Message sent successfully!
              </p>
            </div>
          </div>
        </Transition>

        <Transition
          show={error}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <div
            role="alert"
            className="bg-red-500/20 border border-red-500/30 rounded-2xl p-4"
          >
            <div className="flex items-center">
              <i
                className="fas fa-exclamation-circle text-red-400 mr-2"
                aria-hidden="true"
              ></i>
              <p className="text-red-400 font-medium">
                Something went wrong. Please try again!
              </p>
            </div>
          </div>
        </Transition>
      </div>

      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 sm:p-6">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          aria-busy={loading ? 'true' : 'false'}
        >
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 text-sm font-medium font-dinrounded"
            >
              Your Email
            </label>
            <input
              autoComplete="email"
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              aria-describedby={emailHelpId}
              aria-invalid={error ? 'true' : 'false'}
              className={`${inputBase} ${inputState}`}
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 text-sm font-medium font-dinrounded"
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
              aria-describedby={messageHelpId}
              aria-invalid={error ? 'true' : 'false'}
              rows={6}
              className={`${inputBase} ${inputState} resize-none`}
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer group w-full inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-2xl font-semibold font-dinrounded transition-all duration-150 hover:translate-y-0 active:translate-y-1 shadow-lg hover:shadow-md active:shadow-sm text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 border-b-4 border-sky-700 active:border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-800"
              aria-label={loading ? 'Sending message' : 'Send message'}
            >
              {loading ? (
                <>
                  <i
                    className="fas fa-spinner fa-spin mr-2"
                    aria-hidden="true"
                  ></i>
                  Sending...
                </>
              ) : (
                <>
                  <i
                    className="fa-regular fa-paper-plane mr-2 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  ></i>
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
