import React from 'react';

const Resume = () => {
  // Resume data structured for maintainability
  const resumeData = {
    name: 'SOHAM DESAI',
    contact: {
      email: 'desaiso@gmail.com',
      linkedin: 'https://www.linkedin.com/in/soham-desai-068952212/',
      github: 'https://github.com/desaisoham0',
      portfolio: 'https://www.sohamdesai.dev/',
    },
    education: {
      university: 'Rutgers University',
      location: 'Newark, NJ',
      degree: 'B.A. in Computer Science with a Minor in Mathematics',
      duration: 'Aug 2023 - May 2025',
      coursework:
        'Advance Data Structure and Algorithms, Software Engineering, Operating System, iOS Development, Machine Learning, Programming Language Concept, Calculus III, Differential Equations, Linear Algebra, Numerical Analysis',
    },
    experience: [
      {
        company: 'Jasfel Analytics LLC',
        role: 'Full-Stack Engineer, Intern',
        duration: 'July 2024 - Oct 2024',
        location: 'Newark, NJ',
        achievements: [
          'Optimized a SQL Server Data Warehouse, reducing data retrieval time by 30% and enabling real-time analysis while monitoring system performance.',
          'Deployed an interactive data dashboard with Plotly and Python, effectively shipping a product feature that increased operational efficiency by 25%.',
        ],
      },
      {
        company: '4-H Youth Development Program',
        role: 'Educator',
        duration: 'Sep 2024 - May 2025',
        location: 'Newark, NJ',
        achievements: [
          "Taught Apple CEL's Everyone Can Code and Swift Playground to 25+ middle school students, guiding them through initial iOS app development and boosting coding enrollment by 30%.",
          'Led weekly Swift Playground classes and immersive STEM workshops, fostering collaborative problem-solving and critical thinking skills among students.',
        ],
      },
      {
        company: 'T3 Creators Collective',
        role: 'AI/AR Instructor',
        duration: 'July 2024 - May 2025',
        location: 'Irvington, NJ',
        achievements: [
          "Developed the program's final project using an open-source Hugging Face model to create tools like a chatbot, image generator, video generator, and object detector, showcasing practical AI applications and enhancing the program's educational value.",
          'Trained educators on implementing these advanced AI solutions, empowering them to integrate emerging technologies into school curricula effectively.',
        ],
      },
      {
        company: 'CodePath',
        role: 'Tech Fellow',
        duration: 'May 2024 - Dec 2024',
        location: 'Remote',
        achievements: [
          'Mentored and coached over 20 students in technical interview preparation, improving comprehension of key data structures and algorithms, with 75% of participants achieving job or internship offers post-course completion.',
        ],
      },
    ],
    projects: [
      {
        title: 'Restaurant Fullstack Application',
        year: '2025',
        github: 'https://github.com/desaisoham0/kailani',
        demo: 'https://kailani-mauve.vercel.app/',
        description:
          'Developed and successfully sold a responsive, full-stack web application to Kailani Shave & Ice, built using React 19, TypeScript, Tailwind CSS, and Firebase; implemented an optimized serverless backend with Vercel Functions, real-time Firestore caching, performance enhancements through code splitting and custom hooks, and secured admin functionalities via Firebase Authentication. Integrated GitHub Actions CI/CD pipeline to automated testing, linting, and deployment.',
      },
      {
        title: 'Rutgers Alumni LinkedIn Scraper',
        year: '2025',
        github: 'https://github.com/desaisoham0/cssproto1',
        description:
          'Led and managed a full-stack project with a 4-member team, integrating a Flask API backend, Tailwind CSS frontend, and a fuzzy-matching pipeline using cosine similarity. Optimized performance by parallelizing search tasks with ThreadPoolExecutor, reducing lookup time by over 50%. Implemented SerpAPI with Bing fallback for reliability, added real-time progress tracking, and enabled CSV export of Rutgers alumni LinkedIn matches with estimated salary and location data',
      },
      {
        title: 'Gemma3n',
        year: '2025',
        github: 'https://github.com/desaisoham0/Gemma3n',
        description:
          "Developed an offline-first, privacy-focused chat application leveraging Google's Gemma 3n LLM model via Ollama. Built a clean, responsive interface using React, TypeScript, and Tailwind CSS. Implemented client-side persistence using SQLite and localStorage to securely store chat histories locally. Designed the system for easy integration with multiple LLMs, allowing seamless model switching.",
      },
      {
        title: 'Straggling Recipes',
        year: '2025',
        github: 'https://github.com/desaisoham0/netForge',
        description:
          'Built in a 7-hour hackathon by a 4-person team, my contribution was building full-stack, crafting both the Tailwind frontend and Flask backend, devising the ML ingredient-matching logic, and deploying the app to a Raspberry Pi for 24/7 access. Features include MFA-secured login, like/save favorites, and filters by popularity or dietary preference.',
      },
      {
        title: 'E-Commerce Website',
        year: '2024',
        github: 'https://github.com/desaisoham0/ecommerce-website.git',
        demo: 'https://athletics-store.great-site.net/',
        description:
          'Developed and deployed a full-stack e-commerce platform using PHP and XAMPP, integrating user authentication, shopping cart functionality, PHPMailer-driven email notifications, and a responsive Bootstrap UI.',
      },
    ],
    skills: [
      'Python',
      'JavaScript',
      'React',
      'Express',
      'Node.js',
      'SQL',
      'C++',
      'TypeScript',
      'Swift',
      'HTML',
      'CSS',
      'PHP',
      'Tailwind CSS',
      'Firebase',
      'MongoDB',
    ],
    certifications: [
      {
        title: 'Full-Stack Web Application Project',
        url: 'https://www.linkedin.com/learning/certificates/1b771b6d712542b69a72a0c09462271bfe8bcfcb0c979015e0c6ad0d2b953bfc?u=76115650',
      },
      {
        title: 'Software Development Life Cycle',
        url: 'https://www.linkedin.com/learning/certificates/c076a4f70b4aca7e33d952ab6330acd91b3faadc5ecff75e6f12cd655bdb5552?trk=share_certificate',
      },
      {
        title: 'HackerRank Problem Solving (Basic)',
        url: 'https://www.hackerrank.com/certificates/b75e6f87d42e',
      },
      {
        title: 'Python Essential Training',
        url: 'https://www.linkedin.com/learning/certificates/a0dd2ded9a7922ca217d3721c60073a336fb50b26f35bf1608342c1d1e66e91f?u=76115650',
      },
      {
        title: 'Advanced Technical Interview Prep',
        url: 'http://www.codepath.org',
      },
      {
        title: 'Responsive Web Design',
        url: 'https://www.freecodecamp.org/certification/desaisoham98/responsive-web-design',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-4 print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto space-y-8 print:space-y-6">
        {/* Header Section */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border-2 border-blue-200 dark:border-blue-700 print:shadow-none print:border print:border-gray-300">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-dinrounded text-blue-600 dark:text-blue-400 mb-4 print:text-4xl print:text-black">
              {resumeData.name}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full print:bg-gray-400"></div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <i className="fas fa-envelope text-blue-500 dark:text-blue-400 print:text-black"></i>
                <a
                  href={`mailto:${resumeData.contact.email}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-dinrounded transition-colors print:text-black print:no-underline"
                >
                  {resumeData.contact.email}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <i className="fab fa-linkedin text-blue-500 dark:text-blue-400 print:text-black"></i>
                <a
                  href={resumeData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-dinrounded transition-colors print:text-black print:no-underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <i className="fab fa-github text-blue-500 dark:text-blue-400 print:text-black"></i>
                <a
                  href={resumeData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-dinrounded transition-colors print:text-black print:no-underline"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <i className="fas fa-globe text-blue-500 dark:text-blue-400 print:text-black"></i>
                <a
                  href={resumeData.contact.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-dinrounded transition-colors print:text-black print:no-underline"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border-2 border-green-200 dark:border-green-700 print:shadow-none print:border print:border-gray-300">
          <h2 className="text-2xl md:text-3xl font-bold font-dinrounded text-green-600 dark:text-green-400 mb-6 flex items-center print:text-black">
            <i className="fas fa-graduation-cap mr-3 print:text-black"></i>
            EDUCATION
          </h2>
          <div className="border-l-4 border-green-500 dark:border-green-400 pl-6 print:border-gray-400">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold font-dinrounded text-gray-900 dark:text-gray-100 print:text-black">
                  {resumeData.education.university}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-dinrounded print:text-black">
                  {resumeData.education.location}
                </p>
              </div>
              <span className="text-green-600 dark:text-green-400 font-semibold font-dinrounded mt-2 md:mt-0 print:text-black">
                {resumeData.education.duration}
              </span>
            </div>
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 font-dinrounded print:text-black">
              {resumeData.education.degree}
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 print:bg-gray-50">
              <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-2 font-dinrounded print:text-black">
                CourseWork:
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-dinrounded print:text-black">
                {resumeData.education.coursework}
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border-2 border-purple-200 dark:border-purple-700 print:shadow-none print:border print:border-gray-300">
          <h2 className="text-2xl md:text-3xl font-bold font-dinrounded text-purple-600 dark:text-purple-400 mb-6 flex items-center print:text-black">
            <i className="fas fa-briefcase mr-3 print:text-black"></i>
            EXPERIENCE
          </h2>
          <div className="space-y-6">
            {resumeData.experience.map(job => (
              <div
                key={job.company}
                className="border-l-4 border-purple-500 dark:border-purple-400 pl-6 print:border-gray-400"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold font-dinrounded text-gray-900 dark:text-gray-100 print:text-black">
                      {job.company}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold font-dinrounded print:text-black">
                      {job.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-dinrounded print:text-black">
                      {job.location}
                    </p>
                  </div>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold font-dinrounded mt-2 md:mt-0 print:text-black">
                    {job.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map(achievement => (
                    <li key={achievement} className="flex items-start gap-3">
                      <span className="text-purple-500 dark:text-purple-400 mt-1 print:text-black">
                        •
                      </span>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-dinrounded print:text-black">
                        {achievement}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border-2 border-orange-200 dark:border-orange-700 print:shadow-none print:border print:border-gray-300">
          <h2 className="text-2xl md:text-3xl font-bold font-dinrounded text-orange-600 dark:text-orange-400 mb-6 flex items-center print:text-black">
            <i className="fas fa-code mr-3 print:text-black"></i>
            PERSONAL PROJECTS
          </h2>
          <div className="space-y-6">
            {resumeData.projects.map(project => (
              <div
                key={project.title}
                className="border-l-4 border-orange-500 dark:border-orange-400 pl-6 print:border-gray-400"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold font-dinrounded text-gray-900 dark:text-gray-100 print:text-black">
                      {project.title} ({project.year})
                    </h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-dinrounded text-sm transition-colors print:text-black print:no-underline"
                      >
                        <i className="fab fa-github mr-1"></i>
                        GitHub
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-dinrounded text-sm transition-colors print:text-black print:no-underline"
                        >
                          <i className="fas fa-external-link-alt mr-1"></i>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-dinrounded print:text-black">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Certifications Section */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border-2 border-red-200 dark:border-red-700 print:shadow-none print:border print:border-gray-300">
          <h2 className="text-2xl md:text-3xl font-bold font-dinrounded text-red-600 dark:text-red-400 mb-6 flex items-center print:text-black">
            <i className="fas fa-award mr-3 print:text-black"></i>
            SKILLS & CERTIFICATIONS
          </h2>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-bold font-dinrounded text-gray-900 dark:text-gray-100 mb-4 print:text-black">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm font-dinrounded print:bg-gray-100 print:text-black print:border print:border-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-bold font-dinrounded text-gray-900 dark:text-gray-100 mb-4 print:text-black">
              Certifications
            </h3>
            <ul className="space-y-2">
              {resumeData.certifications.map(cert => (
                <li key={cert.title} className="flex items-start gap-3">
                  <span className="text-red-500 dark:text-red-400 mt-1 print:text-black">
                    •
                  </span>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-dinrounded text-sm transition-colors print:text-black print:no-underline"
                  >
                    {cert.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Print Button */}
        <div className="text-center print:hidden">
          <button
            onClick={() => window.print()}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-dinrounded font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            <i className="fas fa-print mr-2"></i>
            Print Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
