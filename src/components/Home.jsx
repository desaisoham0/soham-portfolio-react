import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Example images
import pomodorotimer from '../assets/pomodorotimer.jpg';
import athletic from '../assets/athletic.jpg';
import fullstack from '../assets/fullstack.jpg';
import IOS from '../assets/IOS.jpg';
import sql from '../assets/sql.jpg';
import AI from '../assets/AI.jpg';
import Task from '../assets/task.jpg';

const projectsList = [
  {
    title: "Task Manager Web App",
    image: Task,
    description: "A full-stack with React, Node.js, Express, JWT and PostgreSQL",
    url: "https://github.com/desaisoham0/lumaa-spring-2025-swe",
  },
  {
    title: "AI-ML: Movie Recommendation System",
    image: AI,
    description: "A simple content-based movie recommendation system using ML.",
    url: "https://github.com/desaisoham0/lumaa-spring-2025-ai-ml",
  },
  {
    title: "E-Commerce Platform",
    image: athletic,
    description: "A PHP-based fullstack e-commerce site"
  },
  {
    title: "SQL Data Optimization",
    image: sql,
    description: "Optimized SQL Server for faster data retrieval and real-time analysis."
  },
  {
    title: "Blog Web App",
    image: fullstack,
    description: "A full-stack with React, Node.js, and MongoDB"
  },
  {
    title: "Pomodoro timer",
    image: pomodorotimer,
    description: "Pomodoro timer with customizable work and break intervals"
  },
  {
    title: "Personality Quiz App",
    image: IOS,
    description: "An iOS quiz app built with Swift and UIKit"
  }
];

const Home = () => {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev === projectsList.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextProject = () =>
    setCurrentProject((prev) => (prev === projectsList.length - 1 ? 0 : prev + 1));
  const prevProject = () =>
    setCurrentProject((prev) => (prev === 0 ? projectsList.length - 1 : prev - 1));

  // Figure out which are prev/current/next
  const prevIndex = (currentProject - 1 + projectsList.length) % projectsList.length;
  const nextIndex = (currentProject + 1) % projectsList.length;

  return (
    <div className="Parent">
      {/* Intro */}
      <div className="flex justify-center item-center sm:text-left">
        <p className="text-basic text-zinc-700 text-sm sm:text-base md:text-lg lg:text-xl mb-4">
          Hi, I'm Soham — a NYC-based Software Engineer and Entrepreneur crafting powerful
          full-stack websites to elevate local businesses and empower people to thrive on
          their own terms.
        </p>
      </div>

      {/* School */}
      <div className="rounded-2xl shadow-md border border-zinc-100 p-3 sm:p-4 md:p-6 mb-6 
                      hover:shadow-md transition-all duration-300 sm:hover:scale-[1.02]">
        <h2 className="text-md text-black font-medium mb-3 sm:mb-4 flex items-center gap-2">
          <i className="fa-solid fa-school"></i> School
        </h2>
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:justify-between text-sm gap-1">
            <p>RUTGERS UNIVERSITY, NEWARK, NJ</p>
            <p className="text-gray-500">May 2025</p>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="rounded-2xl shadow-md border border-zinc-100 p-3 sm:p-4 md:p-6">
        <h2 className="text-md text-black font-medium mb-3 sm:mb-4 flex items-center gap-2">
          <i className="fa-solid fa-laptop-code"></i> Projects
        </h2>

        {/* Stacked Carousel Container */}
        <div className="relative w-full h-64 sm:h-72 mb-4 flex items-center justify-center overflow-hidden group">
          {/* Prev Image */}
          <img
            src={projectsList[prevIndex].image}
            alt="prev"
            className="
              absolute left-2 sm:left-8 
              w-1/3 sm:w-1/4 
              rounded-xl shadow-md 
              transform rotate-[3deg] 
              transition-all duration-500 ease-in-out
            "
          />
          {/* Current Image */}
          <img
            key={currentProject} 
            src={projectsList[currentProject].image}
            alt="current"
            className="
              z-10
              w-1/2 sm:w-1/3 
              rounded-xl shadow-2xl 
              transform rotate-[-3deg] 
              transition-all duration-500 ease-in-out
            "
          />
          {/* Next Image */}
          <img
            src={projectsList[nextIndex].image}
            alt="next"
            className="
              absolute right-2 sm:right-8 
              w-1/3 sm:w-1/4 
              rounded-xl shadow-md
              transform rotate-[3deg] 
              transition-all duration-500 ease-in-out
            "
          />

          {/* Desktop Nav */}
          <button
            onClick={prevProject}
            className="absolute left-0 sm:left-0 top-1/2 -translate-y-1/2 
                     text-gray-800 
                       p-1.5 sm:p-2.5 rounded-full 
                       opacity-0 group-hover:opacity-100 
                       transition-opacity hover:bg-white/90 hover:text-yellow-600
                       shadow-sm hidden sm:block
                       ring-1 ring-white/10"
          >
            <i className="fas fa-chevron-left text-sm sm:text-base"></i>
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 sm:right-0 top-1/2 -translate-y-1/2 
                       text-gray-800 
                       p-1.5 sm:p-2.5 rounded-full 
                       opacity-0 group-hover:opacity-100 
                       transition-opacity hover:bg-white/90 hover:text-yellow-600
                       shadow-sm hidden sm:block
                       ring-1 ring-white/10"
          >
            <i className="fas fa-chevron-right text-sm sm:text-base"></i>
          </button>
        </div>

        {/* Current Title & Description */}
        <div className="text-center mb-2">
          <h3 className="font-medium text-zinc-800 text-sm sm:text-base">
            {projectsList[currentProject].title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600">
            {projectsList[currentProject].description}
          </p>
        </div>

        {/* Mobile Nav */}
        <div className="flex justify-center gap-4 sm:hidden">
          <button
            onClick={prevProject}
            className="text-gray-800 p-2 rounded-full shadow-md ring-1 ring-white/10"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextProject}
            className="text-gray-800 p-2 rounded-full shadow-md ring-1 ring-white/10"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* View All Projects */}
        <div className="flex justify-center mt-4 sm:mt-6">
          <Link
            to="/projects"
            className="group relative z-10 inline-flex items-center 
                       px-4 sm:px-5 py-2 sm:py-2.5 
                       text-xs sm:text-sm text-zinc-700 font-medium 
                       rounded-3xl shadow-md 
                       transition-all duration-300
                       hover:text-yellow-600 hover:bg-white/70
                       hover:shadow-lg"
          >
            <i
              className="fa-solid fa-link mr-2 transition-transform duration-300 
                         group-hover:translate-x-1"
            ></i>
            View all projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
