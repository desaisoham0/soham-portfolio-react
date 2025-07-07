import React from 'react';
import profilePicture from '../assets/soham-profile-picture.jpg';
import SocialMedia from './SocialMedia';

const Hero = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
          {/* Profile Image */}
          <div className="relative group">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600 shadow-2xl">
              <img
                src={profilePicture}
                alt="Soham Desai"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 font-montserrat tracking-tight">
              <span className="block">SOHAM</span>
              <span className="block bg-gradient-to-br from-indigo-500 to-sky-500 bg-clip-text text-transparent">
                DESAI
              </span>
            </h1>

            <div className="space-y-2">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                Software Engineer
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                NYC-based engineer crafting powerful full-stack solutions to
                elevate businesses and empower innovation
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6 sm:pt-8">
            <a
              href="#contact"
              className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-700 hover:bg-orange-600/80 text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-150 hover:translate-y-0 active:translate-y-1 shadow-lg hover:shadow-md active:shadow-sm border-b-4 border-orange-900 active:border-b-2"
            >
              <span>Let's Work Together</span>
              <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>
          </div>

          {/* Social Links */}
          <SocialMedia className="pt-4" size="default" />
        </div>
      </header>

      {/* Stats and Education Section */}
      <div className="backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 mt-6 sm:mt-8 border-2 border-[#b5d2e6] dark:border-[#37464f] space-y-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-xl p-4 sm:p-6 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              12+
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              Projects Completed
            </div>
          </div>
          <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-xl p-4 sm:p-6 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              5+
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              Technologies Mastered
            </div>
          </div>
          <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-xl p-4 sm:p-6 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              2+
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              Years Experience
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-xl p-4 sm:p-6 shadow-sm">
          <h3 className="text-lg sm:text-xl font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center">
            <i className="fa-solid fa-graduation-cap mr-2"></i>
            Education
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 sm:gap-4">
            <div className="flex-1">
              <p className="text-gray-900 dark:text-gray-100 font-medium text-sm sm:text-base">
                Rutgers University, Newark, NJ
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                Bachelor of Arts in Computer Science with a Minor in Mathematics
              </p>
            </div>
            <p className="text-gray-900 dark:text-gray-100 font-medium text-sm sm:text-base shrink-0">
              May 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
