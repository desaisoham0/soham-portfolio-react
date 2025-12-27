import React from 'react';

function About() {
  return (
    <section aria-labelledby="about-title" className="space-y-10">
      <header className="text-center max-w-3xl mx-auto px-4">
        <h2
          id="about-title"
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-dinrounded mb-3 text-lime-500 tracking-tight"
        >
          About Me
        </h2>
        <p className="text-lg sm:text-xl font-dinrounded text-gray-600 dark:text-gray-400 leading-relaxed">
          My journey in technology and passion for creating meaningful solutions
        </p>
      </header>

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          <article className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md focus-within:shadow-md">
            <h3 className="text-xl font-bold font-dinrounded text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
              <i className="fas fa-rocket" aria-hidden="true" />
              <span>The Beginning</span>
            </h3>
            <p className="text-gray-700 font-dinrounded dark:text-gray-300 leading-relaxed">
              My journey in technology started with a simple question: How do
              websites work? This curiosity led me to learn programming, where I
              discovered how powerful code can be for solving real-world
              problems.
            </p>
          </article>

          <article className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md focus-within:shadow-md">
            <h3 className="text-xl font-bold font-dinrounded text-orange-600 dark:text-orange-400 mb-2 flex items-center gap-2">
              <i className="fas fa-chart-line" aria-hidden="true" />
              <span>Professional Growth</span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-dinrounded">
              Through my internships, freelance work, and studies, I have gained
              strong skills in full-stack development, AI, and Mathematics. My
              experience includes training AI models, improving database speed,
              and building complete web applications from scratch.
            </p>
          </article>

          <article className="bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md focus-within:shadow-md">
            <h3 className="text-xl font-bold font-dinrounded text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-2">
              <i className="fas fa-heart" aria-hidden="true" />
              <span>Giving Back</span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-dinrounded">
              I’m passionate about building software that works and helping
              people succeed in tech. My experience ranges from automating tasks
              with AI to building full-stack apps. I truly enjoy mentoring
              students and sharing knowledge with the developer community to
              help everyone grow.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
