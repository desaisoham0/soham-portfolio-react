import React from 'react';
import jasfelLogo from '../assets/jasfel_logo.png';
import h4Logo from '../assets/hfour_logo.png';
import codepathLogo from '../assets/codepath_logo.png';
import tThreeLogo from '../assets/tThree_logo.png';
import sohamLogo from '../assets/soham_icon.png';

const workHistory = [
  {
    company: 'Self-Employed',
    logo: sohamLogo,
    role: 'Freelance Full-Stack Developer',
    duration: 'Jan 2025 - Present',
    description: 'Building custom web solutions for local businesses',
    current: true,
  },
  {
    company: '4-H Youth Development',
    logo: h4Logo,
    role: 'Educator',
    duration: 'Sep 2024 - May 2025',
    description: 'Teaching programming and technology skills to youth',
    current: false,
  },
  {
    company: 'T3 Creators Collective',
    logo: tThreeLogo,
    role: 'AI/AR Instructor',
    duration: 'June 2024 - May 2025',
    description: 'Leading workshops on AI and AR technologies',
    current: false,
  },
  {
    company: 'Jasfel Analytics',
    logo: jasfelLogo,
    role: 'Software Engineer, Intern',
    duration: 'July 2024 - October 2024',
    description: 'Developed data analysis tools and visualization dashboards',
    current: false,
  },
  {
    company: 'CodePath',
    logo: codepathLogo,
    role: 'Tech Fellow',
    duration: 'June 2024 - December 2024',
    description: 'Mentoring students in software engineering fundamentals',
    current: false,
  },
];

const Work = () => {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-br from-lime-500 via-sky-400 to-violet-500 bg-clip-text text-transparent flex items-center justify-center">
          <i className="fas fa-briefcase mr-2 sm:mr-3 bg-gradient-to-br from-lime-500 via-sky-400 to-violet-500 bg-clip-text text-transparent"></i>
          Work Experience
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          My professional journey in software engineering and education
        </p>
      </div>

      {/* Work History */}
      <div className="space-y-6">
        {workHistory.map((job, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden rounded-2xl shadow-sm
              ${
                job.current
                  ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-400'
                  : 'bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600'
              }
            `}
          >
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="relative">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl shadow-xl object-cover border-2 border-gray-200 dark:border-gray-600"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent"></div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {job.company}
                    </h3>
                    <p className="text-orange-600 dark:text-orange-400 text-base sm:text-lg font-semibold mb-2">
                      {job.role}
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 dark:text-gray-400">
                      <i className="fas fa-calendar-alt text-sm"></i>
                      <span className="text-sm font-medium">
                        {job.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-red-600 dark:text-red-400 mb-3 flex items-center justify-center">
            <i className="fas fa-code mr-2 sm:mr-3 text-red-600 dark:text-red-400"></i>
            Technical Skills
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {[
            'React',
            'Flask',
            'AI/ML',
            'Node.js',
            'Python',
            'JavaScript',
            'TypeScript',
            'SQL',
            'Firebase',
            'MongoDB',
            'Express',
            'Tailwind CSS',
            'Git',
          ].map((skill, index) => (
            <div
              key={index}
              className="group relative rounded-xl px-3 py-3 sm:px-4 sm:py-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-gray-200 dark:border-gray-600 hover:border-yellow-400 dark:hover:border-yellow-500 bg-gray-50 dark:bg-gray-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 flex items-center justify-center min-h-[50px] sm:min-h-[55px]"
            >
              <span className="relative text-gray-900 dark:text-gray-100 font-medium text-xs sm:text-sm leading-tight text-center break-words hyphens-auto">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
