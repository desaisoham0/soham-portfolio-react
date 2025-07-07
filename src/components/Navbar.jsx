import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're at the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  const getActiveClass = href => {
    const section = href.substring(1); // Remove '#' from href
    return activeSection === section;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-screen  backdrop-blur-md border-b-2 border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-2xl sm:text-3xl font-black font-montserrat"
            >
              <span className="text-gray-900 dark:text-gray-100 font-montserrat">
                SOHAM
              </span>
              <span className="ml-1 sm:ml-2 bg-gradient-to-br from-indigo-500 to-sky-500 bg-clip-text text-transparent font-montserrat">
                DESAI
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-300 px-3 py-2 sm:py-3 rounded-lg text-sm lg:text-base ${
                  getActiveClass(link.href)
                    ? 'text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 scale-105'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3 sm:space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              aria-label="Toggle menu"
            >
              <i
                className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg sm:text-xl`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1d backdrop-blur-md rounded-xl mt-2 border-2 border-gray-200 dark:border-gray-700 shadow-lg">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 transition-colors duration-300 rounded-lg font-medium ${
                    getActiveClass(link.href)
                      ? 'text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
