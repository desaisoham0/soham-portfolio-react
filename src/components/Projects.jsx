import React, { useState, useMemo } from 'react';

const projectsList = [
  {
    title: 'Gemma 3n Chat – talk to an LLM right in your browser',
    description:
      'LLM chat app that runs Google’s Gemma 3n or any Ollama model, fully offline on your machine. No internet, no accounts. Every conversation stays private, stored in your browser with sql.js and localStorage.',
    url: 'https://github.com/desaisoham0/Gemma3n',
    tech: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'sql.js',
      'Gemma 3n',
      'Ollama',
    ],
    featured: true,
    icon: 'fas fa-comment-dots',
    category: 'AI/ML',
    priority: 1,
    year: 2025,
  },
  {
    title: 'Restaurant Fullstack Application',
    description:
      'Developed and successfully sold a responsive full-stack web application to Kailani Shave & Ice. Built with React 19, TypeScript, Tailwind CSS, and Firebase with optimized serverless backend using Vercel Functions',
    url: 'https://github.com/desaisoham0/kailani',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Vercel'],
    featured: true,
    icon: 'fas fa-utensils',
    category: 'Full-Stack',
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
    title: 'Interactive Data Dashboard',
    description:
      'At Jasfel as full-stack developer, I deployed an interactive data dashboard with Plotly and Python, effectively shipping a product feature that increased operational efficiency by 25%.',
    url: '',
    tech: ['Python', 'Plotly', 'Dash', 'Data Visualization', 'Analytics'],
    featured: false,
    icon: 'fas fa-chart-line',
    category: 'Data Science',
    priority: 6,
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
    priority: 7,
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
    priority: 8,
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
    priority: 9,
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
    priority: 10,
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
    priority: 11,
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
    priority: 12,
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
    priority: 13,
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
    priority: 14,
    year: 2024,
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured First');

  // Define filter categories
  const categories = [
    'All',
    'Full-Stack',
    'AI/ML',
    'Data Science',
    'Frontend',
    'Mobile',
    'Web Automation',
  ];

  // Define sorting options
  const sortOptions = [
    'Featured First',
    'Most Recent',
    'Priority Order',
    'Alphabetical',
  ];

  // Advanced sorting algorithm
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

  // Filter and sort projects using useMemo for performance
  const filteredAndSortedProjects = useMemo(() => {
    const filtered =
      selectedCategory === 'All'
        ? projectsList
        : projectsList.filter(project => project.category === selectedCategory);

    return sortProjects(filtered, sortBy);
  }, [selectedCategory, sortBy]);

  const featuredProjects = filteredAndSortedProjects.filter(
    project => project.featured
  );
  const otherProjects = filteredAndSortedProjects.filter(
    project => !project.featured
  );

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-dinrounded mb-4 text-sky-500">
          My Projects
        </h1>
        <p className="text-lg sm:text-xl font-dinrounded text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          A comprehensive collection of my work across full-stack development,
          AI/ML, and data engineering
        </p>
      </div>

      {/* Filter and Sort Controls */}
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-600">
        {/* Category Filters */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="text-sm font-semibold font-dinrounded text-gray-700 dark:text-gray-300 whitespace-nowrap">
            Filter by Category:
          </span>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium font-dinrounded transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-sky-500 text-white shadow-md transform scale-105'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="text-sm font-semibold font-dinrounded text-gray-700 dark:text-gray-300 whitespace-nowrap">
            Sort by:
          </span>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-dinrounded focus:outline-none focus:border-sky-500 transition-colors duration-200"
          >
            {sortOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Project Count Display */}
      <div className="text-center">
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

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold font-dinrounded text-red-600 dark:text-red-400 mb-6 flex items-center">
            <i className="fas fa-star mr-2"></i>
            Featured Projects ({featuredProjects.length})
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  {/* Project Icon */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 border-2 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 border-[#b5d2e6] dark:border-[#37464f]">
                      <i
                        className={`${project.icon} text-gray-600 dark:text-gray-300 text-2xl`}
                      ></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-dinrounded text-gray-900 dark:text-gray-100">
                      {project.title}
                    </h3>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 flex flex-col">
                    <p className="text-gray-600 font-dinrounded dark:text-gray-400 text-base leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-2 text-gray-700 font-dinrounded dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 text-sm rounded-full bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* GitHub Link */}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-bold text-blue-600 dark:text-blue-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 text-base"
                      >
                        <i className="fab fa-github mr-3 text-xl"></i>
                        <span>View Code</span>
                        <i className="fas fa-external-link-alt ml-3 text-sm"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div className="space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold font-dinrounded text-purple-600 dark:text-purple-400 mb-6 flex items-center">
            <i className="fas fa-code mr-2"></i>
            Other Projects ({otherProjects.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-600 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  {/* Project Icon */}
                  <div className="w-16 h-16 border-2 rounded-xl flex items-center justify-center mb-6 mx-auto border-[#b5d2e6] dark:border-[#37464f]">
                    <i
                      className={`${project.icon} text-gray-600 dark:text-gray-300 text-2xl`}
                    ></i>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 flex flex-col text-center">
                    <h3 className="text-lg font-bold font-dinrounded text-gray-900 dark:text-gray-100 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 font-dinrounded dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 font-dinrounded text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 text-xs rounded-full bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-3 py-1 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 text-xs rounded-full bg-gray-50 dark:bg-gray-700">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* GitHub Link */}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center font-dinrounded font-bold text-blue-600 dark:text-blue-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                      >
                        <i className="fab fa-github mr-2 text-lg"></i>
                        <span className="text-sm">View Code</span>
                        <i className="fas fa-external-link-alt ml-2 text-xs"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredAndSortedProjects.length === 0 && (
        <div className="text-center py-12">
          <i className="fas fa-search text-4xl text-gray-400 dark:text-gray-600 mb-4"></i>
          <h3 className="text-xl font-bold font-dinrounded text-gray-600 dark:text-gray-400 mb-2">
            No projects found
          </h3>
          <p className="text-gray-500 dark:text-gray-500 font-dinrounded">
            Try adjusting your filters to see more projects.
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;
