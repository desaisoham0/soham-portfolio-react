import React from 'react';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-200 dark:border-gray-600 py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-lg font-semibold text-sky-500 font-dinrounded">
            Connect with me
          </h3>
          <SocialMedia className="pt-2" size="small" />
          <p className="text-sm text-gray-600 dark:text-gray-400 font-dinrounded">
            © {new Date().getFullYear()} Soham Desai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
