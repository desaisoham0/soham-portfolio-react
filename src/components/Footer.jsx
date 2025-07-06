import React from 'react';

function Footer() {
  return (
    <footer className="py-8 mt-16 border-t border-white/20">
      <div className="text-center space-y-4">
        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/desaisoham0"
            className="text-white/60 hover:text-yellow-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/soham-desai-068952212/"
            className="text-white/60 hover:text-yellow-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href="https://www.instagram.com/sohamdesaiiii/"
            className="text-white/60 hover:text-yellow-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a
            href="https://x.com/desaisoham98"
            className="text-white/60 hover:text-yellow-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>

        <div className="text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Soham Desai. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind CSS, and ❤️</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
