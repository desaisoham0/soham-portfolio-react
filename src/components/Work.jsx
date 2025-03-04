import React from 'react';
import jasfelLogo from '../assets/jasfel_logo.png';
import h4Logo from '../assets/hfour_logo.png';
import codepathLogo from '../assets/codepath_logo.png';
import tThreeLogo from '../assets/tThree_logo.png';
import resumePDF from '../assets/Site-Soham-Resume-2025.pdf';

const workHistory = [
  {
    company: "4-H Youth Development",
    logo: h4Logo,
    role: "Educator",
    duration: "Sep 2024 - Present"
  },
  {
    company: "T3 Creators Collective",
    logo: tThreeLogo,
    role: "AI/AR Instructor",
    duration: "June 2024 - Present"
  },
  {
    company: "Jasfel Analytics",
    logo: jasfelLogo,
    role: "Software Engineer, Intern",
    duration: "July 2024 - October 2024"
  },
  {
    company: "CodePath",
    logo: codepathLogo,
    role: "Tech Fellow",
    duration: "June 2024 - December 2024"
  }
];

const Work = () => {
  return (
    <div>
      <h2 className="text-md sm:text-lg text-black font-medium mb-4 sm:mb-6 flex items-center gap-2">
        <i className="fas fa-briefcase"></i> Work
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {workHistory.map((job, index) => (
          <div
            key={index}
            className="
              flex gap-3 sm:gap-4 p-3 sm:p-4 
              hover:shadow-sm transition-all duration-300
              sm:hover:scale-[1.02]
            "
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="
                  w-10 h-10 sm:w-12 sm:h-12 
                  rounded-full shadow-md object-cover
                  border-0
                "
              />
            </div>
            
            {/* Company Info */}
            <div className="flex flex-col flex-1 min-w-0">
              <h3 className="text-sm sm:text-md font-medium text-gray-900 mb-1 truncate">
                {job.company}
              </h3>
              <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm gap-1">
                <span className="text-gray-600 font-medium">{job.role}</span>
                <span className="text-gray-500">{job.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resume Button */}
      <div className="mt-6 sm:mt-8 flex justify-center">
        <a
          href={resumePDF}
          download
          className="
            group relative z-10 inline-flex items-center 
            px-4 sm:px-5 py-2 sm:py-2.5 
            text-xs sm:text-sm text-zinc-700 font-medium 
            rounded-3xl shadow-md
            transition-all duration-300
            hover:text-yellow-600 hover:bg-white/70
            hover:shadow-lg
          "
        >
          <i
            className="
              fa-solid fa-download mr-2 
              transition-transform duration-300 
              group-hover:translate-x-1
            "
          ></i>
          Download My Resume
        </a>
      </div>
    </div>
  );
};

export default Work;
