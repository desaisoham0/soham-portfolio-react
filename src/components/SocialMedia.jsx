import React from 'react';

const SocialMedia = ({ className = '', size = 'default', gap = 'gap-6' }) => {
  const socialLinks = [
    {
      href: 'https://github.com/desaisoham0',
      icon: 'fab fa-github',
      label: 'GitHub',
      hoverColor: 'hover:text-green-600 dark:hover:text-green-400',
      hoverBorder: 'hover:border-green-600 dark:hover:border-green-400',
    },
    {
      href: 'https://www.linkedin.com/in/soham-desai-068952212/',
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-600 dark:hover:text-blue-400',
      hoverBorder: 'hover:border-blue-600 dark:hover:border-blue-400',
    },
    {
      href: 'https://x.com/desaisoham98',
      icon: 'fab fa-twitter',
      label: 'Twitter',
      hoverColor: 'hover:text-purple-600 dark:hover:text-purple-400',
      hoverBorder: 'hover:border-purple-600 dark:hover:border-purple-400',
    },
  ];

  // Size configurations
  const sizeClasses = {
    small: {
      text: 'text-base sm:text-lg',
      padding: 'px-2 py-1',
      border: 'border-2',
    },
    default: {
      text: 'text-2xl sm:text-3xl',
      padding: 'px-2 py-1 sm:px-3 sm:py-1',
      border: 'border-2 border-b-4',
    },
    large: {
      text: 'text-3xl sm:text-4xl',
      padding: 'px-3 py-2 sm:px-4 sm:py-2',
      border: 'border-2 border-b-4 sm:border-3 sm:border-b-6',
    },
    xl: {
      text: 'text-4xl sm:text-5xl',
      padding: 'px-4 py-2 sm:px-5 sm:py-3',
      border: 'border-2 border-b-4 sm:border-4 sm:border-b-8',
    },
  };

  const currentSize = sizeClasses[size] || sizeClasses.default;

  return (
    <div className={`flex flex-wrap justify-center ${gap} ${className}`}>
      {socialLinks.map(social => (
        <a
          key={social.label}
          href={social.href}
          className={`
            text-gray-700 dark:text-gray-300 
            ${social.hoverColor}
            transition-all duration-150
            ${currentSize.text} 
            hover:translate-y-0 active:translate-y-1 
            shadow-lg hover:shadow-md active:shadow-xs 
            transform rounded-xl 
            ${currentSize.padding} 
            ${currentSize.border} 
            active:border-b-2
            border-gray-300 dark:border-gray-600 
            ${social.hoverBorder}
            bg-white/80 dark:bg-gray-800/80
            hover:bg-white dark:hover:bg-gray-700
          `}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
        >
          <i className={social.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
