import React from "react";
import ContactForm from "../components/ContactForm";
import sohamSki from "../assets/soham_ski.jpg";
import sohamTheMet from "../assets/soham_the_met.jpg";

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row bg-white/90 shadow-lg rounded-lg overflow-hidden">
        {/* Left side (Contact details) */}
        <div className="md:w-1/2 p-8 space-y-6">
          <h1 className="font-bold text-4xl md:text-5xl text-zinc-800 tracking-tight">
            I'm Soham Desai. I live around New York Metropolitan area, where I design the future.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Software engineering captivates me because it combines creativity, logic, and problem-solving to create impactful solutions...
            <br />
            Over the years, I have worked on several projects that reflect my enthusiasm for creating impactful software...
          </p>
        </div>

        {/* Right side (Contact form and images) */}
        <div className="md:w-1/2 p-8 space-y-6">
          {/* Image gallery */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={sohamSki}
              alt="Soham skiing"
              loading="lazy"
              className="aspect-square rotate-3 rounded-2xl shadow-xl bg-zinc-100 object-cover transition-all duration-300 hover:shadow-2xl"
            />
            <img
              src={sohamTheMet}
              alt="Soham at The Met"
              loading="lazy"
              className="aspect-square -rotate-3 rounded-2xl shadow-xl bg-zinc-100 object-cover transition-all duration-300 hover:shadow-2xl"
            />
          </div>

          {/* Social links */}
          <ul className="mt-6 flex-col space-y-6">
            <li>
              <a
                href="https://github.com/desaisoham0"
                className="group text-sm font-medium flex transition text-zinc-800 hover:text-yellow-600 duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-xl sm:text-2xl"></i>
                <span className="ml-4">Follow on GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/soham-desai-068952212/"
                className="group text-sm font-medium flex transition text-zinc-800 hover:text-yellow-600 duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-xl sm:text-2xl"></i>
                <span className="ml-4">Follow on LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sohamdesaiiii/"
                className="group text-sm font-medium flex transition text-zinc-800 hover:text-yellow-600 duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-xl sm:text-2xl"></i>
                <span className="ml-4">Follow on Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/desaisoham98"
                className="group text-sm font-medium flex transition text-zinc-800 hover:text-yellow-600 duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter text-xl sm:text-2xl"></i>
                <span className="ml-4">Follow on X</span>
              </a>
            </li>
            <li className="mt-8 border-t border-zinc-100 pt-8 flex">
              <a
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-yellow-600"
                href="mailto:desaisoham98@gmail.com"
              >
                <i className="fas fa-envelope text-xl sm:text-2xl"></i>
                <span className="ml-4">desaisoham98@gmail.com</span>
              </a>
            </li>
          </ul>

          {/* Contact form */}
          <div
            className="rounded-2xl border border-zinc-100 p-4 md:p-6 transition-all duration-300 hover:shadow-lg"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
