import React from 'react';
import profilePicture from '../assets/soham-profile-picture.jpg';
import SocialMedia from './SocialMedia';

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        {/* Profile Image */}
        <div className="relative group">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-[#b5d2e6] dark:border-[#37464f] shadow-2xl">
            <img
              src={profilePicture}
              alt="Soham Desai"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pastelLavender/20 via-pastelPink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Name & Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#000437] dark:text-[#dce6ec] font-montserrat tracking-tight">
            <span className="block">SOHAM</span>
            <span className="block bg-gradient-to-r from-[#1e40af] to-[#0ea5e9] dark:from-[#3b82f6] dark:to-[#38bdf8] bg-clip-text text-transparent">
              DESAI
            </span>
          </h1>

          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-[#000437]/80 dark:text-[#dce6ec]/80 font-medium">
              Software Engineer
            </p>
            <p className="text-sm md:text-base text-[#000437]/60 dark:text-[#dce6ec]/60 max-w-2xl mx-auto">
              NYC-based engineer crafting powerful full-stack solutions to
              elevate businesses and empower innovation
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <a
            href="#contact"
            className="group inline-flex items-center px-8 py-4 bg-[#cd7900] dark:bg-[#cd7900] text-[#dce6ec] dark:text-[#dce6ec] rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#bf7202] dark:hover:bg-[#bf7202] hover:scale-105 border-b-4 border-pastelYellow-800 dark:border-pastelYellow-800"
          >
            <span>Let's Work Together</span>
            <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
          </a>
        </div>

        {/* Social Links */}
        <SocialMedia className="pt-4" size="default" />
      </div>
    </header>
  );
};

export default Header;
