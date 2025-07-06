import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = e => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Handle active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile Menu Button */}
        <div className="flex justify-between items-center py-4 md:hidden">
          <div className="text-white font-bold text-xl">SD</div>
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            className="
              z-50 flex items-center 
              rounded-full bg-white/10 px-4 py-2 
              text-sm font-medium text-white 
              shadow-lg
              ring-1 ring-white/10 
              backdrop-blur 
              hover:bg-white/20 active:bg-white/30
              transform transition-all duration-200 active:scale-95
            "
          >
            Menu{' '}
            <i
              className={`
                fa-solid fa-angle-down ml-2 transition-transform duration-200 
                ${isMenuOpen ? 'rotate-180' : ''}
              `}
            ></i>
          </button>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="
              absolute right-4 top-16 
              w-64 
              bg-slate-800/95
              backdrop-blur-md 
              rounded-lg 
              shadow-lg
              ring-1 ring-white/10 
              md:hidden 
              transition-all duration-200 ease-in-out 
              z-40
            "
          >
            <ul className="py-2 flex flex-col divide-y divide-white/10">
              {navItems.map(item => (
                <li key={item.id}>
                  <a
                    onClick={handleLinkClick}
                    href={`#${item.id}`}
                    className={`
                      block px-4 py-3 text-white hover:text-yellow-400 transition-colors duration-200
                      ${activeSection === item.id ? 'text-yellow-400 bg-white/5' : ''}
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-between items-center py-4">
          <div className="text-white font-bold text-2xl">Soham Desai</div>
          <ul
            className="
              inline-flex 
              rounded-full bg-white/10
              px-3 py-2 
              text-sm font-medium text-white
              shadow-lg
              ring-1 ring-white/10 
              backdrop-blur
            "
          >
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`
                    relative block px-4 py-2 transition-colors duration-200 rounded-full
                    ${
                      activeSection === item.id
                        ? 'text-yellow-400 bg-white/10'
                        : 'hover:text-yellow-400'
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
