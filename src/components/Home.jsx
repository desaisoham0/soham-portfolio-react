import React from 'react';

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Welcome to My Portfolio
        </h2>
        <p className="text-lg text-white/90 leading-relaxed max-w-4xl mx-auto">
          Hi, I'm Soham Desai — a NYC-based Software Engineer and Entrepreneur
          crafting powerful full-stack websites to elevate local businesses and
          empower people to thrive on their own terms.
        </p>
        <p className="text-white/80 mt-4 text-lg">
          Ready to build something amazing together?
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
          <div className="text-white/90">Projects Completed</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
          <div className="text-white/90">Technologies Mastered</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-yellow-400 mb-2">2+</div>
          <div className="text-white/90">Years Experience</div>
        </div>
      </div>

      {/* Education */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
        <h3 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center">
          <i className="fa-solid fa-graduation-cap mr-2"></i>
          Education
        </h3>
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
          <div>
            <p className="text-white font-medium">
              Rutgers University, Newark, NJ
            </p>
            <p className="text-white/80 text-sm">
              Bachelor of Science in Computer Science
            </p>
          </div>
          <p className="text-white/70 text-sm mt-2 sm:mt-0">May 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
