import React from 'react';
// Import images
import pomodorotimer from '../assets/pomodorotimer.jpg';
import athletic from '../assets/athletic.jpg';
import fullstack from '../assets/fullstack.jpg';
import IOS from '../assets/IOS.jpg';
import sql from '../assets/sql.jpg';
import AI from '../assets/AI.jpg';
import Task from '../assets/task.jpg';
import Kailani from '../assets/kilani.jpg';
import Scrapper from '../assets/scrapper.jpg';

const projectsList = [
  {
    title: 'Restaurant Fullstack Application',
    image: Kailani,
    description:
      'Developed and successfully sold a responsive full-stack web application to Kailani Shave & Ice. Built with React 19, TypeScript, Tailwind CSS, and Firebase with optimized serverless backend using Vercel Functions',
    url: 'https://github.com/desaisoham0/kailani',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Vercel'],
    featured: true,
  },
  {
    title: 'AI Alumni Scraper',
    image: Scrapper,
    description:
      'Project-managed a 4-member capstone combining Flask API, Tailwind UI, and fuzzy-matching pipeline. Parallelized searches with ThreadPoolExecutor reducing lookup time by 50%+.',
    url: 'https://github.com/desaisoham0/cssproto1',
    tech: ['Flask', 'Python', 'Tailwind CSS', 'Machine Learning'],
    featured: true,
  },
  {
    title: 'Task Manager Web App',
    image: Task,
    description:
      'A full-stack task management application with real-time updates, user authentication, and responsive design.',
    url: 'https://github.com/desaisoham0/lumaa-spring-2025-swe',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
    featured: false,
  },
  {
    title: 'AI-ML: Movie Recommendation System',
    image: AI,
    description:
      'A sophisticated content-based movie recommendation system using machine learning algorithms and collaborative filtering.',
    url: 'https://github.com/desaisoham0/lumaa-spring-2025-ai-ml',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    featured: false,
  },
  {
    title: 'E-Commerce Platform',
    image: athletic,
    description:
      'A comprehensive e-commerce platform with product catalog, shopping cart, and payment integration.',
    url: 'https://github.com/desaisoham0/ecommerce-website',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    featured: false,
  },
  {
    title: 'Blog Web App',
    image: fullstack,
    description:
      'A modern blog platform with user authentication, rich text editing, and comment system.',
    url: 'https://github.com/desaisoham0/fullstack',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    featured: false,
  },
  {
    title: 'SQL Data Optimization',
    image: sql,
    description:
      'Optimized SQL Server for faster data retrieval and real-time analysis, improving query performance by 40%.',
    url: '',
    tech: ['SQL Server', 'Database Design', 'Query Optimization'],
    featured: false,
  },
  {
    title: 'Pomodoro Timer',
    image: pomodorotimer,
    description:
      'A productivity-focused timer application with customizable work and break intervals, statistics tracking.',
    url: 'https://github.com/desaisoham0/FocusFlow',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
    featured: false,
  },
  {
    title: 'Personality Quiz App',
    image: IOS,
    description:
      'An interactive iOS quiz application with dynamic questions and personalized results.',
    url: 'https://github.com/desaisoham0/PersonalityQuiz_Desai',
    tech: ['Swift', 'UIKit', 'Core Data', 'iOS'],
    featured: false,
  },
];

const Projects = () => {
  const featuredProjects = projectsList.filter(project => project.featured);
  const otherProjects = projectsList.filter(project => !project.featured);

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#000437] dark:text-[#dce6ec] mb-4">
          My Projects
        </h1>
        <p className="text-xl text-[#000437]/80 dark:text-[#dce6ec]/80 max-w-2xl mx-auto">
          A comprehensive collection of my work across full-stack development,
          AI/ML, and data engineering
        </p>
      </div>

      {/* Featured Projects */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-[#ea2b2b] mb-6 flex items-center">
          <i className="fas fa-star mr-2"></i>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#b5d2e6]/40 dark:bg-[#37464f]/40 backdrop-blur-sm rounded-xl p-6 "
            >
              <div className="flex flex-col h-full">
                {/* Project Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-[#000437] dark:text-[#dce6ec] mb-2 ">
                    {project.title}
                  </h3>
                  <p className="text-[#000437]/80 dark:text-[#dce6ec]/80 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-[#000437] dark:text-[#dce6ec] border-2 border-[#b5d2e6] dark:border-[#37464f] text-xs rounded-full"
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
                      className="inline-flex items-center font-bold text-[#1899d6] hover:text-[#2EA44F] dark:hover:text-[#2EA44F] transition-colors duration-300"
                    >
                      <i className="fab fa-github mr-2 text-xl"></i>
                      <span className="text-md">View Code</span>
                      <i className="fas fa-external-link-alt ml-2 text-sm"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-[#a568cc] mb-6 flex items-center">
          <i className="fas fa-code mr-2"></i>
          Other Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#b5d2e6]/40 dark:bg-[#37464f]/40 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="flex flex-col h-full">
                {/* Project Icon */}
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-[#000437] dark:text-[#dce6ec] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#000437]/80 dark:text-[#dce6ec]/80 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-[#000437] dark:text-[#dce6ec] border-2 border-[#b5d2e6] dark:border-[#37464f] text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-[#000437] dark:text-[#dce6ec] border-2 border-[#b5d2e6] dark:border-[#37464f] text-xs rounded-full">
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
                      className="inline-flex items-center font-bold text-[#1899d6] hover:text-[#2EA44F] dark:hover:text-[#2EA44F] transition-colors duration-300"
                    >
                      <i className="fab fa-github mr-2 text-xl"></i>
                      <span className="text-md">View Code</span>
                      <i className="fas fa-external-link-alt ml-2 text-sm"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
