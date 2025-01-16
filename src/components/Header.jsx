import React from 'react';
import profilePicture from '../assets/soham-profile-picture.jpg';

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
        
        {/* Profile Image */}
        <div className="w-32 sm:w-40 md:w-48 lg:w-56 group">
          <img
            src={profilePicture}
            alt="Soham Desai"
            className="
              w-full rounded-full shadow-lg
              ring-4 ring-white/10
              transition-transform duration-300
              group-hover:scale-105
            "
          />
        </div>
        
        {/* Name & Socials */}
        <div className="text-center sm:text-left">
          {/* Name */}
          <h1
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-bold tracking-tight leading-tight 
              text-white font-montserrat
              mb-2 sm:mb-4
            "
          >
            SOHAM<br />DESAI
          </h1>
          
          {/* Subtitle */}
          <p className="text-yellow-500 font-mono text-sm sm:text-base md:text-lg lg:text-xl mb-4">
            Software Engineer | Full Stack Developer 
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 justify-center sm:justify-start">
            <a
              href="https://github.com/desaisoham0"
              className="text-zinc-200 hover:text-yellow-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-xl sm:text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/soham-desai-068952212/"
              className="text-zinc-200 hover:text-yellow-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-xl sm:text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com/sohamdesaiiii/"
              className="text-zinc-200 hover:text-yellow-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-xl sm:text-2xl"></i>
            </a>
            <a
              href="https://x.com/desaisoham98"
              className="text-zinc-200 hover:text-yellow-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter text-xl sm:text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
