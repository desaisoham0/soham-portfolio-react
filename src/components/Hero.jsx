import React from 'react';
import { Transition } from '@headlessui/react';
import profilePicture from '../assets/soham-profile-picture.jpg';
import SocialMedia from './SocialMedia';

const Hero = () => {
  return (
    <div className="w-full">
      <header className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
          <Transition
            appear
            show
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
          >
            <figure className="relative group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600 shadow-2xl">
                <img
                  src={profilePicture}
                  alt="Soham Desai"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
              <figcaption className="sr-only">
                Profile picture of Soham Desai
              </figcaption>
            </figure>
          </Transition>

          <Transition
            appear
            show
            enter="transition ease-out duration-300 delay-100"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-gray-100 font-dinrounded tracking-tight">
                <span className="block">SOHAM</span>
                <span className="block bg-gradient-to-br from-indigo-500 to-sky-500 bg-clip-text text-transparent">
                  DESAI
                </span>
              </h1>
              <div className="space-y-2">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium font-dinrounded">
                  Software Engineer
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium font-dinrounded">
                  New York City Metropolitan Area
                </p>
                {/* <p className="text-sm sm:text-base md:text-lg font-montserrat text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Passionate about building efficient software, optimizing AI models, 
                  and helping the developer community grow.
                </p> */}
              </div>
            </div>
          </Transition>

          <Transition
            appear
            show
            enter="transition ease-out duration-300 delay-150"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
          >
            <div className="pt-6 sm:pt-8">
              <a
                href="#contact"
                aria-label="Contact Soham Desai"
                role="button"
                className="cursor-pointer inline-flex items-center rounded-2xl px-6 py-3 sm:px-8 sm:py-4 bg-orange-700 text-white font-semibold font-dinrounded text-base sm:text-lg transition-all duration-200 shadow-sm hover:bg-orange-600/90 hover:shadow-md active:translate-y-0.5 border-b-4 border-orange-900 active:border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
              >
                <span>Let’s Work Together</span>
                <i
                  className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Transition>

          <nav
            aria-label="Social media links"
            className="w-full flex justify-center"
          >
            <SocialMedia className="pt-4" size="default" />
          </nav>
        </div>
      </header>

      <section className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 mt-6 sm:mt-8 border-2 border-gray-300 dark:border-[#37464f] space-y-8">
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 font-dinrounded">
            <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 text-center shadow-sm">
              <dd className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                15+
              </dd>
              <dt className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Projects Completed
              </dt>
            </div>
            <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 text-center shadow-sm">
              <dd className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                5+
              </dd>
              <dt className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Technologies Mastered
              </dt>
            </div>
            <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 text-center shadow-sm">
              <dd className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                1+
              </dd>
              <dt className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Years Experience
              </dt>
            </div>
          </dl>

          <article className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold font-dinrounded text-green-600 dark:text-green-400 mb-4 flex items-center">
              <i
                className="fa-solid fa-graduation-cap mr-2"
                aria-hidden="true"
              />
              <span>Education</span>
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex-1">
                <p className="text-gray-900 dark:text-gray-100 font-dinrounded font-medium text-sm sm:text-base">
                  Rutgers University, Newark, NJ
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed font-dinrounded">
                  Bachelor of Arts in Computer Science with a Minor in
                  Mathematics
                </p>
              </div>
              <p className="text-gray-900 dark:text-gray-100 font-dinrounded font-medium text-sm sm:text-base shrink-0">
                May 2025
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Hero;
