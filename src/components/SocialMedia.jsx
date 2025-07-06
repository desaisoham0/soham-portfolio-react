import React from 'react';

const SocialMedia = ({ className = '', size = 'default', gap = 'gap-6' }) => {
  const socialLinks = [
    {
      href: 'https://github.com/desaisoham0',
      icon: 'fab fa-github',
      label: 'GitHub',
      hoverColor: '#2EA44F',
    },
    {
      href: 'https://www.linkedin.com/in/soham-desai-068952212/',
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      hoverColor: '#0A66C2',
    },
    {
      href: 'https://www.instagram.com/sohamdesaiiii/',
      icon: 'fab fa-instagram',
      label: 'Instagram',
      hoverColor: '#E4405F',
    },
    {
      href: 'https://x.com/desaisoham98',
      icon: 'fab fa-twitter',
      label: 'Twitter',
      hoverColor: '#1DA1F2',
    },
  ];

  // Size configurations
  const sizeClasses = {
    small: {
      text: 'text-lg',
      padding: 'px-2 py-1',
      border: 'border-t-2 border-l-2 border-r-2 border-b-2',
    },
    default: {
      text: 'text-3xl',
      padding: 'px-3 py-1',
      border: 'border-t-2 border-l-2 border-r-2 border-b-4',
    },
    large: {
      text: 'text-4xl',
      padding: 'px-4 py-2',
      border: 'border-t-3 border-l-3 border-r-3 border-b-6',
    },
    xl: {
      text: 'text-5xl',
      padding: 'px-5 py-3',
      border: 'border-t-4 border-l-4 border-r-4 border-b-8',
    },
  };

  const currentSize = sizeClasses[size] || sizeClasses.default;

  return (
    <div className={`flex ${gap} ${className}`}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className={`text-[#000437] dark:text-[#dce6ec] hover:text-[${social.hoverColor}] dark:hover:text-[${social.hoverColor}] transition-all duration-500 ease-out ${currentSize.text} hover:scale-110 hover:shadow-xl hover:shadow-[${social.hoverColor}]/40 hover:-translate-y-1 transform rounded-xl ${currentSize.padding} ${currentSize.border} border-[#b5d2e6] dark:border-[#37464f] hover:border-[${social.hoverColor}] dark:hover:border-[${social.hoverColor}]`}
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
