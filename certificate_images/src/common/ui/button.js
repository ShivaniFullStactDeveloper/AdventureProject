// src/components/ui/Button/Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  ...rest
}) => {
  const buttonClasses = `btn btn-${variant} btn-${size} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;  