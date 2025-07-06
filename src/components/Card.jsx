import React from 'react';

const Card = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  ...props
}) => {
  const baseStyles = 'rounded-xl transition-all duration-300 backdrop-blur-sm';

  const variants = {
    default:
      'bg-surface-light/80 dark:bg-surface-dark/80 border border-pastelBlue/20 dark:border-pastelBlue-dark/30',
    primary:
      'bg-pastelBlue/10 dark:bg-pastelBlue-dark/10 border border-pastelBlue/30 dark:border-pastelBlue-dark/40',
    secondary:
      'bg-pastelPink/10 dark:bg-pastelPink-dark/10 border border-pastelPink/30 dark:border-pastelPink-dark/40',
    success:
      'bg-pastelGreen/10 dark:bg-pastelGreen-dark/10 border border-pastelGreen/30 dark:border-pastelGreen-dark/40',
    warning:
      'bg-pastelYellow/10 dark:bg-pastelYellow-dark/10 border border-pastelYellow/30 dark:border-pastelYellow-dark/40',
    accent:
      'bg-pastelLavender/10 dark:bg-pastelLavender-dark/10 border border-pastelLavender/30 dark:border-pastelLavender-dark/40',
    glass:
      'bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10',
  };

  const hoverEffects = hover
    ? 'hover:shadow-lg hover:shadow-pastelBlue/10 dark:hover:shadow-pastelBlue-dark/10 hover:-translate-y-1 hover:scale-[1.02]'
    : '';

  const classes = `${baseStyles} ${variants[variant]} ${hoverEffects} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', ...props }) => (
  <div
    className={`px-6 py-4 border-b border-pastelBlue/20 dark:border-pastelBlue-dark/30 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '', ...props }) => (
  <div
    className={`px-6 py-4 border-t border-pastelBlue/20 dark:border-pastelBlue-dark/30 ${className}`}
    {...props}
  >
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
