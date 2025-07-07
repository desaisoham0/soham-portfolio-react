import React from 'react';
import sohamSki from '../assets/soham_ski.jpg';
import sohamTheMet from '../assets/soham_the_met.jpg';
import T3 from '../assets/t3.jpg';
import netForge from '../assets/netforge.jpeg';

function About() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-dinrounded mb-4 text-lime-500">
          About Me
        </h1>
        <p className="text-lg sm:text-xl font-dinrounded text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          My journey in technology and passion for creating meaningful solutions
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Story */}
        <div className="space-y-6">
          <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold font-dinrounded text-blue-600 dark:text-blue-400 mb-3 flex items-center">
              <i className="fas fa-rocket mr-2"></i>
              The Beginning
            </h3>
            <p className="text-gray-700 font-dinrounded dark:text-gray-300 leading-relaxed">
              My journey in technology started with a simple question: "How do
              websites work?" This curiosity led me to explore programming, and
              I quickly fell in love with the power of code to solve real-world
              problems.
            </p>
          </div>

          <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold font-dinrounded text-orange-600 dark:text-orange-400 mb-3 flex items-center">
              <i className="fas fa-chart-line mr-2"></i>
              Professional Growth
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-dinrounded">
              Through internships, freelance projects, and academic pursuits,
              I've developed expertise in full-stack development, AI/ML, and
              data engineering. My experience ranges from optimizing database
              performance to building user-friendly interfaces.
            </p>
          </div>

          <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold font-dinrounded text-purple-600 dark:text-purple-400 mb-3 flex items-center">
              <i className="fas fa-heart mr-2"></i>
              Giving Back
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-dinrounded">
              I'm passionate about education and mentorship. Teaching
              programming to students and helping fellow developers grow their
              skills has been one of the most rewarding aspects of my career.
            </p>
          </div>
        </div>

        {/* Right side - Images & Social */}
        <div className="space-y-6">
          {/* Image gallery */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-3 sm:space-y-4">
              <img
                src={sohamSki}
                alt="Soham skiing"
                loading="lazy"
                className="w-full h-40 sm:h-48 md:h-52 lg:h-56 rounded-xl shadow-lg object-cover border border-gray-200 dark:border-gray-600"
              />
              <img
                src={T3}
                alt="T3 Project"
                loading="lazy"
                className="w-full h-40 sm:h-48 md:h-52 lg:h-56 rounded-xl shadow-lg object-cover border border-gray-200 dark:border-gray-600"
              />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <img
                src={sohamTheMet}
                alt="Soham at The Met"
                loading="lazy"
                className="w-full h-40 sm:h-48 md:h-52 lg:h-56 rounded-xl shadow-lg object-cover border border-gray-200 dark:border-gray-600"
              />
              <img
                src={netForge}
                alt="NetForge Project"
                loading="lazy"
                className="w-full h-40 sm:h-48 md:h-52 lg:h-56 rounded-xl shadow-lg object-cover border border-gray-200 dark:border-gray-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
