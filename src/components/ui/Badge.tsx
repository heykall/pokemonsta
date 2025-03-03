import React, { memo } from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = memo(({ children, className = '' }) => {
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full bg-white bg-opacity-30 inline-block w-fit ${className}`}>
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export default Badge;