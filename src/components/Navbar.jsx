import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Transition } from '@headlessui/react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
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
    handleScroll();
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
    const section = href.substring(1);
    return activeSection === section;
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-screen bg-[#f1f7fb] dark:bg-[#131f24] backdrop-blur-md border-b-2 border-gray-200 dark:border-gray-700 shadow-sm"
      aria-label="Primary"
    >
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded-2xl focus:bg-white dark:focus:bg-gray-800 focus:px-3 focus:py-2 focus:ring-2 focus:ring-sky-500 font-dinrounded"
      >
        Skip to content
      </a>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-2xl sm:text-3xl font-black font-montserrat inline-flex items-baseline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#131f24] rounded-2xl px-1"
            >
              <span className="text-gray-900 dark:text-gray-100 font-dinrounded">
                SOHAM
              </span>
              <span className="ml-1 sm:ml-2 bg-gradient-to-br from-indigo-500 to-sky-500 bg-clip-text text-transparent font-dinrounded">
                DESAI
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map(link => {
              const active = getActiveClass(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative inline-flex items-center rounded-2xl px-3.5 py-2 text-sm lg:text-base font-medium font-dinrounded transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#131f24] ${
                    active
                      ? 'text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 shadow-sm'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="pointer-events-none absolute -bottom-1 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500" />
                  )}
                </a>
              );
            })}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-3 sm:gap-4 font-dinrounded">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-controls="mobile-nav"
              aria-expanded={isMenuOpen}
              className="cursor-pointer inline-flex items-center justify-center rounded-2xl p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#131f24]"
            >
              <i
                className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg sm:text-xl`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <Transition
          show={isMenuOpen}
          enter="transition ease-out duration-150"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-2"
        >
          <div className="md:hidden">
            <div
              id="mobile-nav"
              className="px-2 pt-2 pb-3 font-dinrounded font-medium space-y-1.5 backdrop-blur-md rounded-2xl mt-2 border-2 border-gray-200 dark:border-gray-700 shadow-lg"
            >
              {navLinks.map(link => {
                const active = getActiveClass(link.href);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-2xl px-3 py-2 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#131f24] ${
                      active
                        ? 'text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
