
import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { philosophers } from '@/data/philosophers';

interface FilterMenuProps {
  onFilterChange: (filters: { period?: string; movement?: string }) => void;
}

export const FilterMenu: React.FC<FilterMenuProps> = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState<string | undefined>(undefined);
  const [selectedMovement, setSelectedMovement] = useState<string | undefined>(undefined);

  // Get unique periods and movements
  const periods = [...new Set(philosophers.map(p => p.period).filter(p => p))];
  const movements = [...new Set(philosophers.map(p => p.movement).filter(m => m))];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePeriodChange = (period: string | undefined) => {
    setSelectedPeriod(period);
    onFilterChange({ period, movement: selectedMovement });
  };

  const handleMovementChange = (movement: string | undefined) => {
    setSelectedMovement(movement);
    onFilterChange({ period: selectedPeriod, movement });
  };

  const clearFilters = () => {
    setSelectedPeriod(undefined);
    setSelectedMovement(undefined);
    onFilterChange({});
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-foreground transition-all duration-200 hover:bg-white/20 focus:outline-none"
        aria-label="Toggle filter menu"
      >
        <Filter className="w-4 h-4" />
        <span className="text-sm font-medium">Filtrele</span>
        {(selectedPeriod || selectedMovement) && (
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-subtle" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 p-4 glass-card rounded-xl shadow-lg z-20 animate-scale-in">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Dönem</label>
            <select
              value={selectedPeriod || ''}
              onChange={(e) => handlePeriodChange(e.target.value || undefined)}
              className="w-full px-3 py-2 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="">Tüm Dönemler</option>
              {periods.map((period) => (
                <option key={period} value={period}>
                  {period}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Felsefi Akım</label>
            <select
              value={selectedMovement || ''}
              onChange={(e) => handleMovementChange(e.target.value || undefined)}
              className="w-full px-3 py-2 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="">Tüm Akımlar</option>
              {movements.map((movement) => (
                <option key={movement} value={movement}>
                  {movement}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-between">
            <button
              onClick={clearFilters}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Filtreleri Temizle
            </button>
            <button
              onClick={toggleMenu}
              className="text-xs text-primary hover:text-primary/80"
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
