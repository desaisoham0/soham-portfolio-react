import React from 'react';

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-[#b5d2e6]/60 dark:bg-[#37464f]/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-[#58a700] mb-2">
            12+
          </div>
          <div className="text-[#000437] dark:text-[#dce6ec] text-sm sm:text-base">
            Projects Completed
          </div>
        </div>
        <div className="bg-[#b5d2e6]/60 dark:bg-[#37464f]/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-[#58a700] mb-2">
            5+
          </div>
          <div className="text-[#000437] dark:text-[#dce6ec] text-sm sm:text-base">
            Technologies Mastered
          </div>
        </div>
        <div className="bg-[#b5d2e6]/60 dark:bg-[#37464f]/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-[#58a700] mb-2">
            2+
          </div>
          <div className="text-[#000437] dark:text-[#dce6ec] text-sm sm:text-base">
            Years Experience
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="bg-[#b5d2e6]/60 dark:bg-[#37464f]/60 backdrop-blur-sm rounded-xl p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-[#58a700] mb-4 flex items-center">
          <i className="fa-solid fa-graduation-cap mr-2"></i>
          Education
        </h3>
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 sm:gap-4">
          <div className="flex-1">
            <p className="text-[#000437] dark:text-[#dce6ec] font-medium text-sm sm:text-base">
              Rutgers University, Newark, NJ
            </p>
            <p className="text-[#000437]/80 dark:text-[#dce6ec]/80 text-xs sm:text-sm leading-relaxed">
              Bachelor of Arts in Computer Science with a Minor in Mathematics
            </p>
          </div>
          <p className="text-[#000437] dark:text-[#dce6ec] font-medium text-sm sm:text-base shrink-0">
            May 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
