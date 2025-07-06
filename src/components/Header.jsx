import React from 'react';
import profilePicture from '../assets/soham-profile-picture.jpg';

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        {/* Profile Image */}
        <div className="relative group">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img
              src={profilePicture}
              alt="Soham Desai"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Name & Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-montserrat tracking-tight">
            <span className="block">SOHAM</span>
            <span className="block text-yellow-400">DESAI</span>
          </h1>

          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Software Engineer
            </p>
            <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto">
              NYC-based engineer crafting powerful full-stack solutions to
              elevate businesses and empower innovation
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <a
            href="#contact"
            className="group inline-flex items-center px-8 py-4 bg-yellow-400 text-slate-900 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 hover:bg-yellow-300 hover:shadow-xl hover:scale-105"
          >
            <span>Let's Work Together</span>
            <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 pt-4">
          <a
            href="https://github.com/desaisoham0"
            className="text-white/70 hover:text-yellow-400 transition-colors duration-300 text-2xl hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/soham-desai-068952212/"
            className="text-white/70 hover:text-yellow-400 transition-colors duration-300 text-2xl hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/sohamdesaiiii/"
            className="text-white/70 hover:text-yellow-400 transition-colors duration-300 text-2xl hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://x.com/desaisoham98"
            className="text-white/70 hover:text-yellow-400 transition-colors duration-300 text-2xl hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
