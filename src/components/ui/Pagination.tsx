import React, { memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  totalItems: number;
  itemsPerPage: number;
  currentOffset: number;
}

const Pagination: React.FC<PaginationProps> = memo(({ 
  currentPage, 
  totalPages, 
  onPrevPage, 
  onNextPage,
  totalItems,
  itemsPerPage,
  currentOffset
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
      <Button
        onClick={onPrevPage}
        disabled={currentPage === 1}
        variant="primary"
        size="sm"
        className="w-full sm:w-auto"
        icon={<ChevronLeft size={16} />}
      >
        Previous
      </Button>
      
      <span className="text-gray-600 text-sm text-center">
        Showing {currentOffset + 1}-{Math.min(currentOffset + itemsPerPage, totalItems)} of {totalItems}
      </span>
      
      <Button
        onClick={onNextPage}
        disabled={currentPage >= totalPages}
        variant="primary"
        size="sm"
        className="w-full sm:w-auto"
        icon={<ChevronRight size={16} className="order-last ml-1" />}
      >
        Next
      </Button>
    </div>
  );
});

Pagination.displayName = 'Pagination';

export default Pagination;