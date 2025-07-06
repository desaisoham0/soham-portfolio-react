import React from 'react';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className="bg-[#f1f7fb] dark:bg-[#131f24] border-t-2 border-[#b5d2e6] dark:border-[#37464f] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
            Connect with me
          </h3>
          <SocialMedia className="pt-2" size="small" />
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            © 2024 Soham Desai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
