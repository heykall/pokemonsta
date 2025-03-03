import React, { memo } from 'react';

interface StatBarProps {
  label: string;
  value: number;
  maxValue?: number;
  colorClass?: string;
}

const StatBar: React.FC<StatBarProps> = memo(({ 
  label, 
  value, 
  maxValue = 255, 
  colorClass = 'bg-blue-500' 
}) => {
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className="flex items-center">
      <div className="w-20 sm:w-24 text-right mr-2 sm:mr-4">
        <span className="text-gray-700 font-medium text-sm">{label}</span>
      </div>
      <div className="w-10 sm:w-12 text-right mr-2 sm:mr-4">
        <span className="text-gray-900 font-bold text-sm">{value}</span>
      </div>
      <div className="flex-1 bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${colorClass}`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
});

StatBar.displayName = 'StatBar';

export default StatBar;