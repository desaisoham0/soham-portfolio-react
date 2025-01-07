import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
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

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative z-50">
      {/* Mobile Menu Button */}
      <div className="flex justify-end p-4 md:hidden">
        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          className="
            z-50 flex items-center 
            rounded-full bg-zinc-800/90 px-4 py-2 
            text-sm font-medium text-zinc-200 
            shadow-lg shadow-zinc-800/5 
            ring-1 ring-white/10 
            backdrop-blur 
            hover:bg-zinc-700/90 active:bg-zinc-600/90 
            transform transition-all duration-200 active:scale-95
          "
        >
          Menu{" "}
          <i
            className={`
              fa-solid fa-angle-down ml-2 transition-transform duration-200 
              ${isMenuOpen ? "rotate-180" : ""}
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
            bg-zinc-800/90 
            backdrop-blur-md 
            rounded-lg 
            shadow-lg shadow-zinc-800/5 
            ring-1 ring-white/10 
            md:hidden 
            transition-all duration-200 ease-in-out 
            z-40
          "
        >
          <ul className="py-2 flex flex-col divide-y divide-white/10">
            <li>
              <Link
                onClick={handleLinkClick}
                to="/"
                className="block px-4 py-3 text-zinc-200 hover:text-yellow-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={handleLinkClick}
                to="/projects"
                className="block px-4 py-3 text-zinc-200 hover:text-yellow-500"
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                onClick={handleLinkClick}
                to="/about"
                className="block px-4 py-3 text-zinc-200 hover:text-yellow-500"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center p-4">
        <ul
          className="
            inline-flex 
            rounded-full bg-zinc-800/90 
            px-3 py-2 
            text-sm font-medium text-zinc-200 
            shadow-lg shadow-zinc-800/5 
            ring-1 ring-white/10 
            backdrop-blur
          "
        >
          <li>
            <Link to="/" className="relative block px-3 py-2 transition hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="relative block px-3 py-2 transition hover:text-yellow-500"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative block px-3 py-2 transition hover:text-yellow-500"
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
