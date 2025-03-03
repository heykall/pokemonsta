import React from 'react';
import { Loader } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 48, 
  className = 'text-blue-500' 
}) => {
  return (
    <div className="flex justify-center items-center h-64">
      <Loader className={`animate-spin ${className}`} size={size} />
    </div>
  );
};

export default LoadingSpinner;