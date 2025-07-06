import React from 'react';
import sohamSki from '../assets/soham_ski.jpg';
import sohamTheMet from '../assets/soham_the_met.jpg';

function About() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About Me
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          My journey in technology and passion for creating meaningful solutions
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Story */}
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center">
              <i className="fas fa-rocket mr-2"></i>
              The Beginning
            </h3>
            <p className="text-white/90 leading-relaxed">
              My journey in technology started with a simple question: "How do
              websites work?" This curiosity led me to explore programming, and
              I quickly fell in love with the power of code to solve real-world
              problems.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center">
              <i className="fas fa-chart-line mr-2"></i>
              Professional Growth
            </h3>
            <p className="text-white/90 leading-relaxed">
              Through internships, freelance projects, and academic pursuits,
              I've developed expertise in full-stack development, AI/ML, and
              data engineering. My experience ranges from optimizing database
              performance to building user-friendly interfaces.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center">
              <i className="fas fa-heart mr-2"></i>
              Giving Back
            </h3>
            <p className="text-white/90 leading-relaxed">
              I'm passionate about education and mentorship. Teaching
              programming to students and helping fellow developers grow their
              skills has been one of the most rewarding aspects of my career.
            </p>
          </div>
        </div>

        {/* Right side - Images & Social */}
        <div className="space-y-6">
          {/* Image gallery */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={sohamSki}
              alt="Soham skiing"
              loading="lazy"
              className="aspect-square rotate-3 rounded-2xl shadow-xl bg-white/10 object-cover
                         transition-transform duration-300 hover:scale-105 hover:rotate-6"
            />
            <img
              src={sohamTheMet}
              alt="Soham at The Met"
              loading="lazy"
              className="aspect-square -rotate-3 rounded-2xl shadow-xl bg-white/10 object-cover
                         transition-transform duration-300 hover:scale-105 hover:-rotate-6"
            />
          </div>

          {/* Social links */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center">
              <i className="fas fa-share-alt mr-2"></i>
              Connect with Me
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/desaisoham0"
                className="group flex items-center text-white/90 hover:text-yellow-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-2xl mr-3 transition-transform duration-300 group-hover:scale-110"></i>
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/soham-desai-068952212/"
                className="group flex items-center text-white/90 hover:text-yellow-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-2xl mr-3 transition-transform duration-300 group-hover:scale-110"></i>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/sohamdesaiiii/"
                className="group flex items-center text-white/90 hover:text-yellow-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-2xl mr-3 transition-transform duration-300 group-hover:scale-110"></i>
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a
                href="https://x.com/desaisoham98"
                className="group flex items-center text-white/90 hover:text-yellow-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter text-2xl mr-3 transition-transform duration-300 group-hover:scale-110"></i>
                <span className="text-sm font-medium">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
