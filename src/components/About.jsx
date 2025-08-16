import React from 'react';
import sohamSki from '../assets/soham_ski.jpg';
import sohamTheMet from '../assets/soham_the_met.jpg';
import T3 from '../assets/t3.jpg';
import netForge from '../assets/netforge.jpeg';

function About() {
  return (
    <section aria-labelledby="about-title" className="space-y-8">
      <header className="text-center max-w-3xl mx-auto px-4">
        <h2
          id="about-title"
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-dinrounded mb-4 text-lime-500"
        >
          About Me
        </h2>
        <p className="text-lg sm:text-xl font-dinrounded text-gray-600 dark:text-gray-400 leading-relaxed">
          My journey in technology and passion for creating meaningful solutions
        </p>
      </header>

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <div className="space-y-6">
            <article className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold font-dinrounded text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                <i className="fas fa-rocket mr-2" aria-hidden="true" />
                <span>The Beginning</span>
              </h3>
              <p className="text-gray-700 font-dinrounded dark:text-gray-300 leading-relaxed">
                My journey in technology started with a simple question: How do
                websites work? This curiosity led me to explore programming, and
                I quickly fell in love with the power of code to solve
                real-world problems.
              </p>
            </article>

            <article className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold font-dinrounded text-orange-600 dark:text-orange-400 mb-3 flex items-center">
                <i className="fas fa-chart-line mr-2" aria-hidden="true" />
                <span>Professional Growth</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-dinrounded">
                Through internships, freelance projects, and academic pursuits,
                I've developed expertise in full-stack development, AI/ML, and
                data engineering. My experience ranges from optimizing database
                performance to building user-friendly interfaces.
              </p>
            </article>

            <article className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold font-dinrounded text-purple-600 dark:text-purple-400 mb-3 flex items-center">
                <i className="fas fa-heart mr-2" aria-hidden="true" />
                <span>Giving Back</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-dinrounded">
                I'm passionate about education and mentorship. Teaching
                programming to students and helping fellow developers grow their
                skills has been one of the most rewarding aspects of my career.
              </p>
            </article>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <figure className="space-y-4">
                <img
                  src={sohamSki}
                  alt="Soham skiing"
                  loading="lazy"
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-60 rounded-2xl shadow-sm object-cover border border-gray-200 dark:border-gray-600 transition-transform duration-200 hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                />
                <img
                  src={T3}
                  alt="T3 Project"
                  loading="lazy"
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-60 rounded-2xl shadow-sm object-cover border border-gray-200 dark:border-gray-600 transition-transform duration-200 hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                />
              </figure>
              <figure className="space-y-4">
                <img
                  src={sohamTheMet}
                  alt="Soham at The Met"
                  loading="lazy"
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-60 rounded-2xl shadow-sm object-cover border border-gray-200 dark:border-gray-600 transition-transform duration-200 hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                />
                <img
                  src={netForge}
                  alt="NetForge Project"
                  loading="lazy"
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-60 rounded-2xl shadow-sm object-cover border border-gray-200 dark:border-gray-600 transition-transform duration-200 hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
