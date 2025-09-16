import React from 'react';
import SocialMedia from './SocialMedia';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-gray-300 dark:border-gray-600 mt-8">
      <div className="container mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <div className="flex flex-col items-center gap-4 sm:gap-5">
          <h2 className="text-lg sm:text-xl font-semibold text-sky-500 font-dinrounded">
            Connect with me
          </h2>
          <nav aria-label="Social links" className="w-full flex justify-center">
            <SocialMedia className="pt-2" size="small" />
          </nav>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-dinrounded text-center">
            © {year} Soham Desai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
