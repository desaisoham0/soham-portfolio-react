import React, { Fragment, useMemo, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';

const projectsList = [
  {
    title: 'Restaurant Fullstack Application',
    description:
      'Developed and successfully sold a responsive full-stack web application to Kailani Shave & Ice. Built with React 19, TypeScript, Tailwind CSS, and Firebase with optimized serverless backend using Vercel Functions',
    url: 'https://github.com/desaisoham0/kailani',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Vercel'],
    featured: true,
    icon: 'fas fa-utensils',
    category: 'Full-Stack',
    priority: 1,
    year: 2025,
  },
  {
    title: 'Gemma 3n Chat – talk to an LLM right in your browser',
    description:
      'LLM chat app that runs Google’s Gemma 3n or any Ollama model, fully offline on your machine. No internet, no accounts. Every conversation stays private, stored in your browser with sql.js and localStorage.',
    url: 'https://github.com/desaisoham0/Gemma3n',
    tech: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'sql.js',
      'Gemma 3n',
      'Ollama',
    ],
    featured: true,
    icon: 'fas fa-comment-dots',
    category: 'AI/ML',
    priority: 2,
    year: 2025,
  },
  {
    title: 'AI Alumni Scraper',
    description:
      'Project-managed a 4-member capstone combining Flask API, Tailwind UI, and fuzzy-matching pipeline. Parallelized searches with ThreadPoolExecutor reducing lookup time by 50%+.',
    url: 'https://github.com/desaisoham0/cssproto1',
    tech: ['Flask', 'Python', 'Tailwind CSS', 'Machine Learning'],
    featured: true,
    icon: 'fas fa-robot',
    category: 'AI/ML',
    priority: 3,
    year: 2025,
  },
  {
    title: 'Raspberry Pi Real-Time System Monitor',
    description:
      'An object-oriented Raspberry Pi system monitor that provides real-time hardware metrics through a Streamlit dashboard. Features live visualizations, customizable logging, and a modular architecture, highlighting expertise in Python, system monitoring, and interactive web applications.',
    url: 'https://github.com/desaisoham0/raspberry-pi-system-monitor',
    tech: [
      'Python',
      'Raspberry Pi',
      'Streamlit',
      'OOP',
      'Plotly',
      'Pandas',
      'psutil',
      'CI/CD',
    ],
    featured: true,
    icon: 'fas fa-tachometer-alt',
    category: 'Full-Stack',
    priority: 4,
    year: 2025,
  },
  {
    title: 'Recipe Vault',
    description:
      'A full-stack web app for sharing and discovering recipes, built in 7 hours. Features secure MFA login, smart ingredient-based search powered by machine learning, and a dashboard for trending recipes. Showcases skills in Flask, SQL, user authentication, and rapid prototyping.',
    url: 'https://github.com/desaisoham0/netForge',
    tech: [
      'Python',
      'Flask',
      'SQLAlchemy',
      'scikit-learn',
      'pyotp',
      'Pandas',
      'Jinja2',
    ],
    featured: true,
    icon: 'fas fa-utensils',
    category: 'Full-Stack',
    priority: 5,
    year: 2025,
  },
  {
    title: 'AI Web Search Assistant',
    description:
      'Small terminal app that answers questions with local LLM reasoning plus fresh web snippets. It uses Ollama to run Gemma 3 locally, Brave Search for context, and Rich to render Markdown in the console.',
    url: 'https://github.com/desaisoham0/AI-Web-Search-Assistant-with-Ollama-and-Brave-Search',
    tech: ['Python', 'Ollama', 'Gemma 3', 'Brave Search API'],
    featured: false,
    icon: 'fas fa-search',
    category: 'AI/ML',
    priority: 6,
    year: 2025,
  },
  {
    title: 'Interactive Data Dashboard',
    description:
      'At Jasfel as full-stack developer, I deployed an interactive data dashboard with Plotly and Python, effectively shipping a product feature that increased operational efficiency by 25%.',
    url: '',
    tech: ['Python', 'Plotly', 'Dash', 'Data Visualization', 'Analytics'],
    featured: false,
    icon: 'fas fa-chart-line',
    category: 'Data Science',
    priority: 7,
    year: 2024,
  },
  {
    title: 'Hacker News Web Scraper',
    description:
      'An automated web scraper built with Playwright that collects, validates, and analyzes Hacker News articles. Features dynamic pagination handling, precise time parsing, and data sorting, showcasing expertise in web automation, async programming, and algorithmic verification.',
    url: 'https://github.com/desaisoham0/Hacker-News-Scraper',
    tech: ['Node.js', 'JavaScript (ES6+)', 'Playwright', 'Web Scraping'],
    featured: false,
    icon: 'fas fa-robot',
    category: 'Web Automation',
    priority: 8,
    year: 2025,
  },
  {
    title: 'AI-ML: Movie Recommendation System',
    description:
      'A sophisticated content-based movie recommendation system using machine learning algorithms and collaborative filtering.',
    url: 'https://github.com/desaisoham0/ai-ml-movie-recommender-system',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    featured: false,
    icon: 'fas fa-film',
    category: 'AI/ML',
    priority: 9,
    year: 2025,
  },
  {
    title: 'E-Commerce Platform',
    description:
      'A comprehensive e-commerce platform with product catalog, shopping cart, and payment integration.',
    url: 'https://github.com/desaisoham0/ecommerce-website',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    featured: false,
    icon: 'fas fa-shopping-cart',
    category: 'Full-Stack',
    priority: 10,
    year: 2024,
  },
  {
    title: 'Blog Web App',
    description:
      'A modern blog platform with user authentication, rich text editing, and comment system.',
    url: 'https://github.com/desaisoham0/fullstack',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    featured: false,
    icon: 'fas fa-blog',
    category: 'Full-Stack',
    priority: 11,
    year: 2023,
  },
  {
    title: 'SQL Data Optimization',
    description:
      'At Jasfel as full-stack developer, I optimized SQL Server for faster data retrieval and real-time analysis, improving query performance by 40%.',
    url: '',
    tech: ['SQL Server', 'Database Design', 'Query Optimization'],
    featured: false,
    icon: 'fas fa-database',
    category: 'Data Science',
    priority: 12,
    year: 2024,
  },
  {
    title: 'Task Manager Web App',
    description:
      'A full-stack task management application with real-time updates, user authentication, and responsive design.',
    url: 'https://github.com/desaisoham0/lumaa-spring-2025-swe',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
    featured: false,
    icon: 'fas fa-tasks',
    category: 'Full-Stack',
    priority: 13,
    year: 2024,
  },
  {
    title: 'Pomodoro Timer',
    description:
      'A productivity-focused timer application with customizable work and break intervals, statistics tracking.',
    url: 'https://github.com/desaisoham0/FocusFlow',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
    featured: false,
    icon: 'fas fa-clock',
    category: 'Frontend',
    priority: 14,
    year: 2023,
  },
  {
    title: 'Personality Quiz App',
    description:
      'An interactive iOS quiz application with dynamic questions and personalized results.',
    url: 'https://github.com/desaisoham0/PersonalityQuiz_Desai',
    tech: ['Swift', 'UIKit', 'Core Data', 'iOS'],
    featured: false,
    icon: 'fas fa-mobile-alt',
    category: 'Mobile',
    priority: 15,
    year: 2024,
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured First');

  const categories = [
    'All',
    'Full-Stack',
    'AI/ML',
    'Data Science',
    'Frontend',
    'Mobile',
    'Web Automation',
  ];

  const sortOptions = ['Featured First', 'Most Recent', 'Alphabetical'];

  const sortProjects = (projects, sortMethod) => {
    const projectsCopy = [...projects];
    switch (sortMethod) {
      case 'Featured First':
        return projectsCopy.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.priority - b.priority;
        });
      case 'Most Recent':
        return projectsCopy.sort((a, b) => {
          if (a.year !== b.year) return b.year - a.year;
          return a.priority - b.priority;
        });
      case 'Priority Order':
        return projectsCopy.sort((a, b) => a.priority - b.priority);
      case 'Alphabetical':
        return projectsCopy.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return projectsCopy;
    }
  };

  const filteredAndSortedProjects = useMemo(() => {
    const filtered =
      selectedCategory === 'All'
        ? projectsList
        : projectsList.filter(project => project.category === selectedCategory);
    return sortProjects(filtered, sortBy);
  }, [selectedCategory, sortBy]);

  const featuredProjects = filteredAndSortedProjects.filter(p => p.featured);
  const otherProjects = filteredAndSortedProjects.filter(p => !p.featured);

  return (
    <section className="space-y-12">
      <header className="text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-dinrounded mb-4 text-sky-500">
          My Projects
        </h1>
        <p className="text-lg sm:text-xl font-dinrounded text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          A comprehensive collection of my work across full-stack development,
          AI/ML, and data engineering
        </p>
      </header>

      <nav aria-label="Project filters and sorting" className="px-4">
        <div className="mx-auto max-w-6xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-600">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="w-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold font-dinrounded text-gray-700 dark:text-gray-300">
                  Filter by category
                </span>
                <span className="sr-only" role="status" aria-live="polite">
                  {selectedCategory}
                </span>
              </div>
              <div
                role="tablist"
                aria-label="Categories"
                className="flex flex-wrap gap-2"
              >
                {categories.map(category => {
                  const active = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-pressed={active}
                      onClick={() => setSelectedCategory(category)}
                      className={`cursor-pointer rounded-2xl px-4 py-2 text-sm font-medium font-dinrounded transition-all duration-200 ring-1 ring-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-800 ${
                        active
                          ? 'bg-sky-500 text-white shadow-md active:scale-95'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 active:scale-95'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="w-full lg:w-auto">
              <label className="block text-sm font-semibold font-dinrounded text-gray-700 dark:text-gray-300 mb-2">
                Sort by
              </label>
              <Listbox value={sortBy} onChange={setSortBy}>
                <div className="relative w-full lg:w-64">
                  <Listbox.Button className="cursor-pointer relative w-full rounded-2xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-dinrounded px-4 py-2 text-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-800">
                    <span className="block truncate">{sortBy}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <i
                        className="fas fa-chevron-down text-xs opacity-70"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Listbox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-2xl bg-white dark:bg-gray-800 py-2 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none">
                      {sortOptions.map(option => (
                        <Listbox.Option
                          key={option}
                          value={option}
                          className={({ active }) =>
                            `cursor-pointer select-none px-4 py-2 font-dinrounded ${
                              active
                                ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                                : 'text-gray-700 dark:text-gray-300'
                            }`
                          }
                        >
                          {({ selected }) => (
                            <div className="flex items-center justify-between">
                              <span
                                className={`truncate ${selected ? 'font-semibold' : 'font-normal'}`}
                              >
                                {option}
                              </span>
                              {selected && (
                                <i
                                  className="fas fa-check text-xs"
                                  aria-hidden="true"
                                ></i>
                              )}
                            </div>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
        </div>
      </nav>

      <div className="text-center px-4">
        <p className="text-sm font-dinrounded text-gray-600 dark:text-gray-400">
          Showing{' '}
          <span className="font-bold text-sky-500">
            {filteredAndSortedProjects.length}
          </span>{' '}
          projects
          {selectedCategory !== 'All' && (
            <span>
              {' '}
              in{' '}
              <span className="font-bold text-purple-500">
                {selectedCategory}
              </span>
            </span>
          )}
        </p>
      </div>

      {featuredProjects.length > 0 && (
        <section aria-labelledby="featured-heading" className="px-4">
          <div className="mx-auto max-w-6xl space-y-8">
            <h2
              id="featured-heading"
              className="text-xl sm:text-2xl font-bold font-dinrounded text-red-600 dark:text-red-400 mb-2 flex items-center"
            >
              <i className="fas fa-star mr-2" aria-hidden="true"></i>
              Featured Projects ({featuredProjects.length})
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
              {featuredProjects.map((project, index) => (
                <article
                  key={index}
                  className="group bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 border-2 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 border-[#b5d2e6] dark:border-[#37464f]">
                        <i
                          className={`${project.icon} text-gray-600 dark:text-gray-300 text-2xl`}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-dinrounded text-gray-900 dark:text-gray-100">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 font-dinrounded dark:text-gray-400 text-base leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="mb-6">
                      <ul className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <li
                            key={i}
                            className="px-3 py-2 text-gray-700 font-dinrounded dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 text-sm rounded-full bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        role="button"
                        aria-label={`View code for ${project.title}`}
                        className="cursor-pointer inline-flex items-center justify-center rounded-2xl px-4 py-2 font-dinrounded font-semibold text-blue-600 dark:text-blue-400 hover:text-green-600 dark:hover:text-green-400 ring-1 ring-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-800 transition-colors duration-200"
                      >
                        <i
                          className="fab fa-github mr-2 text-lg"
                          aria-hidden="true"
                        ></i>
                        <span>View Code</span>
                        <i
                          className="fas fa-external-link-alt ml-2 text-xs"
                          aria-hidden="true"
                        ></i>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section aria-labelledby="other-heading" className="px-4">
          <div className="mx-auto max-w-6xl space-y-8">
            <h2
              id="other-heading"
              className="text-xl sm:text-2xl font-bold font-dinrounded text-purple-600 dark:text-purple-400 mb-2 flex items-center"
            >
              <i className="fas fa-code mr-2" aria-hidden="true"></i>
              Other Projects ({otherProjects.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {otherProjects.map((project, index) => (
                <article
                  key={index}
                  className="group bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col h-full">
                    <div className="w-16 h-16 border-2 rounded-2xl flex items-center justify-center mb-6 mx-auto border-[#b5d2e6] dark:border-[#37464f]">
                      <i
                        className={`${project.icon} text-gray-600 dark:text-gray-300 text-2xl`}
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="flex-1 flex flex-col text-center">
                      <h3 className="text-lg font-bold font-dinrounded text-gray-900 dark:text-gray-100 mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 font-dinrounded dark:text-gray-400 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="mb-6">
                        <ul className="flex flex-wrap gap-2 justify-center">
                          {project.tech.slice(0, 3).map((tech, i) => (
                            <li
                              key={i}
                              className="px-3 py-1 font-dinrounded text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 text-xs rounded-full bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                            >
                              {tech}
                            </li>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="px-3 py-1 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 text-xs rounded-full bg-gray-50 dark:bg-gray-700">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </ul>
                      </div>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          role="button"
                          aria-label={`View code for ${project.title}`}
                          className="cursor-pointer inline-flex items-center justify-center rounded-2xl px-3 py-2 font-dinrounded font-semibold text-blue-600 dark:text-blue-400 hover:text-green-600 dark:hover:text-green-400 ring-1 ring-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-800 transition-colors duration-200"
                        >
                          <i
                            className="fab fa-github mr-2 text-lg"
                            aria-hidden="true"
                          ></i>
                          <span className="text-sm">View Code</span>
                          <i
                            className="fas fa-external-link-alt ml-2 text-xs"
                            aria-hidden="true"
                          ></i>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {filteredAndSortedProjects.length === 0 && (
        <section className="text-center py-12 px-4">
          <i
            className="fas fa-search text-4xl text-gray-400 dark:text-gray-600 mb-4"
            aria-hidden="true"
          ></i>
          <h3 className="text-xl font-bold font-dinrounded text-gray-600 dark:text-gray-400 mb-2">
            No projects found
          </h3>
          <p className="text-gray-500 dark:text-gray-500 font-dinrounded">
            Try adjusting your filters to see more projects.
          </p>
        </section>
      )}
    </section>
  );
};

export default Projects;
