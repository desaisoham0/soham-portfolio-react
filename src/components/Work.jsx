import React from 'react';
import jasfelLogo from '../assets/jasfel_logo.png';
import h4Logo from '../assets/hfour_logo.png';
import codepathLogo from '../assets/codepath_logo.png';
import tThreeLogo from '../assets/tThree_logo.png';
import blueCypressLogo from '../assets/BLUE CYPRESS LOGO TRANSP.jpeg';
// import sohamLogo from '../assets/soham_icon.png';

const workHistory = [
  // {
  //   company: 'Self-Employed',
  //   logo: sohamLogo,
  //   role: 'Freelance Full-Stack Developer',
  //   duration: 'Jan 2025 - Present',
  //   description: 'Building custom web solutions for local businesses',
  //   current: true,
  // },
  {
    company: 'Blue Cypress',
    logo: blueCypressLogo,
    role: 'AI, Software Engineering',
    duration: 'Jan 2026 - Present',
    description: 'Creating cool AI agents and software solutions for clients',
    current: true,
  },
  {
    company: 'CodePath',
    logo: codepathLogo,
    role: 'Tech Fellow',
    duration: 'May 2024 - Dec 2025',
    description: 'Mentoring students in software engineering fundamentals',
    current: false,
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
];

const Work = () => {
  return (
    <section className="space-y-10">
      <header className="text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-purple-500 flex items-center justify-center font-dinrounded">
          <i
            className="fas fa-briefcase mr-2 sm:mr-3 text-purple-500"
            aria-hidden="true"
          ></i>
          Work Experience
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-dinrounded">
          My professional journey in software engineering and education
        </p>
      </header>

      <section aria-labelledby="work-history" className="px-4">
        <h3 id="work-history" className="sr-only">
          Work History
        </h3>
        <ol className="mx-auto max-w-6xl space-y-6">
          {workHistory.map(job => (
            <li key={job.company} className="relative">
              <article
                className={`relative overflow-hidden rounded-2xl shadow-xs ${
                  job.current
                    ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-400'
                    : 'bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600'
                }`}
                aria-current={job.current ? 'true' : undefined}
              >
                <div className="p-5 sm:p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="shrink-0 mx-auto sm:mx-0">
                      <div className="relative">
                        <img
                          src={job.logo}
                          alt={`${job.company} logo`}
                          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl shadow-xl object-cover border-2 border-gray-200 dark:border-gray-600"
                        />
                        <div
                          className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/10 to-transparent"
                          aria-hidden="true"
                        ></div>
                      </div>
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <div className="mb-4">
                        <div className="flex items-center justify-center sm:justify-start gap-3">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-dinrounded text-gray-900 dark:text-gray-100">
                            {job.company}
                          </h3>
                          {job.current && (
                            <span className="rounded-full bg-green-100 text-green-700 dark:bg-green-800/60 dark:text-green-200 px-3 py-1 text-xs font-semibold font-dinrounded">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-orange-600 dark:text-orange-400 text-base sm:text-lg font-semibold mt-2 font-dinrounded">
                          {job.role}
                        </p>
                        <div className="mt-2 flex items-center justify-center sm:justify-start gap-2 text-gray-600 dark:text-gray-400">
                          <i
                            className="fas fa-calendar-alt text-sm"
                            aria-hidden="true"
                          ></i>
                          <time
                            className="text-sm font-medium font-dinrounded"
                            aria-label="Duration"
                          >
                            {job.duration}
                          </time>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-dinrounded max-w-3xl">
                        {job.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="skills" className="px-4">
        <div className="mx-auto max-w-6xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xs">
          <div className="text-center mb-6 sm:mb-8">
            <h3
              id="skills"
              className="text-xl sm:text-2xl font-bold text-red-600 dark:text-red-400 mb-3 flex items-center justify-center font-dinrounded"
            >
              <i
                className="fas fa-code mr-2 sm:mr-3 text-red-600 dark:text-red-400"
                aria-hidden="true"
              ></i>
              Technical Skills
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-dinrounded">
              Technologies I work with
            </p>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {[
              'Python',
              'Flask',
              'React',
              'AI/ML',
              'Node.js',
              'JavaScript',
              'TypeScript',
              'Restful APIs',
              'CI/CD',
              'Docker',
              'Linux',
              'PostgreSQL',
              'SQLite',
              'Firebase',
              'MongoDB',
              'Express',
              'Tailwind CSS',
            ].map(skill => (
              <li
                key={skill}
                className="group relative rounded-xl px-3 py-3 sm:px-4 sm:py-4 text-center transition-all duration-200 hover:shadow-lg border-2 border-gray-200 dark:border-gray-600 hover:border-yellow-400 dark:hover:border-yellow-500 bg-gray-50 dark:bg-gray-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 flex items-center justify-center min-h-12.5 sm:min-h-13.75"
              >
                <span className="text-gray-900 dark:text-gray-100 font-medium text-xs sm:text-sm leading-tight wrap-break-word font-dinrounded">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Work;
