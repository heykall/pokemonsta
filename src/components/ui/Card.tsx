import React, { memo } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = memo(({ children, className = '', onClick }) => {
  return (
    <div 
      className={`rounded-xl p-3 sm:p-4 shadow-md transition-transform hover:scale-105 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;