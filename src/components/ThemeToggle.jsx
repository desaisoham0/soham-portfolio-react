import React from 'react';
import { useThemeContext } from '../hooks/useThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="
        group relative overflow-hidden 
        rounded-full bg-white/80 hover:bg-white/90
        p-3 transition-all duration-300 
        border-2 border-gray-200 hover:border-gray-300
        backdrop-blur-sm shadow-sm
        hover:scale-105 active:scale-95
        dark:bg-gray-800/80 dark:hover:bg-gray-700/90
        dark:border-gray-600 dark:hover:border-gray-500
      "
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Sun Icon (Light Mode) */}
      <i
        className={`
          fas fa-sun text-lg transition-all duration-300
          ${
            theme === 'dark'
              ? 'text-yellow-500 opacity-100 rotate-0 scale-100'
              : 'text-yellow-300 opacity-0 rotate-90 scale-0 absolute inset-0'
          }
        `}
      />

      {/* Moon Icon (Dark Mode) */}
      <i
        className={`
          fas fa-moon text-lg transition-all duration-300
          ${
            theme === 'light'
              ? 'text-blue-600 opacity-100 rotate-0 scale-100'
              : 'text-blue-400 opacity-0 -rotate-90 scale-0 absolute inset-0'
          }
        `}
      />
    </button>
  );
};

export default ThemeToggle;
