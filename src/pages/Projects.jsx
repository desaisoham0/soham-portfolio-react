// Import images
import pomodorotimer from '../assets/pomodorotimer.jpg';
import athletic from '../assets/athletic.jpg';
import fullstack from '../assets/fullstack.jpg';
import IOS from '../assets/IOS.jpg';
import sql from '../assets/sql.jpg';

const projectsList = [
  {
    title: "E-Commerce Platform",
    image: athletic,
    description: "A PHP-based fullstack e-commerce site",
    url: "https://github.com/desaisoham0/ecommerce-website",
  },
  {
    title: "Blog Web App",
    image: fullstack,
    description: "A full-stack with React, Node.js, Express, and MongoDB",
    url: "https://github.com/desaisoham0/fullstack",
  },
  {
    title: "Task Manager Web App",
    description: "A full-stack with React, Node.js, Express, JWT and PostgreSQL",
    url: "https://github.com/desaisoham0/lumaa-spring-2025-swe",
  },
  {
    title: "AI-ML: Movie Recommendation System",
    description: "A simple content-based movie recommendation system using ML.",
    url: "https://github.com/desaisoham0/lumaa-spring-2025-ai-ml",
  },
  {
    title: "SQL Data Optimization",
    image: sql,
    description: "Optimized SQL Server for faster data retrieval and real-time analysis.",
    url: "",
  },
  {
    title: "Pomodoro Timer",
    image: pomodorotimer,
    description: "Pomodoro timer with customizable work and break intervals",
    url: "https://github.com/desaisoham0/FocusFlow",
  },
  {
    title: "Personality Quiz App",
    image: IOS,
    description: "An iOS quiz app built with Swift and UIKit",
    url: "https://github.com/desaisoham0/PersonalityQuiz_Desai",
  },
];

const Projects = () => {
  return (
    <div className="from-teal-700 to-teal-900">
      <div className="max-w-7xl mx-auto px-4">
        <main className="py-8">
          {/* Header Section */}
          <div className="bg-white/85 rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 mb-8">
            <header className="max-w-2xl lg:max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                Things I've made trying to put my dent in the universe.
              </h1>
              <p className="mt-6 text-base text-zinc-600">
                I've worked on tons of little projects over the years, but these are the ones 
                that I'm most proud of. Many of them are open-source, so if something piques 
                your interest, check out the code and contribute if you have ideas for 
                improvements.
              </p>
            </header>

            {/* Projects Section */}
            <ul className="grid grid-cols-1 gap-y-12 gap-x-16 sm:grid-cols-2 lg:grid-cols-3 mt-10">
              {projectsList.map((project, index) => (
                <li
                  key={index}
                  className="
                    group relative flex flex-col items-start p-4 
                    rounded-xl
                    cursor-pointer 
                    transition-transform duration-300 ease-in-out 
                    hover:scale-105 hover:shadow-lg hover:bg-white/70
                  "
                >
                  {/* Project Image */}
                  <div 
                    className="
                      relative z-10 flex h-12 w-12 items-center justify-center 
                      rounded-full bg-white shadow-sm 
                      ring-1 ring-zinc-900/5
                    "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-12 w-12 rounded-full object-cover
                      "
                    />
                  </div>

                  {/* Project Title */}
                  <h2 
                    className="
                      mt-6 text-lg font-semibold text-zinc-900 
                      group-hover:text-zinc-600
                    "
                  >
                    {project.title}
                  </h2>

                  {/* Project Description */}
                  <p 
                    className="
                      relative z-10 mt-2 text-sm text-zinc-700 
                      group-hover:text-zinc-500
                    "
                  >
                    {project.description}
                  </p>

                  {/* GitHub Link */}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        relative z-10 mt-6 flex items-center text-sm font-medium 
                        text-zinc-500 
                        transition-colors duration-300
                        group-hover:text-yellow-500
                      "
                    >
                      <i
                        className="
                          fa-solid fa-link mr-2 
                          transition-transform duration-300 
                          group-hover:translate-x-1
                        "
                      ></i>
                      github.com
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
