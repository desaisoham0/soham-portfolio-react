import React from 'react';
import { useThemeContext } from '../hooks/useThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="
        group relative overflow-hidden 
        rounded-full bg-[#f1f7fb] hover:bg-[#b5d2e6]/40
        p-3 transition-all duration-300 
        ring-2 ring-[#b5d2e6] hover:ring-[#b5d2e6]/40
        backdrop-blur-sm
        hover:scale-105 active:scale-95
        dark:bg-[#131f24] dark:hover:bg-[#37464f]/40
        dark:ring-[#37464f] dark:hover:ring-[#37464f]/40
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
              ? 'text-pastelYellow-dark opacity-100 rotate-0 scale-100'
              : 'text-pastelYellow/50 opacity-0 rotate-90 scale-0 absolute inset-0'
          }
        `}
      />

      {/* Moon Icon (Dark Mode) */}
      <i
        className={`
          fas fa-moon text-lg transition-all duration-300
          ${
            theme === 'light'
              ? 'text-pastelLavender-dark opacity-100 rotate-0 scale-100'
              : 'text-pastelLavender/50 opacity-0 -rotate-90 scale-0 absolute inset-0'
          }
        `}
      />

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pastelYellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-pastelLavender/10" />
    </button>
  );
};

export default ThemeToggle;
