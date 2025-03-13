
import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { philosophers } from '@/data/philosophers';

interface TimelineNavigationProps {
  onYearClick: (year: number) => void;
}

export const TimelineNavigation: React.FC<TimelineNavigationProps> = ({ onYearClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Get all unique centuries from our philosophers
  const getCenturies = () => {
    const years = philosophers.map(p => p.birthYear).filter(y => typeof y === 'number');
    const centuries = years.map(y => Math.floor(y / 100) * 100);
    return [...new Set(centuries)].sort((a, b) => a - b);
  };

  const centuries = getCenturies();
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const formatCentury = (year: number) => {
    const century = Math.floor(Math.abs(year) / 100) + 1;
    return year < 0 ? `${century}. Yüzyıl MÖ` : `${century}. Yüzyıl`;
  };

  return (
    <div className="relative flex items-center w-full my-6">
      <button 
        onClick={scrollLeft}
        className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-foreground transition-all duration-200 hover:bg-white/20 focus:outline-none z-10"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <div 
        ref={scrollRef}
        className="flex-grow overflow-x-auto scrollbar-none mx-2 py-2"
      >
        <div className="flex space-x-2 min-w-max px-2">
          {centuries.map((century) => (
            <button
              key={century}
              onClick={() => onYearClick(century)}
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-foreground hover:bg-white/20 transition-all duration-200 focus:outline-none"
            >
              {formatCentury(century)}
            </button>
          ))}
        </div>
      </div>
      
      <button 
        onClick={scrollRight}
        className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-foreground transition-all duration-200 hover:bg-white/20 focus:outline-none z-10"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
