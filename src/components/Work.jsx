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
        <h2 className="text-3xl font-bold text-white mb-3 flex items-center justify-center">
          <i className="fas fa-briefcase mr-3 text-yellow-400"></i>
          Work Experience
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          My professional journey in software engineering and education
        </p>
      </div>

      {/* Work History */}
      <div className="space-y-6">
        {workHistory.map((job, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden rounded-2xl transition-all duration-300 
              hover:scale-[1.02] hover:shadow-2xl
              ${
                job.current
                  ? 'bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 border-2 border-yellow-400/30 shadow-lg'
                  : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20'
              }
            `}
          >
            {/* Current Badge */}
            {job.current && (
              <div className="absolute top-4 right-4 z-10">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-400 text-slate-900 text-sm rounded-full font-semibold shadow-lg">
                  <div className="w-2 h-2 bg-slate-900 rounded-full animate-pulse"></div>
                  Current
                </div>
              </div>
            )}

            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="relative">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-xl object-cover border-2 border-white/20"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent"></div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {job.company}
                    </h3>
                    <p className="text-yellow-400 text-lg font-semibold mb-2">
                      {job.role}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-white/60">
                      <i className="fas fa-calendar-alt text-sm"></i>
                      <span className="text-sm font-medium">
                        {job.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-white/80 text-base leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-center">
            <i className="fas fa-code mr-3 text-yellow-400"></i>
            Technical Skills
          </h3>
          <p className="text-white/70">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
              className="group relative overflow-hidden bg-white/10 hover:bg-white/20 rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/10 hover:border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-white/90 font-medium text-sm">
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
