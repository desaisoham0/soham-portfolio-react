import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-pastelBlue hover:bg-pastelBlue-600 text-text-primary-light dark:bg-pastelBlue-dark dark:hover:bg-pastelBlue-800 dark:text-text-primary-dark focus:ring-pastelBlue-500',
    secondary:
      'bg-pastelPink hover:bg-pastelPink-600 text-text-primary-light dark:bg-pastelPink-dark dark:hover:bg-pastelPink-800 dark:text-text-primary-dark focus:ring-pastelPink-500',
    success:
      'bg-pastelGreen hover:bg-pastelGreen-600 text-text-primary-light dark:bg-pastelGreen-dark dark:hover:bg-pastelGreen-800 dark:text-text-primary-dark focus:ring-pastelGreen-500',
    warning:
      'bg-pastelYellow hover:bg-pastelYellow-600 text-text-primary-light dark:bg-pastelYellow-dark dark:hover:bg-pastelYellow-800 dark:text-text-primary-dark focus:ring-pastelYellow-500',
    accent:
      'bg-pastelLavender hover:bg-pastelLavender-600 text-text-primary-light dark:bg-pastelLavender-dark dark:hover:bg-pastelLavender-800 dark:text-text-primary-dark focus:ring-pastelLavender-500',
    outline:
      'border-2 border-pastelBlue text-pastelBlue-dark hover:bg-pastelBlue hover:text-text-primary-light dark:border-pastelBlue-dark dark:text-pastelBlue dark:hover:bg-pastelBlue-dark dark:hover:text-text-primary-dark focus:ring-pastelBlue-500',
    ghost:
      'text-text-secondary-light hover:bg-pastelBlue/10 dark:text-text-secondary-dark dark:hover:bg-pastelBlue-dark/10 focus:ring-pastelBlue-500',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
