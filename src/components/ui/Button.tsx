import React, { memo } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = memo(({ 
  children, 
  className = '', 
  disabled = false, 
  onClick,
  variant = 'primary',
  size = 'md',
  icon
}) => {
  const baseClasses = 'flex items-center justify-center rounded-lg transition-colors';
  
  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: 'border border-gray-300 hover:bg-gray-100 text-gray-800',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };
  
  const disabledClasses = 'bg-gray-300 cursor-not-allowed text-gray-500';
  
  return (
    <button
      className={`
        ${baseClasses} 
        ${disabled ? disabledClasses : variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;