import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
  );
};

export const PokemonCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-xl p-3 sm:p-4 shadow-md bg-gray-100">
      <div className="flex justify-between items-start">
        <Skeleton className="h-6 w-24 mb-2" />
        <Skeleton className="h-4 w-10" />
      </div>
      <div className="flex mt-2">
        <div className="flex flex-col space-y-1">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
        <div className="ml-auto">
          <Skeleton className="w-16 h-16 sm:w-20 sm:h-20 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const PokemonDetailSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-300 pt-6 pb-20 px-4 relative">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-4">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <Skeleton className="h-8 w-40 mb-2" />
              <div className="flex mt-2 space-x-2">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
            </div>
            <Skeleton className="h-8 w-16" />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="flex justify-center mb-6">
          <Skeleton className="w-36 h-36 sm:w-48 sm:h-48 rounded-full" />
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
          <div className="flex border-b mb-4 sm:mb-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-8 w-20 mx-2" />
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <Skeleton className="h-4 w-20 mb-2" />
                <Skeleton className="h-6 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};